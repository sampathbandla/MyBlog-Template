var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hyderabadvipmail:sssU9989@upvote-lzmgx.mongodb.net/admin?retryWrites=true&w=majority";

function login(username,password,callback)
{
    if(username.length > 10)
    {
        callback(false,"Username Length is > max");
    }
    else
    {
        if(password.length > 15)
        {
            callback(false,"Password length is > max");
        }
        else
        {
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("myblog");
                var query = {"username":username,"password":password}
                dbo.collection("users").findOne(query, function(err, result) {
                  if (err)
                    {
                       console.log(err);
                       callback(false,"Internal Error can you come back later ") 
                    }
                  callback(true,result._id)
                  db.close();
                });
              });
        }
    }
}


module.exports = login;