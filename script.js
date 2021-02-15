//импорты
const c = require('./func/');
const b = require('./func');
//встроенные
const os = require('os');
const fs = require('fs');

const users = [{name: 'John', age: 20}];
fs.writeFile('db.json', JSON.stringify(users), (err) => {
    if(err){
        console.log(err);
    }    
});

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());

