// read user input from command line
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// read user input from command line
rl.question('Enter a number: ', (number) => {
    console.log(`The number is ${number}`);
    rl.close();
}
);

