// Connect to the MongoDB server
const connect = new Mongo();
const db = connect.getDB("music");

// Perform MongoDB operations
const song = db.getCollection("songs");
const artist = db.getCollection("artists");
const popularSong = db.getCollection("popularSongs");

// Insert a document
song.insertMany([
    {
      "title": "What Was I Made For?",
      "artist": "Billie Eilish",
      "album": "What Was I Made For?"
    },
    {
      "title": "vampire",
      "artist": "Olivia Rodrigo",
      "album": "vampire"
    },
    {
      "title": "Cruel Summer",
      "artist": "Taylor Swift",
      "album": "Lover"
    },
    {
      "title": "Popular",
      "artist": ["The Weeknd", "Playboi Carti", "Madonna"],
      "album": "Popular"
    },
    {
      "title": "WHERE SHE GOES",
      "artist": "Bad Bunny",
      "album": "WHERE SHE GOES"
    },
    {
      "title": "Barbie World",
      "artist": ["Nicki Minaj", "Ice Spice", "Aqua"],
      "album": "Barbie World"
    },
    {
      "title": "Kill Bill",
      "artist": "SZA",
      "album": "SOS"
    },
    {
      "title": "As It Was",
      "artist": "Harry Styles",
      "album": "As it Was"
    },
    {
      "title": "Super Shy",
      "artist": "NewJeans",
      "album": "NewJeans 'Super Shy'"
    },
    {
      "title": "Flowers",
      "artist": "Miley Cyrus",
      "album": "Flowers"
    }
])

artist.insertMany([
    {
      "name": "Billie Eilish",
      "dateOfBirth": "2001-12-18",
      "genres": ["Pop", "Alternative"]
    },
    {
      "name": "Olivia Rodrigo",
      "dateOfBirth": "2003-02-20",
      "genres": ["Pop", "Alternative"]
    },
    {
      "name": "Taylor Swift",
      "dateOfBirth": "1989-12-13",
      "genres": ["Pop", "Country"]
    },
    {
      "name": "The Weeknd",
      "dateOfBirth": "1990-02-16",
      "genres": ["R&B", "EDM"]
    },
    {
      "name": "Bad Bunny",
      "dateOfBirth": "1994-03-10",
      "genres": ["Reggaeton", "Latin Trap"]
    },
    {
      "name": "Nicki Minaj",
      "dateOfBirth": "1982-12-08",
      "genres": ["Hip Hop", "Rap"]
    },
    {
      "name": "SZA",
      "dateOfBirth": "1989-11-08",
      "genres": ["R&B", "Neo Soul"]
    },
    {
      "name": "Harry Styles",
      "dateOfBirth": "1994-02-01",
      "genres": ["Pop", "Rock"]
    },
    {
      "name": "NewJeans",
      "dateOfBirth": "2022-08-01",
      "genres": ["Pop", "K-Pop"]
    },
    {
      "name": "Miley Cyrus",
      "dateOfBirth": "1992-11-23",
      "genres": ["Pop", "Rock"]
    }
])

popularSong.insertMany([
    {
      "title": "What Was I Made For?",
      "played": 50000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "vampire",
      "played": 75000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "Cruel Summer",
      "played": 100000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "Popular",
      "played": 120000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "WHERE SHE GOES",
      "played": 90000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "Barbie World",
      "played": 60000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "Kill Bill",
      "played": 80000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "As It Was",
      "played": 110000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "Super Shy",
      "played": 70000,
      "period": "2023-01-01 to 2023-06-30"
    },
    {
      "title": "Flowers",
      "played": 95000,
      "period": "2023-01-01 to 2023-06-30"
    }
])
