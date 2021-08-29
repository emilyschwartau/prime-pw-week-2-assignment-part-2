// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as a string.
//Then we create a conditional scenario where if name is set to Mary we will console.log "Hi, Mary!".
//Otherwise, if name is not set to Mary we will console.log "How do you do?".
//Because name is NOT set to Mary we will console.log "How do you do?".

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We make a variable called secret, and don't yet set it to anything.
//We make a variable called code and set it to 123 as a number
//We make a conditional scenario where if code is equal to 123, then secret will be set as super, and code will be set as code * 2.
//Code IS equal to 123, so when we console.log secret it will be set to super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We make a variable called isStudent and set it to true as a boolean.
//We make a variable called age and set it to 34 as a number.
//We make a variable called zip and set it to 55407 as a number.
//We make a conditional scenario where if isStudent is equal to true AND zip is greather than 80000 then
  // we would console.log "You're a student on the West Coast!",
// Otherwise if either isStudent or zip doesn't fulfill the first conditional scenario, then we are presented with a second conditional scenario.
// The second conditional scenario is if isStudent is false OR age is less than 30 then we would console.log
  // "What are your hobbies?"
//Otherwise, if either isStudent or age doesn't fulfill the second conditional scenario, then we are presented with a third conditional scenario.
// the third conditional scenario is if isStudent is true then we would console.log "Welcome to Prime!".
//Otherwise, if isStudent doesn't fulfill the third conditional scenario, then we would console.log "How about the weather?"
// The set variables do not fulfill the first conditional scenario because zip is less than 80000.
// We then move on to the second conditional scenario. The set variables do not fulfill the second conditional scenario because
  // isStudent is NOT false, OR age is > 30
// We then move on to the third conditional scenario. The set variables fulfill this conditional scenario because isStudent is true.
//We will console.log "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX: colorOne is set to red, should be set to blue.
// should be let colorOne = "blue";
let colorOne = 'red';
// FIX: colorTwo is set to blue, should be set to red.
// should be let colorTwo = "red";
let colorTwo = 'blue';
let mix = true;

// FIX: forgot to add colorTwo into conditional scenario.
// should be if (mix === true) {
//colorOne = "purple";
//colorTwo = "purple";
//}
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX: time should be a variable, not a constant
// should be let time = 4;
const time = 4;

// FIX: conditional should be AND, not OR.
// should be if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX: minAge should be a variable, not a constant
// should be let minAge = 21;
const minAge = 21;

// FIX: text implies that we should check if age >= minAge, not the other way around.
// should be if (age >= minAge) {
if(minAge <= age) {
// FIX: console.log enter should be in the if clause, and console.log no entry should be in the else clause.
// should be console.log ("enter");
  console.log('no entry');
} else {
// should be console.log ("no entry");
  console.log('enter');
}
*/
