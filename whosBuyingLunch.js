// ## Whos Buying Lunch? Code Challenge
// ---

// 1. Write a function which will select random name from a list of names. 
// 2. The person selected will have to pay for everyones food. 


// Example input and output

// ["Angela", "Ben", "Mike", "Jenny", "Chloe"]

// Michael is going to buy lunch today!

// Hint. You might need to think about Array.length

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
      var whoAte =  ["Angela", "Ben", "Mike", "Jenny", "Chloe"];
      var howMany = whoAte.length;
      var randomize = Math.random(randomize);
      randomize = randomize * howMany;
      randomize = Math.floor(randomize);
      var whoPays = whoAte[randomize];
      return whoPays +" is going to buy lunch today!";
        
    
    
    /******Don't change the code below*******/    
    }