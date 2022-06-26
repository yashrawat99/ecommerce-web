const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = 8080;
app.use('/products', require('./routes/productsRoute'));
app.listen(PORT, () => {
  console.log(`*****server running on localhost:${PORT}`);
});
