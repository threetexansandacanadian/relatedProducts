const express = require('express');
const app = express();
const PORT = 4444;
const db = require('../database/db');
const cors = require('cors');

app.use(cors());
app.use(express.static('dist'));

app.get('/api/products', (req, res) => {
  //usually the req would have a search term, like * to query the db to get all
  db.getFifteenEntries((data) => {
    console.log('made it db from server!');
    //now sending should be the data we got back from the database
    res.send(data);
  })
})

app.listen(PORT, () => {
  console.log(`SCV Ready on port ${PORT}`);
});