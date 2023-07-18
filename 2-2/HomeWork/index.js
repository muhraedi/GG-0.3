const express = require('express');
const app = express();
const port = 3000

app.use(express.json());

let playlist = [];

// Add song
app.post('/playlist', (req, res) => {
    const { title, artists, url } = req.body;
    const song = { title, artists, url };
    playlist.push(song);
    res.status(201).send('Song added to playlist');
});

// Play song
app.get('/playlist/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const song = playlist[id];
    res.status(200).send(song);
});

// Get list of songs
app.get('/playlists', (req, res) => {
  res.status(200).send(playlist);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
