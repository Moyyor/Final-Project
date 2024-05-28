const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter');

const cors = require("./middlewares/cors.js")
const connectToDatabase = require('./database/connect');


const PORT = 3000;
const app = express();

connectToDatabase();

app.use( 
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  apiRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});
