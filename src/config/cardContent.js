/* eslint-disable import/no-anonymous-default-export */
const dataNexusImage = require( '../images/datanexus.png')

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
      description: `Built from the ground up, this mapping and data visualization platform is the primary product of our founder's development efforts at the Atlanta Regional Commission (ARC).  Serving as a conduit for public data on everything from early childhood education to housing, this single-page web application allows users to choose and customize a wide range of geographic layers along with a plethora of associated data, add and join their own data to existing layers, view relationships and patterns using collapsable charts, and export data and images in multiple formats.`,
      image: dataNexusImage,
      link: 'https://data.neighborhoodnexus.org'
    }
  ]
}