const express = require('express');
const app = express();
const PORT = 4444;
const db = require('../database/db');

app.get('/', (req, res) => {
  res.send('howdy!')
})

//route server to db
app.get('/api/products', (req, res) => {
  //usually the req would have a search term, like * to query the db to get all
  db.selectAll(() => {
    console.log('made it db from server!')
    res.send(`:sunglasses:`)
  })
})

app.listen(PORT, () => {
  console.log(`SCV Ready on port ${PORT}`);
});