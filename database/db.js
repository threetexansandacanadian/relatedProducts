const db = require('./db-config');

// methods for interacting with the DB

// Things

const selectAll = () => {
  const queryString = 'SELECT * FROM products;';

  db.query(queryString, (err, theGoods) => {
    if (err){
      console.log(`I'll be monkey food if I don't leave!`);
      db.end();
    } else {
      console.log(theGoods);
      db.end();
    }
  })
};

selectAll();