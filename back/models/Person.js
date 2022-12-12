const mongoose = require('mongoose')

const Person = mongoose.model('Person',{
    name:String,
    cpf:Number,
    password:String,
    accountValue:Number,
})

module.exports = Person