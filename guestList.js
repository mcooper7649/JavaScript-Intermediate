// ## Guestlist Arrays Challenge
// ---
// 1. Using our example arary below, prompt the guest for their name?
// 2. If they are on the guest list, welcome them with an alert
// 3. If not, they can't come in
//     *  Example var guestList = ["Angela", "Mike","Jack","Lourdes","Pam","Jerry"];

var guestList = ["Angela", "Mike","Jack","Lourdes","Pam","Jerry"];

var guestName = prompt("Welcome to the party!! What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome to the party!!!")
} else {
    alert("Sorry, you're not invited!")
}