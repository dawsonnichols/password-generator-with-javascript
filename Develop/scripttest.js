function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

const pass_array = {
    
    lowerCase: 'abcdefghijklmnopqrstuvxwyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: "~`!@#$%^&*()-_=+}]{[:;",
};
function generatePassword () {

    var passwordFinalSet = ""; 
    
    var passLength = window.prompt("How long would you like your password to be? (Between 8 and 256 characters).");
    
    var lowerCase = window.confirm("Would you like to include lowercase letters?"); 
    if (lowerCase) {
        passwordFinalSet += pass_array.lowerCase; 
    };

    var upperCase = window.confirm("Would you like to include uppercase letters?"); 
    if (upperCase) {
        passwordFinalSet += pass_array.upperCase;
    };

    var numbers = window.confirm("Would you like to include numbers?");
    if (numbers) {
        passwordFinalSet += pass_array.numbers;
    };

    var symbols = window.confirm("Would you like to include symbols?");
    if (symbols) {
        passwordFinalSet += pass_array.symbols;
    }; 

    var finalVar = "";
    for (let i = 0; i < passLength; i++) {
        finalVar += passwordFinalSet[Math.floor(Math.random() * passwordFinalSet.passLength)]
    }
    return finalVar;

} 
console.log(generatePassword()); 

    

    // if (lowerCaseConfirm) {
    //     for (var i = 0; i < passLength; i++) {
    //         password1 = password1 + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length -1)));
    //         console.log(password1);
    //     }
    
    // }

    // var password2 = "";

    // let upperCaseConfirm = confirm("Do you want to include upper case letters?");

    // if (upperCaseConfirm) {
    //     for (var i = 0; i < passLength; i++) {
    //         password2 = password2 + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length -1)));
    //         console.log(password2);
    //     }

    // }

    // var password3 = "";

    // let numberConfirm = confirm("Do you want to include numbers?");

    // if (numberConfirm) {
    //     for (var i = 0; i < passLength; i++) {
    //         password3 = password3 + numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length -1)));
    //         console.log(password3);
    //     }
    // }


    // var password4 = "";

    // let symbolConfirm = confirm("Do you want to include symbols?"); 

    // if (symbolConfirm)  {
    //     for (var i = 0; i < passLength; i++) {
    //         password4 = password4 + symbols.charAt(Math.floor(Math.random() * Math.floor(symbols.length -1)));
    //         console.log(password4);
    //     }
    // }

    
    // return password1 + password2 + password3 + password4; 
    

    // let passwordSum = lowerCase;  
    // if (lowerCaseConfirm) passwordSum = password1.concat
    // (lowerCase)
    // if (upperCaseConfirm) passwordSum = password2.concat
    // (upperCase) 
    // if (numberConfirm) passwordSum = password3.concat
    // (numbers) 
    // if (symbolConfirm) passwordSum = password4.concat
    // (symbols) 
    // const passwordFinal = []
    // for (let i = 0; i < passLength; i++) {
    //     const character = passwordSum[Math.floor(Math.random() * passLength)]
    //     console.log(passwordFinal); 
    // }
    // return passwordFinal.join('')

// }




      


