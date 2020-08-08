// Assignment code here
var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
var password = ""

// On click, series of prompts for password criteria
// Prompt for password criteria to include
// Prompt for length of password: 8 to 128 characters
// Prompt for character types: lowercase, uppercase, numeric and/or special characters
// Answer should be validated and at least one character type selected
// Generate a password that matches all the criteria selected
// Password generated is displayed: alert or on page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var generatePassword = function(){
  var pwLength = prompt("Give password length (password has to be between 8 - 128 characters only)", "8"); 
  console.log(generatePassword);
  if (pwLength < 8 || pwLength > 128) {
    criteria();
  } else {

    var charTypes = prompt("Select character type you want to include on your password: UpperCase, LowerCase, Numeric, Special");
    switch(charTypes) {
    case "UpperCase": toUpperCase();
    
      break;
    case "LowerCase": toLowerCase();
      
      break;
    case "Numeric": (Math.floor(Math.random) * 10)
      
      break;
    case "Special":
    }
  }
}   


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
