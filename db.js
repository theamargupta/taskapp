//crud create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, {useNewUrlParser:true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log("error")
    }
   
    const db = client.db(databaseName)
   
//    db.collection('users').insertOne({
//        name: 'amar',
//        age: 21
//    }, (err, res)=>{
//        if (err) {
//            return console.log("Unable to insert")
//        }
//        console.log(res.ops)
//    })

//db.collection

// 7 inserting documents 6:35
})