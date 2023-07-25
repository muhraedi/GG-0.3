// Inserting Documents
db.movies.insertOne({"title": "Stand by Me"})

db.movies.drop()
db.movies.insertMany(
    [
        {"title": "Ghostbusters"},
        {"title": "E.T."},
        {"title": "Blade Runner"}
    ]
)
db.movies.find()

// Removing Documents
db.movies.find()
db.movies.deleteOne({"_id": 4})
db.movies.find()

db.movies.find()
db.movies.deleteMany({"year": 1984})
db.movies.find()

db.movies.find()
db.movies.deleteMany({})
db.movies.find()

db.movies.drop()

// Updating Documents - Set
db.users.findOne()

db.users.updateOne({"_id": ObjectId("4b253b067525f35f94b60a31")},
{"$set": {"favorite book" : "War and Peace"}})

db.users.updateOne({"name": "joe"},
{"$set": {"favorite book":
["Cat's Cradle", "Foundation Trilogy", "Ender's Game"]}})

// Updating Documents - Unset
db.users.updateOne({"name": "joe"},
{"$unset" : {"favorite book" : 1}})

// Updating Documents - Increment
db.analytics.updateOne({"url": "www.example.com"},
{"$inc": {"pageviews" : 1}})

// Array Operators - Push
db.blog.posts.findOne()
db.blog.posts.updateOne({"title" : "A blog post"},
{"$push" : {"comments" :
{"name" : "joe", "email": "joe@example.com",
"content" : "nice post."}}})
db.blog.posts.findOne()

// Index
for (i = 0; i < 1000000; i++) {
    db.users.insertOne(
        {
            "i" : i,
            "username" : "user"+i,
            "age" : Math.floor(Math.random()*120),
            "created" : new Date()
        }
    )
}

db.users.find({"username": "user101"}).explain("executionStats")

// Creating an Index
db.users.createIndex({"username": 1})

// Impact on Execution Stat
db.users.find({"username": "user101"}).explain("executionStats")

// Compound Indexes
db.users.find().sort({"age" : 1, "username" : 1})

db.users.createIndex({"age" : 1, "username" : 1})

// The Aggregation Pipeline
// Match
db.movies.aggregate([
    { "$match" : {"genre": "Sci-Fi"}}
])

db.movies.aggregate([
    { "$match" : {"genre": { "$in": ["Action", "Crime"]}}}
])

// Sort
db.movies.aggregate([
    { "$sort" : {"gross": -1}}
])

// Group
db.movies.aggregate([
    { "$group" : {"_id": "genre"}}
])

db.movies.aggregate([
    {
        "$group": {
            "_id": {
                "genre": "$genre",
                "name": "$name"
            }
        }
    }
])

db.movies.aggregate([
    {
        "$group": {
            "_id": {
                "genre": "$genre",
                "name": "name"
            },
            "highest_gross": {
                $max: "$gross"
            },
            "movie_name": {
                $first: "$name"
            }
        }
    }
])