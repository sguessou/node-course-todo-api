const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(res => {
    //     console.log(res)
    // })
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'GGG'}).then(res => {
    //     console.log(res)
    // })
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(res => {
    //     console.log(res)
    // })

    // db.collection('Users').find({name: 'Camilla'}).count().then(cnt => console.log(`Camilla cnt: ${cnt}`))
    // db.collection('Users').deleteMany({name: 'Camilla'}).then(res => console.log(res))

    db.collection('Users').find({_id: new ObjectID('5a147e4bd8c49cbe53587c3f')}).count().then(cnt => console.log(`Elon cnt: ${cnt}`))
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a147e4bd8c49cbe53587c3f')}).then(res => console.log(res))
    
    //db.close()
})