const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const useSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        trim:true,
        min: 3,
        max:60
    },
    lastName:{
        type:String,
        min:3,
        max:60,
        required: false,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        min:3,
        max: 60,
        unique: true,
        lowercase: true,
        trim:true
    },
    userId:{
        type: Number,
        unique: true,
        required: true,
        min: 4,
    },
    hash_password:{
        
    }
})