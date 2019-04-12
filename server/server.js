const express = require('express');
const app = express();
const PORT = 4444;
const db = require('../database/db.js');
const cors = require('cors');

app.use(cors());
app.use(express.static('dist'));

app.get('/api/products', (req, res) => {
  //usually the req would have a search term, like * to query the db to get all
  db.getFifteenEntries((data) => {
    //now sending should be the data we got back from the database
    console.log(data)
    res.send(data);
  })
})

app.listen(PORT, () => {
  console.log(`SCV Ready on port ${PORT}`);
});