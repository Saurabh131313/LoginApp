const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true
    },

    password:{
        type:String,
    }

},{timestamps:true})


module.exports = mongoose.model('User',user)