// ## Leap Year Challenge
// ---
// 1. Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February.

// 2. This is how to work out whether if a particular year is a leap year:
//     - A year is a leap year if it is evenly divisible by 4

// 3. Except if that year is also evenly divisible by 100;
// 4. Unless that year is also evenly divisible by 400

//I found during this challenge that a visual workflow is easier comprehend the control flow.


function isLeap(year) {
    if (year % 4 === 0){
        if ( year % 100 === 0){
            if (year % 400){
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}