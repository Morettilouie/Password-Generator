// Assignment code here
var lowerCase = ["a","b","c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowerCase);
//var upperCase = lowerCase.text.toUpperCase();
//console.log(upperCase);
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numbers);
var specialCharactors = ["!","@","#","$","%","^","&","*","(",")","_","+","|","}","]","{","[",";",":","?","/",".",">",",","<","~"]
console.log(specialCharactors);

//var letters = window.prompt("How many letters would you like your password to be?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);