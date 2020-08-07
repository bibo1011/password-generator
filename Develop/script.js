// Assignment code here



// Answer should be validated and at least one character type selected
// Generate a password that matches all the criteria selected
// Password generated is displayed: alert or on page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// On click, series of prompts for password criteria
// Prompt for password criteria to include
// Prompt for length of password: 8 to 128 characters
// Prompt for character types: lowercase, uppercase, numeric and/or special characters

var criteria = function(){
  var pwLength = prompt("Give password length (password has to be between 8 - 128 characters only)", "8"); 
  console.log(criteria);
  if (pwLength < 8 || pwLength > 128) {
    criteria();
  }

  var pwLowerCase = prompt("Do you want to use lowercase characters?");
  console.log(pwLowerCase);

  var pwNumeric = prompt("Do you want to use numeric characters?");
  console.log(pwNumeric);

  var pwSpecial = prompt("Do you want it to use special characters?");
  console.log(pwSpecial);
  
}   








// var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", criteria);
// generateBtn.addEventListener("click", someOtherFunction);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
