const express = require('express');
const app = express();
const PORT = 8080;
const db = require('../database/db');

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.send('howdy!')
// })

//route server to db
// app.get('/api/products', (req, res) => {
//   //usually the req would have a search term, like * to query the db to get all
//   db.selectAll((data) => {
//     console.log('made it db from server!');
//     //now sending should be the data we got back from the database
//     res.send(data);
//   })
// })

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