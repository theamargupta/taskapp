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
   
   db.collection('users').insertOne({
       name: 'amar',
       age: 21
   })
})