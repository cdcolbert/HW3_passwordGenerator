
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var pwd = "";

// Character libraries
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var theNumbers = "1234567890";
var theSymbols = "!@#$%^&*()+_{}?<>";

// Write password to the #password input
function writePassword() {

  var pwdLength = prompt("How many characters do you want in your password (8 - 128)?");
  generatePassword(pwdLength);

}

// Generate the random password
function generatePassword(pwdLength) {
 
	//Create the string containing the user's password selections
	var characters = "";
			 
	if (8 <= pwdLength <= 128 ) {
		
		var includeUpperCase = confirm("Do you want to include upper case letters?");
		var includeLowerCase = confirm("Do you want to include lower case letters?");
		var includeNumbers = confirm("Do you want to include numbers?");
		var includeSymbols = confirm("Do you want to include symbols?");

		// Adds the upper case letters to password string 
		if (includeUpperCase) {
			characters = characters + upperCase;
		}
		//Adds teh lower case letters to password string
		if (includeLowerCase) {
			characters = characters + lowerCase;
		}
		// Adds numbers to password string
		if (includeNumbers) {
			characters = characters + theNumbers;
		}
		// Adds symbols to password string
		if (includeSymbols) {
			characters = characters + theSymbols;
		}
	}

	// Alerts the user that the input did not meet criteria	   
	// } else if (pwdLength < 8 || pwdLength > 128) {

	// 	alert("Password must be between 8 - 128 characters.")
	// 	generatePassword();

	// }
	 
	// Loop to cycle through the password string and select the random characters
	for (var i = 0; i < pwdLength; i++) {
      var rndNum = Math.floor(Math.random() * characters.length);
      // console.log(rndNum);
      var characterCode = characters[rndNum];
	  // console.log(characterCode);
	  pwd = pwd + characterCode;
    }

	// Display the password 
    passwordText.innerText = pwd;
    
  }  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
