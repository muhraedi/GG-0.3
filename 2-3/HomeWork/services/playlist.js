function sortByMostPlayed(playlist) {
    const sortedPlaylist = [...playlist].sort((a, b) => b.playCount - a.playCount);
    return sortedPlaylist;
}

module.exports = { sortByMostPlayed };