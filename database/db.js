const db = require('./db-config');

const selectAll = (cb) => {
  const queryString = 'SELECT * FROM products;';
  db.query(queryString, (err, theGoods) => {
    if (err){
      console.log(`I'll be monkey food if I don't leave!`);
      cb(err);
      db.end();
    } else {
      console.log(theGoods.rows);
      cb(theGoods);
      db.end();
    }
  })
};

const insertOne = () => {
}

// selectAll();

// methods for interacting with the DB

// inserts one item into DB with params

module.exports = {
  selectAll
};