const db = require('./db-config');

const selectAll = (cb) => {
  const queryString = 'SELECT * FROM products;';
  db.query(queryString, (err, theGoods) => {
    if (err){
      console.log(`I'll be monkey food if I don't leave!`);
      cb(err);
      db.end();
    } else {
      cb(theGoods.rows);
      db.end();
    }
  })
};

const getFifteenEntries = (cb) => {
  const queryString = `SELECT * FROM products limit 15;`
  db.query(queryString, (err, theGoods) => {
    if (err){
      console.log(`I'll be monkey food if I don't leave!`);
      cb(err);
    } else {
      cb(theGoods.rows);
    }
  })
}

const insertOne = () => {
}

// selectAll();

// methods for interacting with the DB

// inserts one item into DB with params

module.exports = {
  selectAll,
  getFifteenEntries
};