const express = require('express');
const path = require('path');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Routes
  //home
  app.use('/', require('./routes/web'));

app.listen(PORT, () => console.log(`listening...${PORT}`));