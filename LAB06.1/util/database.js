const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const mongoConnect = callback => {

    mongoClient.connect('mongodb+srv://toduong:doilanthu1@cluster0.mowc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client => {
        console.log('connected')
        callback(client)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = mongoConnect