const db = require('./testdb.js')
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.vote.org/voter-id-laws/';

const states = [];
const inPerson = [];
const absentee = [];

rp(url)
  .then(function(html){
    $('.state-name', html).each(function(i, elem) {
      states[i] = $(this).text().replace(/\n/g, '');
    })
    $('td[data-title="Voter ID Requirements - In Person"]', html).each(function(i, elem) {
      inPerson[i] = $(this).text();
    })
    $('td[data-title="Voter ID Requirements - Absentee"]', html).each(function(i, elem) {
      absentee[i] = $(this).text();
    })
  })
  .then(async function() {
    let row = {};
    for (let i = 0; i < states.length; i++) {
      //console.log(states[i], inPerson[i], absentee[i])
      row = {state: states[i], in_person: inPerson[i], absentee: absentee[i]}
      //console.log('each row in scraper ', row)
      try {
        let success = await db.insertStates(row)
      } catch (error) {
        console.log('caught', error.message);
      }
    }
  })
  .catch(function(err){
    
  });
