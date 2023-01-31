const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EvictionCaseSchema = Schema(
  {
    caseID: {type: String, required: true},
    address: {type: String},
    caseStatus: {type: String},
    defendantAddress1: {type: String},
    defendantAddress2: {type: String},
    defendantAttorney1: {type: String},
    defendantAttorney2: {type: String},
    defendantCity1: {type: String},
    defendantCity2: {type: String},
    events: {type: Array},
    fileDate: {type: Date},
    judgmentComp: {type: String},
    judgmentFor: {type: String},
    judgmentType: {type: String},
    plaintiff: {type: String},
    plaintiffAddress: {type: String},
    plaintiffAttorney: {type: String},
    plaintiffCity: {type: String},
    plaintiffPhone: {type: String},
    buildingAddress: {type: String},
    geometry: {type: Object}

  },
  {collection: 'evictionCases'}
)

const evictionCases = mongoose.model('evictionCases', EvictionCaseSchema);

module.exports = evictionCases;