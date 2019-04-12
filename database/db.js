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
  const queryString = `select * from products order by random() limit 15;`
  db.query(queryString, (err, theGoods) => {
    if (err){
      console.log(`I'll be monkey food if I don't leave!`);
      cb(err);
    } else {
      cb(theGoods.rows);
    }
  })
}

module.exports = {
  getFifteenEntries
};