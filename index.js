const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/generate-image', require('./routes/image-generation-router'));
app.use('/r2', require('./routes/s2'));

app.get('/', (req, res) => {
    res.send('Welcome to SuperSonic Dev Server 🚀');
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});