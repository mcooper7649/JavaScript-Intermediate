// # Love Calculator Challenge
// ---

// 1. Take two names as inputs (then ignore)
// 2. Take a random percentage between 1-100%
// 3. Display back their Love Compatibility

var name1 = prompt("Hi! Welcome to the Love Calculator! Please Enter your name!");
var name2 = prompt("Now enter the name of the person you would like to see their Love Compatibility")

var lovePercentage = Math.random();
lovePercentage = lovePercentage * 100;
lovePercentage = Math.floor(lovePercentage) + 1;
alert(name1 + " and " + name2 + " are " + lovePercentage + "% compatible.");

