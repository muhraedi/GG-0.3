const express = require('express');
const { playlist, addSong, getPlaylist } = require('../models/playlist');
const { sortByMostPlayed } = require('../services/playlist');
const router = express.Router();

router.use(express.json());

router.post('/playlist', (req, res) => {
    try {
        const { title, artists, url, playCount } = req.body;
        if(!title || !artists || !url || !playCount) {
            throw new Error("Insufficient Parameter")
        }
        const song = addSong(title, artists, url, playCount);
        playlist.push(song);
        res.status(201).json({message: "Song added to playlist"})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
});

router.get('/playlist/:id', (req, res) => {
    const { params } = req;
    const { id } = params;
    try {
        const song = getPlaylist(id);
        song.playCount++;
        res.status(200).json({song});
    } catch(e) {
        res.status(500).json({error: e.message})
    }
});

router.get("/playlists", (req, res) => {
    try {
        const sortedPlaylist = sortByMostPlayed(playlist);
        res.status(200).json(sortedPlaylist);
    } catch(e) {
        res.status(500).json({error: e.message})
    }
});

module.exports = router;