require('dotenv').config();

const evictionCases = require('../models/evictionCases');

module.exports = {
	findAllEvictionCases: ({query}, res) =>{
    console.log(query)
    if (query.apikey === process.env.APIKEY) {
      evictionCases.find({})
			.then(filings => res.json(filings))
			.catch(err => res.status(422).json(err))
    } else {
      res.json({"message": "access denied"})
    }
  }
};