const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });


db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50), email VARCHAR(100) ,password VARCHAR(20) ,address VARCHAR(255), apt VARCHAR(10), city VARCHAR(20), state VARCHAR(25), shippingZip VARCHAR(5), phoneNum VARCHAR(15) , creditCardNum VARCHAR(19), expiryDate VARCHAR(6), cvv VARCHAR(3), billingZip VARCHAR(5))"
    )
  )
  .catch((err) => console.log('ERROR: ',err));






module.exports = db;
