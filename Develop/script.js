// Assignment Code
var characterlength = 8;
var choiceArr = [];

var specialCharArr = ['!', '#', '$', '%', '&', '*', '?', '@', '=', '>', '.', '~', '`', '/',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var password = "";
  // console.log("Hey! You clicked the button!")
}
// 1. Give the user a prompt for the password critaria
function getPrompts(){
    choiceArr = [];
    characterLength = parseInt(prompt("How manu characters do you want your password to be? (8 - 128 characters"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be a number, 8 - 128 digits. Please try again.");
      return false;
    }

    if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}

// //    a. password length between 8 < 128
// //    b. lowercase, uppercase, numbers, special characters,
// const status = prompt("Hello! Create a password between 8 and 128 characters using lowercase, uppercase, numbers, and special characters!"); 
// console.log(status);
// // 2. Validating the input.


// // 3. Generate the password based on criteria


// // 4. Display the password to the page.
//   return "Password I create will go here";

// }

// Write password to the #password input
function writePassword() {
   var  correctPrompts = getPrompts();

  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 