import React, { useMemo, useState } from 'react';
import cardContent from './config/cardContent.jsx';

import './App.css';
import logo from './images/Assemblage Logo 3.png';
import clientPartnerListRaw from '../client-partner-list.csv?raw';
import organizationLogos from './config/organizationLogos.json';

const parseClientPartnerList = (rawCsv) => {
  const lines = rawCsv.trim().split(/\r?\n/);
  const rows = lines.slice(1);

  return rows
    .map((line) => {
      const [name, type, url] = line.split(',').map((value) => value.trim());
      return { name, type, url };
    })
    .filter((item) => item.name && item.url);
};

const DARK_BG_LOGOS = new Set(['https://www.lisboa.pt/']);

const getLogoUrl = (orgUrl) => {
  try {
    const hostname = new URL(orgUrl).hostname.replace(/^www\./, '');
    return `https://logo.clearbit.com/${hostname}`;
  } catch {
    return null;
  }
};

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');

function App() {
  const [orgFilter, setOrgFilter] = useState('all');
  const [logoErrors, setLogoErrors] = useState({});

  const organizations = useMemo(() => parseClientPartnerList(clientPartnerListRaw), []);

  const filteredOrganizations = useMemo(() => {
    if (orgFilter === 'all') {
      return organizations;
    }

    return organizations.filter((org) => org.type.toLowerCase() === orgFilter);
  }, [organizations, orgFilter]);

  return (
    <div className="App">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Assemblage Consulting home">
          <img src={logo} className="brand-logo" alt="Assemblage Consulting" />
        </a>

        <nav className="top-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#team">Team</a>
          <a href="#partners">Clients & Partners</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-reveal">
          <div className="hero-intro">Research, geospatial analytics, and web applications</div>
          <h1>Data-driven tools for public-impact organizations</h1>
          <p>
            We are a small, nimble consulting firm specializing in geospatial analytics, research,
            data visualization, and full stack application development for public, nonprofit, and
            advocacy-oriented organizations wishing to turn data into action.
          </p>
          <p>
            Our mission is to facilitate the gathering of people, data, and technology in a way
            that moves the needle toward greater equity, inclusivity, and transparency in the
            various decision-making processes that impact our local and global communities.
          </p>
        </section>

        <section id="work" className="content-section section-reveal">
          <div className="section-header">
            <h2>Our Work</h2>
            <p>
              We provide services in geospatial anaylsis and visualization, planning research, and
              full stack application development including: the design, creation, and deployment of
              custom-built interactive web apps, database development and maintenance, and bug fixes
              and upgrades to existing applications.
            </p>
          </div>

          <div className="work-grid">
            {cardContent.work.map(({ header, Description, image, link }) => (
              <article className="work-card" key={header}>
                <a href={link} target="_blank" rel="noreferrer" className="work-image-link">
                  <img src={image} alt={header} />
                </a>
                <div className="work-copy">
                  <h3>{header}</h3>
                  <div>
                    <Description />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="content-section section-reveal">
          <div className="section-header compact">
            <h2>Our Team</h2>
            <p>
              Founded in 2022, we are a small research and application development shop located in
              Evanston, Illinois.
            </p>
          </div>

          {cardContent.team.map(({ name, role, Description, image }) => (
            <article className="team-card" key={name}>
              <img src={image} alt={`Team member ${name}`} />
              <div>
                <h3>{name}</h3>
                <p className="team-role">{role}</p>
                <div className="team-description">
                  <Description />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="partners" className="content-section section-reveal">
          <div className="section-header compact">
            <h2>Current and Past Clients and Partners</h2>
            <p>Organizations from our active and historical project work.</p>
          </div>

          <div className="partner-filters" role="tablist" aria-label="Filter organizations">
            <button
              type="button"
              className={orgFilter === 'all' ? 'is-active' : ''}
              onClick={() => setOrgFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={orgFilter === 'client' ? 'is-active' : ''}
              onClick={() => setOrgFilter('client')}
            >
              Clients
            </button>
            <button
              type="button"
              className={orgFilter === 'partner' ? 'is-active' : ''}
              onClick={() => setOrgFilter('partner')}
            >
              Partners
            </button>
          </div>

          <div className="logo-grid">
            {filteredOrganizations.map((org) => {
              const localLogo = organizationLogos[org.url] || null;
              const logoUrl = localLogo || getLogoUrl(org.url);
              const hideImage = !logoUrl || logoErrors[org.url];
              const darkBg = DARK_BG_LOGOS.has(org.url);

              return (
                <a
                  className={`logo-card${darkBg ? ' logo-card--dark-bg' : ''}`}
                  href={org.url}
                  target="_blank"
                  rel="noreferrer"
                  key={org.url}
                  aria-label={org.name}
                >
                  {hideImage ? (
                    <div className="logo-fallback">{getInitials(org.name)}</div>
                  ) : (
                    <img
                      src={logoUrl}
                      alt={`${org.name} logo`}
                      loading="lazy"
                      onError={() =>
                        setLogoErrors((prev) => ({
                          ...prev,
                          [org.url]: true
                        }))
                      }
                    />
                  )}
                  <div className="logo-meta">
                    <span>{org.name}</span>
                    <small>{org.type}</small>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="connect" className="content-section section-reveal">
          <div className="section-header compact">
            <h2>Connect With Us</h2>
            <p>Here are a few ways to contact us depending on what you're after.</p>
          </div>

          <div className="connect-grid">
            {cardContent.connect.map(({ header, email, text }) => (
              <article className="connect-card" key={email}>
                <h3>{header}</h3>
                <p>{text}</p>
                <a href={`mailto:${email}`}>{email}</a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">&copy; 2025 Assemblage Consulting LLC</footer>
    </div>
  );
}

export default App;
