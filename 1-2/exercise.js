const songList = new Promise((resolve, rejected) => {
  setTimeout(() => {
    const songs = [
      {
        title: "song title 1",
        artists: [{ name: "artist name 1" }],
        duration: 200,
      },
      {
        title: "song title 2",
        artists: [{ name: "artist name 2" }],
        duration: 240,
      },
    ];
    if (songs !== null) {
      resolve(songs);
    } else {
      rejected("Fail");
    }
  }, 3000);
});

function printPromise(song) {
  song
    .then((songs) => {
      console.log("Songs list:");
      console.log(songs);
    })
    .catch(error => console.error(error));
}

async function printAsyncAwait(song) {
  try {
    const songs = await song;
    console.log("Songs list:");
    console.log(songs);
  } catch (error) {
    console.error(error);
  }
}

printPromise(songList);
printAsyncAwait(songList);