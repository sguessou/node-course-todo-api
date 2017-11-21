const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a1480588da92436ec49cdb6')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, err => console.log('Unable to fetch todos', err))

    // db.collection('Todos').find().count().then(count => {
    //     console.log(`Todos count: ${count}`)
    // }, err => console.log('Unable to fetch count', err))

    db.collection('Users').find({name: 'Elon'})
    .toArray().then(user => {
        console.log(JSON.stringify(user, undefined, 2))
    }, err => console.log('Unable to fetch count', err))
    
    //db.close()
})