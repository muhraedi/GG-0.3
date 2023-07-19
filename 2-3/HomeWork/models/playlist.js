let playlist = [];

function addSong(title, artists, url, playCount) {
    const newSong = {
        playlistId: generatePlaylistId(),
        title: title,
        artists: artists,
        url: url,
        playCount: playCount
    }
    return newSong
}

function getAllPlaylists() {
    return playlist;
}

function getPlaylist(playlistId) {
    return playlist.find((p) => p.playlistId === playlistId);
}

function generatePlaylistId() {
    return Math.random().toString(10).substr(2,6)
}

module.exports = {
    playlist,
    addSong,
    getAllPlaylists,
    getPlaylist
}