var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { movie: "The Banker" };
    var newvalues = { $set: { movie: "John Wick", year: "2020", rating: 10 } };
    dbo.collection("myMovies").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified);
    });
    dbo.collection("myMovies").find({}).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);

        db.close();
    })
});