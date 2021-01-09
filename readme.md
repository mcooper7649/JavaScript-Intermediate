# Javascript Module Intermediate
---


## Random Number Generation
---

To create a Random number Generator you will Math.random() then multiply by the range, 

-Pseudo Random Number Generator  

1. Generate Random Number between 1-6 | Simulate a dice roll

``` 
var n = Math.random(); //Randomizes New Variable n
n = n * 6;   // Re-assigns N value to n * 6 | To equal the dice roll value
n = Math.floor(n)  + 1 // Perform Math.floor(n) rounds down to nears whole number 


```  

# Love Calculator Challenge
---

1. Take two names as inputs (then ignore)
2. Take a random percentage between 1-100%
3. Display back their Love Compatibility

See loveCalculator.js for solution


# Control Flow
---

Adds the ability to control the flow of the code. if / else statements are examples of common control flow methods.

Example Below: if (something happens ){
    execute this
} else if (something else happens){
    execute this
} else {
    execute this
}

```

if(lovePercentage > 70){
    alert("Your Love Percentage is " + lovePercentage + "% Your love percentage is THROUGH THE ROOF!!!")
} else if ( lovePercentage > 30 && lovePercentage < 71 ){
    alert("Your Love Percentage is " + lovePercentage + "%!!!")
} else {
    alert("Your Love Percentage is " + lovePercentage + "% I'd stay far away")
}

```



Using comparables such as:

1. ===   //equal to
2. !==  // s not equal to
3. >  //greater than
4. < //lesser than
5. >=  //greater or equal to.
6. == // Doesnt check if data types are equal



## BMI Calculator Challenge #2
---

1. Add Control flow to bmiCalculator.js
2. BMI < 18.5 "Your BMI is <bmi>, so you are underweight."
3. BMI 18.5-24.9  "Your BMI is <bmi>, so you are normal weight."
4. BMI >24.9 "Your BMI is <bmi>, so you are underweight."
5. Message must be returned, does not need alert, prompt, or console.log


## Leap Year Challenge
---
1. Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February.

2. This is how to work out whether if a particular year is a leap year:
    - A year is a leap year if it is evenly divisible by 4

3. Except if that year is also evenly divisible by 100;
4. Unless that year is also evenly divisible by 400

-- See leapYear.js for solution


## Arrays 
---

1. Arrays grant us the ability to store a collection of items and store it.
```
- var myEgg = eggs[1];
- var eggs = [egg1,egg2,egg3,egg4,egg5,]
```

2. myEgg would return egg2


3. console.log(myEggs) will return all the eggs in the array.
4. console.log(eggs.length)  returns the amount of eggs, 5 in our example.
5. console.log(eggs[3]) returns the egg in the 3 if you count from 0. egg4 is returned.
6. console.log(eggs.includes(egg4)) returns a boolean; so in this example, True.


## Guestlist Arrays Challenge
---
1. Using our example arary below, prompt the guest for their name?
2. If they are on the guest list, welcome them with an alert
3. If not, they can't come in
    *  var guestList = ["Angela", "Mike","Jack","Lourdes","Pam","Jerry"];


See guestList.js for solution


