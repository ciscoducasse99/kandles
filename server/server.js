const express = require("express");
const mysql = require("mysql");
require('dotenv').config()
const apiRouter = require('./routes/index')
const https= require('https')
const fs = require('fs')

// Forms (Read Only)
// Inventory (Read and Write)
// Orders (Read and Write)
// Products (Read and Write)
// Transactions (Read Only)


const connection = mysql.createConnection({
  host: "localhost",
  database: "kandles",
  user:process.env.MYSQL_USER,
  password:process.env.MYSQL_USER_PASSWORD,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRouter);

const httpsServer= https.createServer({
  key: fs.readFileSync('./server/security/cert.key'),
  cert: fs.readFileSync('./server/security/cert.pem'),
  passphrase: 'kandles'
}, app)

app.get("/", (req, res) => {
  res.send(`
  <div class="text-center">
    <h1> Server running .... </h1>
    <h3> Available routes </h3>
    <ul>
      <li>/</li>
      <li>/kandles</li>
    </ul>
    <p> api key: ${process.env.SQUARESPACE_API_KEY}</p>
  </div>`);
});

app.get("/kandles", (req, res) => {
  connection.query("SELECT * FROM candles", (err, results) => {
    if (err) res.send(err);
    res.send(results);
  });
});

app.get("/kandles/:candleId", (req, res) => {
  connection.query(`SELECT * FROM candles where candleId=${req.params.candleId}`, (err, results) => {
    if (err) res.send(err);
    res.send(results);
  });
});

connection.connect((err) => {
  if (err) {
    console.error("> Error connecting: " + err.stack);
    return;
  }
  console.log("> DB connected");
});



// This sends data to Localhost
app.listen(5000, ()=> console.log('> HTTP Server running on port 5000...'))

// This works if I add https to the localhost:5000, but its not secured
httpsServer.listen(8000, ()=> console.log('> HTTPS Server running on port 8000...'))
