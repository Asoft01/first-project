// const amount = 12; 

// if (amount < 10){
//     console.log('small number')
// }else {
//     console.log('large number');
// }

// console.log(`hey it is my first node app!!!`);

////////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL - NO WINDOWS 
// __dirname - path to current windows 
// __filename - file name 
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed 

///////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(__dirname); 
// setInterval(() => {
//     console.log('hello world');
// }, 1000);

/////////////////////////////////////////////////////////////////////////////////////////////////
// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative');
// require('./7-mind-grenade'); 
// console.log(names);
// sayHi('susan'); 
// // sayHi(john); 
// // sayHi(peter);
// sayHi(names.john);
// sayHi(names.peter);
///////////////////////////////////////////////////////////////////////////////////////////////

// const os = require('os');

// // info about current user 
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds 
// console.log(`The System uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),  
//     release:os.release(), 
//     totalMem: os.totalmem(), 
//     freeMem: os.freemem()
// }

// console.log(currentOS);

////////////////////////////////////////////////////////////////////////////////////////////
// const path = require('path'); 
// console.log(path.sep);

// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath); 

// const base = path.basename(filePath); 
// console.log(base); 

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);  

/////////////////////////////////////////////////////////////////////////////////////////////
// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8'); 
// const second = readFileSync('./content/second.txt', 'utf8'); 

// // console.log(first, second); 
// writeFileSync('./content/result-sync.text', 
// `Here is the result: ${first}, ${second}`, 
// {'flag' : 'a'}
// ); 

////////////////////////////////////////////////////////////////////////////////////////////
// const { readFile, writeFile } = require('fs'); 

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err);
//         return 
//     }
//     // console.log(result); 
//     const first = result; 
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if(err) {
//             console.log(err);
//             return 
//         }
//         const second = result; 
//         writeFile('./content/result-async.txt',
//         `Here is the result : ${first}, ${second}`
//         , (err, result) => {
//             if(err) {
//                 console.log(err)
//                 return 
//             }
//             console.log(result);
//         })
//     });
// });

////////////////////////////////////////////////////////////////////////////////////
// const http = require('http')

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     if(req.url === '/'){
//         res.end('Welcome to our homepage')
//     }

//     if(req.url === '/about') {
//         res.end('Here is our short history')
//     }

//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for </p>
//     <a href="/">back</a>
//     `)
// });

// server.listen(5000);

///////////////////////////////////////////////////////////////////////////////////
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash'); 

// const items = [1, 2, [3, [4]]]
// const newItems = _.flattenDeep(items); 
// console.log(newItems);

//////////////////////////////////////////////////////////////////////////////////
// started operating system process
// console.log('first');
// setTimeout(() =>  {
//     console.log('second');
// }); 

// console.log('third'); 
// completed and exited operating system process 
//////////////////////////////////////////////////////////////////////////////////
// setInterval(() => {
//     console.log('hello world');
// }, 2000);

// console.log(`I will run first`); 
///////////////////////////////////////////////////////////////////////////////

// const http = require('http'); 

// const server = http.createServer((req, res) => {
//     console.log('request event');
//     res.end('hello world');
// }); 

// server.listen(5000, () => {
//     console.log('Server listening on port : 5000...'); 
// })

/////////////////////////////////////////////////////////////////////////////
// const http = require('http'); 

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end('Home Page')
//     }

//     if(req.url === '/about') {
//         res.end('About Page')
//     }
//     res.end('Error Page')
// });

// server.listen(5000, () =>  {
//     console.log('Server listening on port 5000');
// })
/////////////////////////////////////// ASYNCHRONOUS WAY //////////////////////////////////////
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home Page');
//     } else if (req.url === '/about') {
//         // BLOCKING CODE!!!
//         for(let i = 0; i< 1000; i++) {
//             for(let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('About Page');
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Not Found');
//     }
// });

// server.listen(5000, () => {
//     console.log('Server listening on port 5000');
// });

/////////////////////////////////////////////////////////////////////////////////////////////
// const { readFile } = require('fs'); 

// readFile('./content/first.txt', 'utf8', (err, data) => {
//     if(err) {
//         return 
//     }else{ 
//         console.log(data);
//     }
// });

///////////////////////////////////////////////////////////////////////////////////////////

const { readFile } = require('fs'); 

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile('./content/first.txt', 'utf8', (err, data) => {
            if(err) {
                // return 
                reject(err);
            }else {
                // console.log(data); 
                resolve(data);
            }
        });       
    });
}

getText('../content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
