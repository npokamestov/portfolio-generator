// console.log('Hello Node!');


// var message = "Hello Node!";

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);


// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// console.log(process);
const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);
const [name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
//     // This...
//     for (let i = 0; i  < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('==============');
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output')
});