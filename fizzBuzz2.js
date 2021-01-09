// ## fizzBuzz Challenge 2 | Add a for loop
// ---

// 1. Create an empty array called output.
// 2. Create a function call fizzBuzz.
// 3. Everytime this function is call it adds 1 more number.
// 4. Console log the array within the function.

var output = [];
var count = 1;


function fizzBuzz(){
    for (var i = 0; i < 101; i++){
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    }
    else if (count % 3 === 0 ) {
        output.push("Fizz")
    } 
    else if (count % 5 === 0) {
        output.push("Buzz")
    }
    
    else {
        output.push(count)
    }
    count++;
    console.log(output)
}
}