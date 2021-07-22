const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'banyack'

async function NoSQL() {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const items_data = db.collection('items_data')
    const customers_data = db.collection('customers_data')

    const findResult_items = await items_data.find({}).toArray()
    const findResult_customers = await customers_data.find({}).toArray()
    console.log('Found documents =>', findResult_customers)
  
    return 'done.'
}

module.exports = {
    NoSQL,
    client
}