const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
      type: String,
      required:true,
        validate(value) {
            if (!validator.isEmail(value)){
                throw new Error('Must provide a valid email address')
            } 
        },
        trim: true,
        lowercase:true
    },
    email: {
        type: String,
      required:true,
        validate(value) {
            if (!validator.isPassword(value)){
                throw new Error('Must provide a valid email address')
            } 
        }
        
    },
    age: {
        type: Number,
        validate(value){
            if (value < 0 ) {
                throw new Error('age must be a positive no')
            }
        }
    },
    likefruit: {
        type: Boolean
    },
    task: {
        
    }
})

module.exports = User