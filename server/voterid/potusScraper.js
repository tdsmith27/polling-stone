const $ = require('cheerio');
const rp = require('request-promise');
const db = require('./seeddb.js');

const url = 'https://www.vote.org/voter-id-laws/';
const states = [];
const inPerson = [];
const absentee = [];

rp(url)
  .then((html) => {
    $('.state-name', html).each((i) => {
      states[i] = $(this).text().replace(/\n/g, '');
    });
    $('td[data-title="Voter ID Requirements - In Person"]', html).each((i) => {
      inPerson[i] = $(this).text();
    });
    $('td[data-title="Voter ID Requirements - Absentee"]', html).each((i) => {
      absentee[i] = $(this).text();
    });
  })
  .then(async () => {
    let row = {};
    for (let i = 0; i < states.length; i++) { //eslint-disable-line
      row = {
        state: states[i],
        in_person: inPerson[i],
        absentee: absentee[i],
      };
      try {
        await db.insertStates(row); //eslint-disable-line
      } catch (error) {
        console.log('caught', error.message); //eslint-disable-line
      }
    }
  })
  .catch((err) => {  //eslint-disable-line

  });
