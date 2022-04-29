/* eslint-disable import/no-anonymous-default-export */
const workExampleOneImage = require( '../images/datanexus.png');
const workExampleTwoImage = require('../images/evictiontracker.png');
const teamMemberOneImage = require('../images/erikprofile.jpg');

const links = [
  'https://atlantaregional.org/',
  'https://www.washingtonpost.com/business/2022/01/02/atlanta-apartment-evictions/',
  'https://www.washingtonpost.com/business/2021/09/28/eviction-cliff-moratorium-rental-assistance/',
  'https://www.nytimes.com/2021/10/18/us/eviction-rising-rent-cost.html',
  'https://neighborhoodnexus.org/'
]

export default {
  connect: [
    {
      header: 'Custom-Built Application or Website',
      email: 'custom@asmblg.io',
      text: `Please let us know little bit about your application/website goals, and we'll set up a time to discuss how we might be able to help.`
    },
    {
      header: 'Urban Planning and Geospatial Research',
      email: 'research@asmblg.io',
      text: `Please let us know little bit about your research goals, and we'll set up a time to discuss how we might be able to help.`
    },
    {
      header: 'Bug Fixes and Application Upgrades',
      email: 'fix@asmblg.io',
      text: `Please let us know little bit about the issues and/or desired upgrades to your existing application, and we'll set up a time to discuss how we might be able to help.`
    },  
  ],
  work: [
    {
      header: 'DataNexus',
      Description: () => <>Built from the ground up, this mapping and data visualization platform is the primary product of our founder's development efforts at the <a href={links[0]} target='_blank' rel='noreferrer'>Atlanta Regional Commission (ARC)</a>.  Serving as a conduit for public data on everything from early childhood education to housing, this single-page web application allows users to choose and customize a wide range of geographic layers along with a plethora of associated data, add and join their own data to existing layers, view relationships and patterns using collapsable charts, and export data and images in multiple formats.</>,
      image: workExampleOneImage,
      link: 'https://data.neighborhoodnexus.org'
    },
    {
      header: 'Atlanta Region Eviction Tracker',
      Description: () => <>Also a product of our founder's time at the ARC, the eviction tracker dashboard and data system is a full stack multipart application for gathering, processing,  managing, and visualizing eviction filing data.  At it's core is an automated backend comprised of custom-built HTML-parsing scripts which gather eviction filing data from public-facing court records search sites, geocode and process the case-level data into a spatially-indexed database collection, and create building-, census tract-, and county-level aggregations which feed the dashboard. Developed in collaboration with the Federal Reserve Bank of Atlanta and Georgia Institute of Technology, the tracker and eviction filing data have been cited and featured by both local and national press, including the Washington Post<sup><a href={links[1]} target='_blank' rel='noreferrer'>1</a>,<a href={links[2]} target='_blank' rel='noreferrer'>2</a></sup>, New York Times<sup><a href={links[4]} target='_blank' rel='noreferrer'>3</a></sup>, WABE, and Atlanta Journal Constitution.</>,
      image: workExampleTwoImage,
      link: 'https://metroatlhousing.org/atlanta-region-eviction-tracker/'
    }

  ],
  team: [
    {
      name: 'Erik Woodworth',
      role: 'CEO & Director, Research and Application Development', 
      image: teamMemberOneImage,
      Description: () => <>Prior to founding this company, Erik was the Research and Application Development Coordinator for the <a href={links[0]} target='_blank' rel='noreferrer'>Atlanta Regional Commission (ARC)</a> and Lead Application Developer for <a href={links[4]} target='_blank' rel='noreferrer'>Neighborhood Nexus</a>.  He holds a Masters in Geography (Research Methods) from University of Durham in England and a Masters in City and Regional Planning from the Georgia Institute of Technology.  He began building full stack web applications in 2018 and has since then overseen the development of a number of widely-used and highly-visible mapping and data visualization tools.  In his role at the ARC, he also oversaw analysis and research in an array of subjects, including housing affordability, gentrification and neighborhood change, public health, and economic polarization.  His housing research, in particular, was foundational in the creation of the Metro Atlanta Housing Strategy which is built on submarket definitions resulting from his analysis of hundreds of thousands of home sale transactions from 2013 to the present.</>

    }
  ]
}