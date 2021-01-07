// # Love Calculator Challenge
// ---

// 1. Take two names as inputs (then ignore)
// 2. Take a random percentage between 1-100%
// 3. Display back their Love Compatibility


//4. Add Seperate alerts using control flow
//5. Alert between 1-30; 31-70; 71-100

var name1 = prompt("Hi! Welcome to the Love Calculator! Please Enter your name!");
var name2 = prompt("Now enter the name of the person you would like to see their Love Compatibility")

var lovePercentage = Math.random();   //creates random number between 0-1
lovePercentage = lovePercentage * 100; // Multiply our number by the range
lovePercentage = Math.floor(lovePercentage) + 1;  // Floor + 1 to shift the range +1


if(lovePercentage > 70){
    alert("Your Love Percentage is " + lovePercentage + "% Your love percentage is THROUGH THE ROOF!!!")
} else if ( lovePercentage > 30 && lovePercentage < 71 ){
    alert("Your Love Percentage is " + lovePercentage + "%!!!")
} else {
    alert("Your Love Percentage is " + lovePercentage + "% I'd stay far away")
}



