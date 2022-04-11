// empty arrays to be used used to plug in values from popup windows.
var passwordLength = [];
var passwordArray = [];
// Arrays listing possible characters
var lowercase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var symbols = ['!', '<', '>', '#', '&', '%', '+', '*', ')'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 








// selector to add functionality to button
var generateBtn = document.querySelector("#generate");
// 
generateBtn.addEventListener("click", writePassword);




// writes password to text box and verifies that the correct length of password is provided.
function writePassword() {
    var goodAnswers = questions(); 
    var passwordText = document.querySelector("#password");
    if (goodAnswers) {

    var passwordGood = generatePassword();
    passwordText.value = passwordGood;
    } else {
    passwordText.value = ""; 
    }
  }

// randomizes based on array which has been made up of concatatenated arrays with characters
  function generatePassword() {
      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        var randomizer = Math.floor(Math.random() * passwordArray.length);
        password = password + passwordArray[randomizer]; 
      }
      return password; 
}
// prompts for user, only user facing section of javascript. 
function questions() {
    passwordArray = []; 
    passwordLength = parseInt(prompt("How many characters would you like your password to be? Must be between 8 and 128 characters"));

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters.");
        return false; 
    }
    if (confirm("Would you like to include lowercase letters?")) {
        passwordArray = passwordArray.concat(lowercase); 
    }
    if (confirm("Would you like to include uppercase letters?")) {
        passwordArray = passwordArray.concat(uppercase); 
    }
    if (confirm("Would you like to include numbers?")) {
        passwordArray = passwordArray.concat(numbers); 
    }
    if (confirm("Would you like to include symbols?")) {
        passwordArray = passwordArray.concat(symbols); 
    }
    return true;
}




