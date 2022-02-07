const getDb = require('mongodb').getDb
const mongoClient = mongodb.MongoClient

let _db;


const mongoConnect = callback => {

    mongoClient.connect('mongodb+srv://toduong:doilanthu1@cluster0.mowc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client => {
        console.log('connected')
        _db = client.db()
        callback(client)
    })
    .catch(err => {
        console.log(err)
    })
}

const getDb = () => {
    if(_db) {
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;