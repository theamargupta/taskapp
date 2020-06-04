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

// db.collection('users').insertMany([
//     {
//     name:'amar',
//     age:21
// }, {
//     name : 'prashant',
//     age:21
//         }
//     ], (err, res) => {
//         if(err){
//             return console.log(err)
//         }
//         console.log(res.ops)
//     })
// })

db.collection('tasks').insertMany([
    {
        name: 'admin',
        completed: true
    },
    {
        name: 'user',
        completed: true
    },
    {
        name: 'admin2',
        completed: false
    }
], (err, res)=>{
    if(err){
        return console.log(err)
    }
    console.log(res.ops)
})


})