var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbConnect = db.db("mydb");
    var myObj = [
        { movie: "The Banker", year: "2020", rating: 8 },
        { movie: "Bad Boys", year: "2020", rating: 7 },
        { movie: "The Hunt", year: "2020", rating: 7 },
        { movie: "Bloodshot", year: "2020", rating: 7.5 },
        { movie: "First Cow", year: "2020", rating: 6.5 }
    ];

    dbConnect.collection("myMovies").insertMany(myObj, function(err, res) {
        if (err) throw err;
        console.log(myObj);
        db.close();
    });
});