const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/r1', require('./routes/s1'));
app.use('/r2', require('./routes/s2'));


app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});