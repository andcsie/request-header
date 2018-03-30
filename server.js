// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
let ip, language, os;
let commaPos = 0, paraPos = 0;
let resultObj = {};

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  ip = request.headers['x-forwarded-for'];
  commaPos = ip.indexOf(',');
  ip = ip.substring(0, commaPos);
  
  language = request.headers['accept-language'];
  commaPos = language.indexOf(',');
  language = language.substring(0, commaPos);
  
  os = request.headers['user-agent'];
  commaPos = os.indexOf('(');
  paraPos = os.indexOf(')');
  os = os.substring(commaPos + 1, paraPos);
  
  resultObj.ipaddress = ip;
  resultObj.language = language;
  resultObj.os = os;
  response.json(resultObj);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
