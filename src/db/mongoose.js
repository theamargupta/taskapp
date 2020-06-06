const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    likefruit: {
        type: Boolean
    }
})

// const me = new User({
//     name: 'amar',
//     age: "30dv"
// })

// me.save().then((res)=>{
//   console.log(res)  
// }).catch((err)=>{
//     console.log(err)
// })

const prashant = new User({
    name: 'prashant',
    
})

prashant.save().then((res)=>{
    console.log(res)  
  }).catch((err)=>{
      console.log(err)
  })