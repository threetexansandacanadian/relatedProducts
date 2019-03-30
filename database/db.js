const db = require('./db-config');

const selectAll = (cb) => {
  const queryString = 'SELECT * FROM products;';
  db.query(queryString, (err, theGoods) => {
    if (err){
      console.log(`I'll be monkey food if I don't leave!`);
      // db.end();
      cb(err);
    } else {
      console.log(theGoods);
      // db.end();
      cb(theGoods);
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