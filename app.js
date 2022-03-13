'use strict';
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Douglas!!!!!!!');
});
app.listen(port, () => {
  console.log(`Douglas app listening on port ${port}!`);
});
