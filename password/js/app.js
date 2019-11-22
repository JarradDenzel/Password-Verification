// Password Validation

// The User needs to log into the application
// The User's credentials are their Email Address and their Password
// To be "Validated" the User must input a valid email address and a valid password
// If the User's input does not pass the validation test, their access is denied
// If they fail 3 times, they must wait for 1 hour
// If they fail 3 more times within 24 hours of that first hourly restriction, they must wait for 24 hours

// Validation Rules
// Email & Password
// No fields can be null

// Email
// The Email field must be a valid

// Password
// Must have at least 8 characters but no more than 20
// Must contain at least one special charcter(!, @, #, $, %, &)
// Must contain at least one uppercase letter
// Must contain at least one lowercase letter
// Must contain at least one number
// Cannot contain spaces


// Set Destination Page such that it is hidden
document.getElementById('finish').style.display = 'none';

// The Form. Given a variable so an evenListener can be applied
var myForm = document.getElementById('format');

// The eventListener for myForm, listens for "submit" and fires an event function 
myForm.addEventListener("submit", (e) => {

    e.preventDefault(); 
    
    // Store User Input into Variables: userName, userAssert, userValidate
    var userName = document.getElementById("userEmail").value ;
    var userAssert = document.getElementById("userPassword").value;
    var userValidate = document.getElementById("userConfirmation").value;

    // Store Result Output into Variable: message
    var answer = document.getElementById("message");

    // Set UX Color of Confirmation Messages: Red = bad. Green = good.
    var passColor = "#66cc67";
    var failColor  = "#ff6667";

    // Store Password Rule Variables
    var testLength = document.getElementById("lengthRule") ;
    var testCharacter = document.getElementById("characterRule");
    var testUppercase = document.getElementById("uppercaseRule");
    var testLowercase = document.getElementById("lowercaseRule") ;
    var testNumber = document.getElementById("numberRule");
    var testSpace = document.getElementById("spaceRule");
    var testMatch = document.getElementById("matchRule");

    // Confirm Passwords Match
    if(userAssert === userValidate){
        answer.innerHTML = "The Confirmation Password Matches";
        testMatch.style.listStyleImage = "url(media/checkmark-16.png)";
        testMatch.style.color = passColor;
    } else {
        answer.innerHTML = "The Confirmation Password Does Not Match";
        testMatch.style.listStyleImage = "url(media/x-mark-16.png)";
        testMatch.style.color = failColor;
    }

    //Confirm there are no spaces
    if (userAssert.indexOf(' ') === -1) {
        testSpace.style.listStyleImage = "url(media/checkmark-16.png)";
        testSpace.style.color = passColor;
    } else {
        testSpace.style.listStyleImage = "url(media/x-mark-16.png)";
        testSpace.style.color = failColor;
    }  
    
    // Confirm the length meets requirements: length >= 8 && <= 20 
    if (userAssert.length >= 8){
        testLength.style.listStyleImage = "url(media/checkmark-16.png)";
        testLength.style.color = passColor;
    } else {
        testLength.style.listStyleImage = "url(media/x-mark-16.png)";
        testLength.style.color = failColor;
    }

    // Confirm a number exists in password
    if (userAssert.includes(1,2,3,4,5,6,7,8,9,0)){
        testNumber.style.listStyleImage = "url(media/checkmark-16.png)";
        testNumber.style.color = passColor;
    } else {
        testNumber.style.listStyleImage = "url(media/x-mark-16.png)";
        testNumber.style.color = failColor;
    }

    // Confirm a special symbol exists
    if (userAssert.includes("!", "@", "#", "$", "%", "&")) {
        testCharacter.style.listStyleImage = "url(media/checkmark-16.png)";
        testCharacter.style.color = passColor;
    } else {
        testCharacter.style.listStyleImage = "url(media/x-mark-16.png)";
        testCharacter.style.color = failColor;
    }


    // Confirm an Uppercase letter exists
    for (let i = 0; i < userAssert.length; i++) {
        var char = userAssert[i];
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
            testUppercase.style.listStyleImage = "url(media/checkmark-16.png)";
            testUppercase.style.color = passColor;
            break;
        } else {
            testUppercase.style.listStyleImage = "url(media/x-mark-16.png)";
            testUppercase.style.color = failColor;
        }
    }

    // Confirm a Lowercase letter exists
    for (let i = 0; i < userAssert.length; i++) {
        var char = userAssert[i];
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 121){
            testLowercase.style.listStyleImage = "url(media/checkmark-16.png)";
            testLowercase.style.color = passColor;
            break;
        } else {
            testLowercase.style.listStyleImage = "url(media/x-mark-16.png)";
            testLowercase.style.color = failColor;
        }
    }

    if (testLowercase.style.color == 'rgb(102, 204, 103)'
            && testUppercase.style.color == 'rgb(102, 204, 103)'
            && testCharacter.style.color == 'rgb(102, 204, 103)'
            && testNumber.style.color == 'rgb(102, 204, 103)'
            && testLength.style.color == 'rgb(102, 204, 103)'
            && testSpace.style.color == 'rgb(102, 204, 103)'
            && testMatch.style.color == 'rgb(102, 204, 103)')
        {
          document.getElementById('start').style.display = 'none';
          document.getElementById('finish').style.display = '';
        } else {
            answer.innerHTML = "TRY AGAIN"
        }
        console.log(testLowercase.style.color);

 })

//  function Toggle() { 
//     var temp = document.getElementById("password"); 
//     if (temp.type === "password") { 
//         temp.type = "text"; 
//     } 
//     else { 
//         temp.type = "password"; 
//     } 
// }

