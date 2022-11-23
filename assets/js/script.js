// Assignment code here

//variables
var characterLength = 8;
var characterArr = [];


//Character Variables
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['~','!','@','#','$','%','^','&','*','(',')','_','-','+','=',':',';','"','<','>',',','.','?','/','{','}','[',']',];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var validPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(validPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
  var password = " ";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterArr.length);
      password = password + characterArr[randomIndex]; 
  }
  return password;
  }
  

function getPrompts() {
  characterArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8 and 128. Please try again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    characterArr = characterArr.concat(lowercaseCharacters);
   }
  if (confirm("Would you like uppercase letters in your password?")) {
    characterArr = characterArr.concat(uppercaseCharacters);
   }
   if (confirm("Would you like special characters in your password?")) {
    characterArr = characterArr.concat(specialCharacters);
   }
   if (confirm("Would you like numbers in your password?")) {
    characterArr = characterArr.concat(numericCharacters);
   }
   return true;
}