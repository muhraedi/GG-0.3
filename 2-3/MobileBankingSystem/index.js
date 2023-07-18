const express = require('express');
const app = express();
const port = 3000;

const transactions = require('./controllers/transaction');
const customers = require('./controllers/customer');

app.use(express.json());

app.use('/', transactions);
app.use('/', customers);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});