const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    var dbConnect = db.db("mydb");
    if (err) throw err;
    dbConnect.collection("myMovies").findOne({}, function(err, res) {
        if (err) throw err;
        console.log(res);
    });
    var query = { rating: 7 };
    dbConnect.collection("myMovies").find(query).toArray(function(err, res) {

        if (err) throw err;
        console.log(res);

    });
    dbConnect.collection("myMovies").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);

    });
    db.close();
});