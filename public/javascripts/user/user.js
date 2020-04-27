const db = require('mysql');

function getUserData(){
    let sql = 'select * from user'
    db.query(sql, (err, result) =>{
        if (err){
            throw err;
        }
        console.log(result);
        return result;
    })
}