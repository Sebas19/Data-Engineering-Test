const sql = require('mssql')
const sqlDWH = sql;
var config = {
    user: 'sa',
    password: 'MyPass@word',
    server: 'localhost', 
    database: 'test',
    options: { 
      trustServerCertificate: true,
      } 
    };

var configDW = {
        user: 'sa',
        password: 'MyPass@word',
        server: 'localhost', 
        database: 'DWH',
        options: { 
          trustServerCertificate: true,
          } 
};
    

async function SQL (){
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
        const result = await sql.query`SELECT DISTINCT O.order_number,O.date_order,O.price as Total,O.comment_order,I.item_name,I.price,C.rfc,C.curp,C.first_name,C.last_name,C.phone_number,C.adress FROM [items_bought] O JOIN items I ON O.ID_item = I.ID RIGHT JOIN customer C ON C.ID = O.ID_customer`
        //console.log(result)
        result.recordset.forEach(element => {
            console.log(element);
            insert(element,sql);
        });
        //await sql.query`INSERT INTO extract_sql VALUES ($)`
    } catch (err) {
        console.log(err);
    }
}

async function insert(element,sqlDWH){
    try {
        await sqlDWH.connect(configDW);
        await sqlDWH.query`INSERT INTO extract_sql VALUES (${element.first_name},
        ${element.last_name},
        ${element.phone_number},
        ${element.curp},
        ${element.rfc},
        ${element.adress},
        ${element.item_name},
        ${element.price},
        ${element.order_number},
        ${element.date_order},
        ${element.Total},
        ${element.comment_order})`;
    } catch (err){
        console.log(
            err
        );
    }
} 

module.exports = {
    SQL,
    sql
}