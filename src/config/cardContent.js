/* eslint-disable import/no-anonymous-default-export */
const workExampleOneImage = require('../images/datanexus.png');
const workExampleTwoImage = require('../images/evictiontracker.png');
const workExampleThreeImage = require('../images/mahs-dataexplorer.png');
const workExampleFourImage = require('../images/houseatl-new.png');
const workExampleFiveImage = require('../images/Bloomberg City Economy.png');

const teamMemberOneImage = require('../images/erikprofile.jpg');

// const links = [
//   'https://atlantaregional.org/',
//   'https://www.washingtonpost.com/business/2022/01/02/atlanta-apartment-evictions/',
//   'https://www.washingtonpost.com/business/2021/09/28/eviction-cliff-moratorium-rental-assistance/',
//   'https://www.nytimes.com/2021/10/18/us/eviction-rising-rent-cost.html',
//   'https://neighborhoodnexus.org/',
//   'https://metroatlhousing.org',
//   'https://cspav.gatech.edu/',
//   'https://www.enterprisecommunity.org/'
// ];

export default {
  connect: [
    {
      header: 'Custom-Built Application or Website',
      email: 'custom@asmblg.io',
      text: `Please let us know a little bit about your application/website goals, and we'll set up a time to discuss how we might be able to help.`
    },
    {
      header: 'Urban Planning and Geospatial Research',
      email: 'research@asmblg.io',
      text: `Please let us know a little bit about your research goals, and we'll set up a time to discuss how we might be able to help.`
    },
    {
      header: 'Bug Fixes and Application Upgrades',
      email: 'fix@asmblg.io',
      text: `Please let us know a little bit about the issues and/or desired upgrades to your existing application, and we'll set up a time to discuss how we might be able to help.`
    },
    {
      header: 'Anything Else',
      email: 'contact@asmblg.io',
      text: `Anything that doesn't fall into any of the above buckets, send it here.`
    }   
  ],
  work: [
    {
      header: 'Bloomberg Philanthropies City Economy Dashboard',
      Description: () => <>Developed to aid mayors and city officials in economic development, this web application supports dashboards for multiple cities with modular, configurable architectures. The system integrates diverse data sources using custom-built pipelines and maintains up-to-date information through automated processes. Assemblage Consulting manages ongoing development and maintenance of this platform.</>,
      image: workExampleFiveImage,
      link: 'https://cityeconomy.org'
    },
    {
      header: 'DataNexus',
      Description: () => <>A mapping and data visualization platform enabling users to access, analyze, and export public data along with customized maps and other data visualizations. DataNexus includes an admin console for authenticated users to create custom map projects, add new layers, and integrate new datasets. Assemblage Consulting continues to oversee its development to meet evolving user needs.</>,
      image: workExampleOneImage,
      link: 'https://data.neighborhoodnexus.org'
    },
    {
      header: 'HouseATL Housing Preservation Database and Dashboard',
      Description: () => <>A collaborative platform for monitoring the Atlanta Regions’s existing and recently-expired subsidized housing inventory. Assemblage Consulting supports its frontend and backend development, data integration, and user interface updates to streamline access to critical housing information.</>,
      image: workExampleFourImage,
      link: 'https://houseatl-dev-dfbf38d30113.herokuapp.com/'
    },
    {
      header: 'Atlanta Region Eviction Tracker',
      Description: () => <>A comprehensive system for tracking eviction filings through automated data collection, geocoding, and visualization. Assemblage Consulting manages the system’s upgrades and enhancements to support policymakers and stakeholders in addressing housing challenges.</>,
      image: workExampleTwoImage,
      link: 'https://metroatlhousing.org/atlanta-region-eviction-tracker/'
    },
    {
      header: 'Metro Atlanta Housing Strategy: Data Explorer',
      Description: () => <>An interactive platform built to support housing strategies across diverse submarkets in the Atlanta region. In addition to builing and maintaining the explorer tool, Assemblage Consulting work with the Research & Analytics Department at the Atlanta Regional Commission to conduct an analysis of land use characteristics and home sale transactions to produce the submarket designations underpinning the housing strategy. We provide ongoing management and updates to ensure accessibility and relevance of housing data for regional stakeholders.</>,
      image: workExampleThreeImage,
      link: 'https://data.metroatlhousing.org/'
    }
  ],
  team: [
    {
      name: 'Erik Woodworth',
      role: 'CEO & Director, Research and Application Development', 
      image: teamMemberOneImage,
      Description: () => <>Erik brings over a decade of expertise in geospatial data systems, urban planning research, and full-stack application development. As CEO of Assemblage Consulting, he leads the ongoing development and maintenance of innovative tools like DataNexus, the Eviction Tracker, and the City Economy Dashboards. Erik’s work with clients such as Bloomberg Philanthropies, Atlanta Regional Commission, and Enterprise Community Partners ensures that complex datasets are transformed into accessible and actionable solutions for decision-makers.</>
    }
  ],
  clients: [
    {
      name: 'Atlanta Regional Commission',
      description: 'Collaborated on platforms such as DataNexus and the Eviction Tracker to provide critical data tools for regional planning and analysis.',
      link: 'https://atlantaregional.org/'
    },
    {
      name: 'Bloomberg Philanthropies',
      description: 'Partnered on the City Economy Dashboard to support economic development across cities.',
      link: 'https://cityeconomy.org'
    },
    {
      name: 'Enterprise Community Partners',
      description: 'Worked on the HouseATL Housing Preservation Database to monitor affordable housing in Atlanta.',
      link: 'https://www.enterprisecommunity.org/'
    }
  ]
};


// /* eslint-disable import/no-anonymous-default-export */
// const workExampleOneImage = require( '../images/datanexus.png');
// const workExampleTwoImage = require('../images/evictiontracker.png');
// const workExampleThreeImage = require('../images/mahs-dataexplorer.png');
// const workExampleTFourImage = require('../images/houseatl.png');
// const workExampleFiveImage = require('../images/Bloomberg City Economy.png');

// const teamMemberOneImage = require('../images/erikprofile.jpg');

// const links = [
//   'https://atlantaregional.org/',
//   'https://www.washingtonpost.com/business/2022/01/02/atlanta-apartment-evictions/',
//   'https://www.washingtonpost.com/business/2021/09/28/eviction-cliff-moratorium-rental-assistance/',
//   'https://www.nytimes.com/2021/10/18/us/eviction-rising-rent-cost.html',
//   'https://neighborhoodnexus.org/',
//   'https://metroatlhousing.org',
//   'https://cspav.gatech.edu/',
//   'https://www.enterprisecommunity.org/'
// ]

// export default {
//   connect: [
//     {
//       header: 'Custom-Built Application or Website',
//       email: 'custom@asmblg.io',
//       text: `Please let us know a little bit about your application/website goals, and we'll set up a time to discuss how we might be able to help.`
//     },
//     {
//       header: 'Urban Planning and Geospatial Research',
//       email: 'research@asmblg.io',
//       text: `Please let us know a little bit about your research goals, and we'll set up a time to discuss how we might be able to help.`
//     },
//     {
//       header: 'Bug Fixes and Application Upgrades',
//       email: 'fix@asmblg.io',
//       text: `Please let us know a little bit about the issues and/or desired upgrades to your existing application, and we'll set up a time to discuss how we might be able to help.`
//     },
//     {
//       header: 'Anything Else',
//       email: 'contact@asmblg.io',
//       text: `Anything that doesn't fall into any of the above buckets, send it here.`
//     }   
//   ],
//   work: [
//     {
//       header: 'Bloomberg Philanthropies City Economy Dashboard',
//       Description: () => <>Developed as a tool to aid mayors and other city officials involved in economic development decision-making, this web application currently hosts dashboards for Tampa, Phoenix, and Baltimore.  Both the frontend and backend were created with highly-configurable modular architectures, enabling the hosting of dashboards for additional cities as well as alternative designs, layouts, indicators, and visualizations.  Compiling together data from various sources, the information on the hosted dashboards is kept current with a custom-built data socket application for pulling, processing, and publishing data via an array of channels (e.g., SharePoint, API, SFTP, Web Driver, and GoogleDrive) and in various source formats (e.g., JSON, XLSX, CSV, PDF, and HTML).  The maintenance and hosting of the application is on-going with the planned addition of a European version and pilot city toward the end of 2024.</>,
//       image: workExampleFiveImage,
//       link: 'https://cityeconomy.org'
//     },
//     {
//       header: 'DataNexus',
//       Description: () => <>Built from the ground up, this mapping and data visualization platform is the primary product of our founder's development efforts at the <a href={links[0]} target='_blank' rel='noreferrer'>Atlanta Regional Commission (ARC)</a>.  Serving as a conduit for public data on everything from early childhood education to housing, this single-page web application allows users to choose and customize a wide range of geographic layers along with a plethora of associated data, add and join their own data to existing layers, view relationships and patterns using collapsable charts, and export data and images in multiple formats.</>,
//       image: workExampleOneImage,
//       link: 'https://data.neighborhoodnexus.org'
//     },
//     {
//       header: 'Atlanta Region Eviction Tracker',
//       Description: () => <>Also a product of our founder's time at the ARC, the eviction tracker dashboard and data system is a full stack multipart application for gathering, processing,  managing, and visualizing eviction filing data.  At it's core is an automated backend comprised of custom-built HTML-parsing scripts which gather eviction filing data from public-facing court records search sites, geocode and process the case-level data into a spatially-indexed database collection, and create building-, census tract-, and county-level aggregations which feed the dashboard. Developed in collaboration with the Federal Reserve Bank of Atlanta and Georgia Institute of Technology, the tracker and eviction filing data have been cited in both local and national press, including the Washington Post<sup><a href={links[1]} target='_blank' rel='noreferrer'>1</a>,<a href={links[2]} target='_blank' rel='noreferrer'>2</a></sup>, New York Times<sup><a href={links[3]} target='_blank' rel='noreferrer'>3</a></sup>, WABE, and Atlanta Journal Constitution.</>,
//       image: workExampleTwoImage,
//       link: 'https://metroatlhousing.org/atlanta-region-eviction-tracker/'
//     },
//     {
//       header: 'Metro Atlanta Housing Strategy',
//       Description: () => <>In the position of Principal Planner at the Atlanta Regional Commission (ARC), our founder developed the 10 submarkets serving as the spatial framework for the <a href={links[5]} target='_blank' rel='noreferrer'>Metro Atlanta Housing Strategy (MAHS)</a>. Built using millions of home sale transactions, parcel records, and land use data, the submarkets provide a means to identify housing policies and strategies sutied to the various development and market contexts across the region.  The results of the home sale price and submarket analysis and other housing-related data are made available on an interactive dashboard, also a product of our founder's development efforts.</>,
//       image: workExampleThreeImage,
//       link: 'https://data.metroatlhousing.org/'
//     },
//     {
//       header: 'HouseATL Housing Preservation Database',
//       Description: () => <>The result of the combined efforts of <a href={links[7]} target='_blank' rel='noreferrer'>Enterprise Community Parnters Southeast</a>, <a href={links[6]} target='_blank' rel='noreferrer'>Georgia Tech's Center for Spatial Planning, Analytics, and Visualization (CSPAV)</a>, and the <a href={links[0]} target='_blank' rel='noreferrer'>Atlanta Regional Commission (ARC)</a>, the HouseATL Affordable Housing Preservation Database and interactive web platform was built to provide simple access to the current and at-risk inventory of subsidized affordable housing in the City of Atlanta.  As the Research and Application Development Coordinator at the ARC, our founder led development and hosting of the backend system for integrating data from multiple agencies, geocoding and processing it, and then serving it via a custom-built API.  Working with CSPAV, He also managed the UI/UX design and development process to the make revisions and improvements to an already existing mapping and data visualization dashboard.</>,
//       image: workExampleTFourImage,
//       link: 'https://houseatl-arc-dev.herokuapp.com/#/'
//     }

//   ],
//   team: [
//     {
//       name: 'Erik Woodworth',
//       role: 'CEO & Director, Research and Application Development', 
//       image: teamMemberOneImage,
//       Description: () => <>Prior to founding this company, Erik was the Research and Application Development Coordinator for the <a href={links[0]} target='_blank' rel='noreferrer'>Atlanta Regional Commission (ARC)</a> and Lead Application Developer for <a href={links[4]} target='_blank' rel='noreferrer'>Neighborhood Nexus</a>.  He holds a Masters in Geography (Research Methods) from University of Durham in England and a Masters in City and Regional Planning from the Georgia Institute of Technology.  He began building full stack web applications in 2018 and has since overseen the development of a number of widely-used and highly-visible mapping and data visualization tools.  In his role at the ARC, he also oversaw analysis and research in an array of subjects, including housing affordability, gentrification and neighborhood change, public health, and economic polarization.  His housing research, in particular, was foundational in the creation of the Metro Atlanta Housing Strategy which is built on submarket definitions resulting from the processing and analysis of millions of home sale records in the Atlanta region from 2013 to 2021.</>

//     }
//   ]
// }