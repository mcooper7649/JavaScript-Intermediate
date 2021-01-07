// ## BMI Calculator
// ---

// 1. Create a function that takes height and weight as inputs.
// 2. Calculates the BMI as an Output
// 3. BMI = weight / (height * height)

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height){
    var bmiTotal = weight / Math.pow(height, 2); //Using Math.pow (Base, power)
    if (Math.round(bmiTotal) < 18.5) {
       return "Your BMI is " + bmiTotal + " so you are underweight.";
    }
    
    
    if (Math.round(bmiTotal) >= 18.5 && bmiTotal <= 24.9) {
        return "Your BMI is " + bmiTotal + " so you are normal weight.";
    }
    
    
    if (Math.round(bmiTotal) > 24.9) {
        return "Your BMI is " + bmiTotal + " so you are overweight.";
    }
}

var bmi = bmiCalculator(65, 1.8);





/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/