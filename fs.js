const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created')
// });

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', err => {
//     if (err) throw err;


//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Node j', err => {
//         if (err) throw err;
//         console.log('Folder created')
//     });
// });

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'newName.txt'), (err) => {
    if (err) throw err;
    console.log(__filename);
});