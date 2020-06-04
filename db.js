//crud create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, {useNewUrlParser:true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log("error")
    }
   
    const db = client.db(databaseName)
    
    db.collection('users').findOne({ name: 'rashant' }, (err, res)=>{
        if(err) {
            return console.log("err")
        }
        //console.log(res)
    })
    
    db.collection('users').find({ age: 21 }).toArray((err, res)=>{
        if(err) {
            return console.log("err")
        }
        console.log(res)
    })
    db.collection('users').find({ age: 21 }).count((err, res)=>{
        if(err) {
            return console.log("err")
        }
        console.log(res)
    })
    
})
//video 11 updating documents