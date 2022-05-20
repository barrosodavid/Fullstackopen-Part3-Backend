require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log("Connecting to", url)

mongoose.connect(url).then(result => {
    console.log("Connected to MongoDB successfully")    
}).catch( error => {
    console.log("Error connecting to MongoDB:", error.message)
})

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = moongose.model('Person', personSchema)