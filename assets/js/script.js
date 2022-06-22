// Assignment code here
length = 0;
lowercase = false;
uppercase = false;
numbers = false;
special = false;
low = "abcdefghijklmnopqrstuvwxyz"; 
upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
num = "12345678590";
spe = "!@#$%^&*()";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function passwordLength() {
  let passLen = prompt("how long would you like your password? \n \n*note: must be at least 8 characters and no more than 128 characters.");

  if(passLen >= 8 && passLen <= 128){
    confirm(passLen + " is the amount of characters you chose.");
    length = passLen;
  }
  if(passLen == null){
    confirm("if you're just going to cancel on the first step why are you even trying to generate a password.")
  }
  if(passLen < 8 || passLen > 128){
    confirm("did you really just input " + passLen +"? you didn't even read the instructions did you????? \ndo it again the right way.")
    passwordLength(); //Calls The Same F
  }
  confirmLower();
}

function confirmLower() {
  let varConfirm = confirm("would you like lower case?")

  if(varConfirm == true){
    lowercase = true;
    confirm ("lower case enabled");
  }
  if(varConfirm == false){
    lowercase = false;
  }
  confirmUpper();
}

function confirmUpper() {
  let varConfirm = confirm("would you like upper case?")

  if(varConfirm == true){
    uppercase = true;
    confirm ("upper case enabled")
  }
  if(varConfirm == false){
    uppercase = false;
  }
  confirmNumeric();
}

function confirmNumeric() {
  let varConfirm = confirm("would you like numbers?")

  if(varConfirm == true){
    numbers = true;
    confirm ("numbers enabled")
  }
  if(varConfirm == false){
    numbers = false;
  }
  confirmSpecial();
}

function confirmSpecial() {
  let varConfirm = confirm("would you like special characters")

  if(varConfirm == true){
    special = true;
    confirm ("special characters enabled")
  }
  if(varConfirm == false){
    special = false;
  }
  writePassword();
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  passText = "";
  passAdd = "I";

  confirm("Your password parameters are:\nPassword Length: " + length + "\nLowercase: " + lowercase + "\nUppercase: " + uppercase +" \nNumerical: " + numbers + "\nSpecial: " + special);

  for (let i = 0; i < length; i++){
    let randomNum = Math.floor(Math.random() * 4);
    let randomCharacter = "";

    if (randomNum == 0){ //lowecase
      if (lowercase == true){
        randomCharacter = low[Math.floor(Math.random() * low.length)]
        passText = passText.concat(randomCharacter);
      }
      if (lowercase== false){
        i--;
      }
    }

    if (randomNum == 1){ //lowecase
      if (uppercase == true){
        randomCharacter = upp[Math.floor(Math.random() * upp.length)]
        passText = passText.concat(randomCharacter);
      }
      if (uppercase == false){
        i--;
      }
    }

    if (randomNum == 2){ //lowecase
      if (numbers == true){
        randomCharacter = num[Math.floor(Math.random() * num.length)]
        passText = passText.concat(randomCharacter);
      }
      if (numbers == false){
        i--;
      }
    }

    if (randomNum == 3){ //lowecase
      if (special == true){
        randomCharacter = spe[Math.floor(Math.random() * spe.length)]
        passText = passText.concat(randomCharacter);
      }
      if (special == false){
        i--;
      }
    }
  }

  return passText

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordLength); 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  passText = "";
  passAdd = "I";

  confirm("Your password parameters are:\nPassword Length: " + length + "\nLowercase: " + lowercase + "\nUppercase: " + uppercase +" \nNumerical: " + numbers + "\nSpecial: " + special);

  for (let i = 0; i < length; i++){
    let randomNum = Math.floor(Math.random() * 4);
    let randomCharacter = "";

    if (randomNum == 0){ //lowecase
      if (lowercase == true){
        randomCharacter = low[Math.floor(Math.random() * low.length)]
        passText = passText.concat(randomCharacter);
      }
      if (lowercase== false){
        i--;
      }
    }

    if (randomNum == 1){ //lowecase
      if (uppercase == true){
        randomCharacter = upp[Math.floor(Math.random() * upp.length)]
        passText = passText.concat(randomCharacter);
      }
      if (uppercase == false){
        i--;
      }
    }

    if (randomNum == 2){ //lowecase
      if (numbers == true){
        randomCharacter = num[Math.floor(Math.random() * num.length)]
        passText = passText.concat(randomCharacter);
      }
      if (numbers == false){
        i--;
      }
    }

    if (randomNum == 3){ //lowecase
      if (special == true){
        randomCharacter = spe[Math.floor(Math.random() * spe.length)]
        passText = passText.concat(randomCharacter);
      }
      if (special == false){
        i--;
      }
    }
  }

  return passText

  
}