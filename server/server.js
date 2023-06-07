require('dotenv').config()
const express = require('express')
 
const mongoose = require ('mongoose')

const PORT = process.env.PORT;

    try {
        await mongoose.connect("", 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }catch(err){
        console.log(err)
    }

