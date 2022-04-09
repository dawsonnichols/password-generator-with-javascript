// Assignment code here



// getting lower, upper, number, and symbol from charcode

// function generateLower (passLength) {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)* passLength;
// }
// function generateUpper () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65 ); 
// }
// function generateNumber () {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function generateSymbol () {
//   return String.fromCharCode(Math.floor(Math.random() * 15) + 33); 
// }
let userChoice = []; 

let finalPassword = []; 

let lowerCase = 'abcdefghijklmnopqrstuvxwyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789'; 
let symbols = '~`!@#$%^&*()-_=+}]{[:;';


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

function generatePassword() {

  let passLength = prompt("How long would you like your password to be? ");
  console.log(passLength);

  let passLower = confirm("Would you like to include lower case letters?"); 
  console.log(passLower); 

  if (passLower) {
    userChoice.push(lowerCase);
  }

  let passUpper = confirm("Would you like to include upper case letters?");
  console.log(passUpper);

  if (passUpper) {
    userChoice.push(upperCase);
  }
  
  // let passUpper = confirm("Would you like to include upper case letters?");
  // console.log(passUpper);
  
  // if (passUpper) {
    //   userChoice.push(generateUpper()); 
    // }
    
    let passNumber = confirm("Would you like to include numbers?");
    console.log(passNumber);
    
    if (passNumber) {
      userChoice.push(numbers);
    }

    let passSymbol = confirm("Would you like to include symbols?");
    console.log(passSymbol);

    if (passSymbol) {
      userChoice.push(symbols);
    }
  
    console.log(userChoice); 

    
  
  

  for (let i = 0; i <= passLength; i++) {

      finalPassword = finalPassword + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length - 1))); 

    finalPassword.push(userChoice[Math.floor(Math.random() * passLength)]);
    console.log(finalPassword);
  }



}