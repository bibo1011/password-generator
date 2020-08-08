// Assignment code here
var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
var password = ""
const specialCharacters = "!@#$%^&*()";
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
  }
  var pwUpperCase = prompt("Do you want to use uppercase characters?");
  console.log(pwUpperCase);
  var pwLowerCase = prompt("Do you want to use lowercase characters?");
  console.log(pwLowerCase);
  var pwNumeric = prompt("Do you want to use numeric characters?");
  console.log(pwNumeric);
  var pwSpecial = prompt("Do you want to use special characters?");
  console.log(pwSpecial);
    
  var minimumCount = 0;



  var pwUpperCase = "";
  var pwLowerCase = "";
  var pwNumeric = "";
  var pwSpecial = "";


 
  var functionArray = {
    getpwUpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
   
    getpwLowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getNumeric: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getSpecial: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };
} 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
