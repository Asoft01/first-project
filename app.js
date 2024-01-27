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
const {readFileSync, writeFileSync} = require('fs');

