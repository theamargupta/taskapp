//crud create read update delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = "task-manager"

MongoClient.connect(connectionUrl, {useNewUrlParser:true, useUnifiedTopology: true}, (err, client) => {
    if(err) {
        return console.log("error")
    }
   
    const db = client.db(databaseName)
    
    db.collection('users').deleteOne({
        name: 'mike'
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    
})
//video 11 updating documents