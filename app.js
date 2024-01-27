const amount = 12; 

if (amount < 10){
    console.log('small number')
}else {
    console.log('large number');
}

console.log(`hey it is my first node app!!!`);

// GLOBAL - NO WINDOWS 
// __dirname - path to current windows 
// __filename - file name 
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed 

console.log(__dirname); 
setInterval(() => {
    console.log('hello world');
}, 1000);