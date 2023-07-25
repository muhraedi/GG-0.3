import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify</h1>
      </header>

      <main>
        <div className="section">
          <div className="song-list">
            <h2>All Songs</h2>
            <div className="song">
              <div className="song-details">
                <div className="song-title">Song Title 1</div>
                <div className="song-artist">Artist Name 1</div>
              </div>
            </div>
            <div className="song">
              <div className="song-details">
                <div className="song-title">Song Title 2</div>
                <div className="song-artist">Artist Name 2</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="song-list most-played-songs">
            <h2>Most Played Songs</h2>
            <div className="song">
              <div className="song-details">
                <div className="song-title">Song Title 1</div>
                <div className="song-artist">Artist Name 1</div>
              </div>
            </div>
            <div className="song">
              <div className="song-details">
                <div className="song-title">Song Title 2</div>
                <div className="song-artist">Artist Name 2</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="add-to-playlist">
            <h2>Add Songs to Your Playlist</h2>
            <form>
              <input type="text" placeholder="Song Title"/>
              <input type="text" placeholder="Artist Name"/>
              <input type="submit" value="Add"/>
            </form>
          </div>
        </div>
      </main>

      <footer className="footer">
        &copy; 2023 Spotify. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
