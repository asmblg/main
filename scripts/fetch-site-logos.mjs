import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const csvPath = path.join(root, 'client-partner-list.csv');
const logoDir = path.join(root, 'public', 'logos');
const manifestPath = path.join(root, 'src', 'config', 'organizationLogos.json');

const toAbsoluteUrl = (href, baseUrl) => {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return null;
  }
};

const sanitizeHost = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'unknown-host';
  }
};

const parseCsv = (raw) => {
  const lines = raw.trim().split(/\r?\n/).slice(1);
  return lines
    .map((line) => {
      const [name, type, url] = line.split(',').map((item) => item.trim());
      return { name, type, url };
    })
    .filter((row) => row.name && row.url);
};

const pickExtension = (contentType, sourceUrl) => {
  const type = (contentType || '').toLowerCase();
  if (type.includes('svg')) return 'svg';
  if (type.includes('png')) return 'png';
  if (type.includes('jpeg') || type.includes('jpg')) return 'jpg';
  if (type.includes('webp')) return 'webp';
  if (type.includes('x-icon') || type.includes('icon')) return 'ico';

  const pathname = new URL(sourceUrl).pathname.toLowerCase();
  if (pathname.endsWith('.svg')) return 'svg';
  if (pathname.endsWith('.png')) return 'png';
  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'jpg';
  if (pathname.endsWith('.webp')) return 'webp';
  if (pathname.endsWith('.ico')) return 'ico';
  return 'img';
};

const discoverCandidates = (html, pageUrl) => {
  const candidates = [];
  const linkRegex = /<link[^>]*>/gi;
  const tags = html.match(linkRegex) || [];

  for (const tag of tags) {
    const relMatch = tag.match(/rel\s*=\s*['\"]([^'\"]+)['\"]/i);
    const hrefMatch = tag.match(/href\s*=\s*['\"]([^'\"]+)['\"]/i);
    if (!hrefMatch) continue;

    const rel = (relMatch?.[1] || '').toLowerCase();
    if (!rel.includes('icon') && !rel.includes('logo')) continue;

    const absolute = toAbsoluteUrl(hrefMatch[1], pageUrl);
    if (absolute) candidates.push(absolute);
  }

  const ogImage = html.match(/<meta[^>]*property=['\"]og:image['\"][^>]*content=['\"]([^'\"]+)['\"][^>]*>/i);
  if (ogImage?.[1]) {
    const absolute = toAbsoluteUrl(ogImage[1], pageUrl);
    if (absolute) candidates.push(absolute);
  }

  candidates.push(
    toAbsoluteUrl('/favicon.ico', pageUrl),
    toAbsoluteUrl('/favicon.png', pageUrl),
    toAbsoluteUrl('/apple-touch-icon.png', pageUrl),
    toAbsoluteUrl('/apple-touch-icon-precomposed.png', pageUrl)
  );

  return [...new Set(candidates.filter(Boolean))];
};

const fetchHtml = async (url) => {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; AssemblageLogoFetcher/1.0)'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed HTML fetch: ${response.status}`);
  }

  const html = await response.text();
  return { html, finalUrl: response.url };
};

const fetchFirstImage = async (candidates) => {
  for (const candidate of candidates) {
    try {
      const response = await fetch(candidate, {
        redirect: 'follow',
        headers: {
          'user-agent': 'Mozilla/5.0 (compatible; AssemblageLogoFetcher/1.0)'
        }
      });

      if (!response.ok) continue;
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.toLowerCase().startsWith('image/')) continue;

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      if (buffer.length < 200) continue;

      return {
        buffer,
        contentType,
        sourceUrl: response.url
      };
    } catch {
      // try next candidate
    }
  }

  return null;
};

const run = async () => {
  const rawCsv = await fs.readFile(csvPath, 'utf8');
  const organizations = parseCsv(rawCsv);
  const manifest = {};
  const summary = [];

  for (const org of organizations) {
    try {
      let candidates = [];

      try {
        const { html, finalUrl } = await fetchHtml(org.url);
        candidates = discoverCandidates(html, finalUrl);
      } catch {
        candidates = [
          toAbsoluteUrl('/favicon.ico', org.url),
          toAbsoluteUrl('/favicon.png', org.url),
          toAbsoluteUrl('/apple-touch-icon.png', org.url),
          toAbsoluteUrl('/apple-touch-icon-precomposed.png', org.url)
        ].filter(Boolean);
      }

      const image = await fetchFirstImage(candidates);

      if (!image) {
        summary.push({ name: org.name, status: 'missing' });
        continue;
      }

      const host = sanitizeHost(org.url);
      const ext = pickExtension(image.contentType, image.sourceUrl);
      const fileName = `${host}.${ext}`;
      const absoluteFile = path.join(logoDir, fileName);

      await fs.writeFile(absoluteFile, image.buffer);
      manifest[org.url] = `/logos/${fileName}`;
      summary.push({ name: org.name, status: 'saved', fileName, from: image.sourceUrl });
    } catch (error) {
      summary.push({ name: org.name, status: 'error', error: String(error.message || error) });
    }
  }

  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  console.log('Logo fetch summary:');
  for (const row of summary) {
    if (row.status === 'saved') {
      console.log(`saved  | ${row.name} -> ${row.fileName}`);
    } else if (row.status === 'missing') {
      console.log(`miss   | ${row.name}`);
    } else {
      console.log(`error  | ${row.name} | ${row.error}`);
    }
  }
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
