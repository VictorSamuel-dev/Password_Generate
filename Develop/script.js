// Assignment Code
var characterlength = 8;
var choiceArr = [];

var specialCharArr = ['!', '#', '$', '%', '&', '*', '?', '@', '=', '>', '.', '~', '`', '/',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!")

// 1. Give the user a prompt for the password critaria
function getPrompts(){
    characterLength = parseInt(prompt("How manu characters do you want your password to be? (8 - 128 characters"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      
    }
}
//    a. password length between 8 < 128
//    b. lowercase, uppercase, numbers, special characters,
const status = prompt("Hello! Create a password between 8 and 128 characters using lowercase, uppercase, numbers, and special characters!"); 
console.log(status);
// 2. Validating the input.


// 3. Generate the password based on criteria


// 4. Display the password to the page.
  return "Password I create will go here";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 