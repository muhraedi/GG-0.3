const express = require('express');
const app = express();
const port = 3000;

const playlists = require('./controllers/playlist');

app.use(express.json());

app.use('/', playlists);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});