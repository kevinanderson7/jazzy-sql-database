const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// static content. this will be replaced with a database table
// const songListArray = [
//     {
//         title: 'Take Five',
//         length: '2:55',
//         date_released: '1959-09-29'
//     },
//     {
//         title: 'So What',
//         length: '9:22',
//         date_released: '1959-08-17'
//     }
// ];

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "songs" ORDER BY "title" ASC;`;

  pool
    .query(queryText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const songData = req.body;
  const queryText = `INSERT INTO "songs" ("title", "song_length", "date_released")
                    VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [
      songData.title,
      songData.song_length,
      songData.date_released,
    ])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
