require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const bodyParser = require('body-parser')
// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(bodyParser.json())
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/checkout', (req, res) => {
  console.log('POST FROM SERVER, body: ', req.body.mergedForm);
  var formData = req.body.mergedForm;
  db.queryAsync("INSERT INTO responses (name, email, password, address, apt, city, state, shippingZip, phoneNum, creditCardNum, expiryDate, cvv, billingZip) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [formData.name, formData.email, formData.password, formData.street, formData.apt, formData.city, formData.state, formData.zip, formData.phone, formData.cardNum, formData.expiry, formData.cvv, formData.billingZip])
    .then(() => {
      console.log('inserted successfully')
      res.end();
    })
    .catch(err => {
      console.log(err);
    })

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
