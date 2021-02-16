//импорты
const c = require('./func/');
const b = require('./func');
//встроенные
const os = require('os');
const fs = require('fs');
const http = require('http');
const moment = require('moment');

console.log(moment());

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
});

server.listen('3000');
server.on('connection', (socket) => {
    console.log('New connection2');
});









/* const users = [{name: "Ann", age: 20}];
const user1 = '{"name": "Jhon", "age": 30}'; */

/* fs.readFile('db.json', 'utf-8', (err, data) =>
    {if(err){
        console.log(err);
    }else{
        const list = JSON.parse(data);
        list.push(JSON.parse(user1));
        fs.writeFile('db.json', JSON.stringify(list), (err) => {
            if(err){
                console.log(err);
            }    
        });
    }    
});
 */
    
  

/* fs.writeFile('db.json', JSON.stringify(users), (err) => {
    if(err){
        console.log(err);
    }    
}); */

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());

