const operations = require('./operations.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the first number: ', (x) => {
  rl.question('Enter the second number: ', (y) => {
    rl.question(`Operation`, (choice) => {
      if (!operations.validateNumbers(x, y)) {
        console.log('Only numbers are allowed! Please restart the program.');
      } else {
        switch (choice) {
          case '1':
            console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
            break;
          case '2':
            console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
            break;
          case '3':
            console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
            break;
          case '4':
            console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
            break;
          default:
            console.log('Please restart the program and select a number between 1 and 4.');
            break;
        }
      }
      rl.close();
    });
  });
});