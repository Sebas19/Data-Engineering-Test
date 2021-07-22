const {SQL} = require('./connect-mssql');
const {NoSQL,client} =  require('./mongo');
SQL();
NoSQL().finally(() => client.close());