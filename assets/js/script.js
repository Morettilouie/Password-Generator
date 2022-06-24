// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// change to string, uppercase, back to array
var upperCase = lowerCase.join("").toUpperCase().split("");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactors = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", "}", "]", "{", "[", ";", ":", "?", "/", ".", ">", "<", "~"];

var getCharacters = function() {
  // field characters
var characters = window.prompt("How many characters would you like your password to be? (choose between 8-128)");
characters = parseInt(characters);
 if (!characters|| characters < 8 || characters > 128)  {
   alert("Enter a number between 8-128!");
   return getCharacters();
 }

var lower = window.confirm("Do you want lower case letters involved?");
var upper = window.confirm("Do you want upper case letters involved?");
var numerals = window.confirm("Do you want numbers involved?");
var unique = window.confirm("Do you want special characters involved?");
generatePassword(characters, lower, upper, numerals, unique)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(generatedPassword) {
  var password = generatedPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(characters, lower, upper, numerals, unique) {
  var possibleCharacters = [];
  if (lower) {
    possibleCharacters.push(lowerCase);
  }
  if (upper) {
    possibleCharacters.push(upperCase);
  }
  if (numerals) {
    possibleCharacters.push(numbers);
  }
  if (unique) {
    possibleCharacters.push(specialCharactors);
    console.log(possibleCharacters.join(",").split(","))
  }

  var password = [];
  for (i = 0; i < characters; i++) {
    newPossibleCharacters = possibleCharacters.join(",").split(",");
    randomNumber = Math.floor(Math.random() * newPossibleCharacters.length);
    password.push(newPossibleCharacters[randomNumber]);
  }
  newPassword = password.join("").split();
  writePassword(newPassword[0]);
}


// Add event listener to generate button
generateBtn.addEventListener("click", getCharacters);
