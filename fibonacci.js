// ## Fibonacci Challenge
// ---

// 1. Create a fucntion where you can call it by writing fibonacciGenerator(n)
// 2. Where n is the number of items in the sequence;
// 3. fibonacciGenerator(3) would return [0,1,1] as the output.
// 4. The first two numbers in the sequence must be 0, and 1.
// * hint use Repl.it Playground to test your solution.


function fibonacciGenerator(n){
   if (n === 1){
       return [0];
   } else if (n === 2){
       return [0, 1]
   } else {
       var base = [0, 1]
       while ( base.length < n){
           base.push(base[base.length - 1] + base[base.length -2])
       }
       console.log(base)
   }
}

var output = fibonacciGenerator(3)

console.log(output);