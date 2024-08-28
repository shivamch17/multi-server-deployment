const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from Server 2');
});

module.exports = router;