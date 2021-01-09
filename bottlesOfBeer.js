// ## While loop challenge
// ---

// 1.  Lyrics of the song 99 botles of bear on the wall.
// 2. Count down from 99 to 0. 
// 3. " bottles of beer on the wall, " + + " bottles of beer. Take one down and pass it around, " + + " bottles of beer on the wall."
// 4. "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."

function beer(){

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
}

// See bottlesOfBeer.js for solution

