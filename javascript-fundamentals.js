//first javascript code
let myName = "Peris";
//javascript exercises.exercise 1:temperature converter
console.log(myName);
var temperature = 25;//temperature in celcius
var temperatureInFarenheight = ((25*9/5)+32);
console.log('The temperature is',temperatureInFarenheight, 'farenheights');

//exercise 2:shopping list

var item1 = 19.99;
var item2 = 25.50;
var item3 = 8.75;
var subtotal =Math.floor(19.99 + 25.50 + 8.75);
console.log('the subtotal is',subtotal);
var finaltotal = Math.floor((0.08*subtotal) + subtotal) ;
console.log('the final total is' ,finaltotal);

//exercise 3:Age Calculator

var currentyear = 2025;
var  yob = 1980 ;
var ageinyears = (2025- 1980);
console.log('your current years are ',ageinyears , 'years');
var ageinmonths =((ageinyears)*12);
console.log('your current age in months is ',ageinmonths , 'months');
var ageindays = ((ageinyears)*365);
console.log('your current age in days is ' , ageindays ,'days');

//exercise  4: favorite bio builder

var firstName = "Jude" ;
var lastName = "Callahan" ;
var age = 20 ;
var favoriteProgrammingLanguage = "Javascript";
console.log(('my first name is'  , firstName , 'and my last name is ' , lastName ));
console.log('my favorite proramming language is ' , favoriteProgrammingLanguage ) ;
console.log('i am', age , 'years old');

//exercise 5: Email Generator

var firstName = "Jude" ;
var lastName = "Callahan" ;
var domain = "enterprises.com" ;
var email =  ("jude.callahan@enterprises.com");
var email1 = ("judecallahan@enterprises.com");
var email2 = ("jude@enterprise.com");
var email3 = ("callahan@enterprise.com");
console.log('my email is', email, email1 ,email3 );

//Escape Sequence Challenge

var greeting = "Hello" ;
var filepath = "c:\User:\Document:\file.txt" ;
var sentence1 = "i am going" ;
var sentence2 = "to bed";
console.log('he said' , greeting);
console.log('the filepath is ', filepath);
console.log(sentence1 + sentence2) ;

//Rectangular calculator

var length = 10;
var width = 60
var area = (60 *10);
var perimeter =((2*10) + (2*60));
console.log('the area of the rectangle is' ,area);
console.log('the perimeter of the rectangle is ' , perimeter);

let sum = 10+5 ;
console.log(sum);


//age  calculator

// Create variables for:
// - Current year (2025)
// - Birth year (pick any)
// - Calculate age
// - Calculate age in months (age * 12)
// - Calculate age in days (age * 365)
// - Log results with messages like "You are X years old"



//grade calculator

/*grade = prompt("what is your grade ");

if (grade >= 90){ 
  console.log("you have an A. Great work Keep It Up");
  
}
else if (grade >= 70)
  {
    console.log("you have a B keep it up .");
  }
else if (grade >=50)
  {
    console.log("you have a C.You can do better");
  }
else if(grade >=40)
  {
    console.log("you have a D.please continue trying");
  }
else 
  ("you have failed");
  */

//shopping calculator


 // Calculate the total cost of your shopping
let applePrice = 2.50;
let bananaPrice = 1.75;
let milkPrice = 3.99;

// TODO: Calculate total cost

const totalCost = (applePrice + bananaPrice + milkPrice);
// TODO: Apply 10% discount

let discount = totalCost *0.10;
let priceAfterDiscount = (totalCost - discount ) ;
// TODO: Add 8% tax

let tax = 0.08 * totalCost ;
let amountAfterTaxIsAdded = (tax + priceAfterDiscount) ;
// TODO: Print final amount

console.log('the final amount is',amountAfterTaxIsAdded);


//temperature converter
// Convert Celsius to Fahrenheit
// Formula: F = (C × 9/5) + 32

let celsiusTemp = 25;
//TODO : Convert to Fahrenheit
let fahrenheitTemp = (25 * 9/5) + 32 ;

// TODO: Print both temperatures
console.log('25 degrees celcius is', fahrenheitTemp , 'fahrenheits') ;



//Age calculator

let currentYear = 2025;
let birthYear = 2010;
let futureYear = 2030;

// TODO: Calculate current age

let currentAge = (currentYear - birthYear);
// TODO: Calculate age in 2030

let futureAge = (futureYear - birthYear) ;
// TODO: Calculate how many years until you're 18

let yearsToEighteenYears = (18 - currentAge) ;
// TODO: Print all results
console.log('my current age is', currentAge) ;
console.log('my futureAge is ', futureAge) ;
console.log('the remaining years i have to eighteen is ', yearsToEighteenYears) ;

//tip adn bill calculator

let billAmount = 85.50;
let tipPercentage = 18; // 18%
let numberOfPeople = 4;

// TODO: Calculate tip amount

let tipAmount = (billAmount * 0.18) ;
// TODO: Calculate total bill (bill + tip)

let totalBill = (tipAmount + billAmount);
// TODO: Calculate amount per person
let amountPerPerson = (totalBill/4)
// TODO: Print itemized breakdown

console.log('the tip amount is ',tipAmount);
console.log( 'the total bill is ',totalBill);
console.log( 'the amount each person was required to pay',amountPerPerson);

//GAME SCORE TRACKER

let baseScore = 1000;

// TODO: Add 50 points for completing level 1

let completingLevelOne = (baseScore + 50);
// TODO: Add 100 points for collecting coins

let pointsForCollectingCoins = (completingLevelOne + 100) ;
// TODO: Multiply total by 2 for a power-up bonus

let powerUpBonus = (completingLevelOne * 2 );
// TODO: Subtract 25 points for a mistake

let pointsForAMistake = (powerUpBonus - 25) ;
// TODO: Print final score with a message

let finalScore =  (pointsForAMistake ) ;

console.log('the final score is' , finalScore, 'congrats  you have done well') ;

//USERNAME GENERATOR

let userFirstName = "ilya";
let userLastName = "rozanov";
let userBirthYear = 1998;

// TODO: Create username: firstnamelastnameyear (all lowercase)

let userName = userFirstName + "" + userLastName  + "" + userBirthYear ;
// Example: "johndoe2010"
// TODO: Get username length

userNameLength = userName.length
// TODO: Extract first 3 letters of first name
userName[0];
userName[1];
userName[2];
// TODO: Print: "Your username is: johndoe2010 (14 characters)"

console.log('your username is',userName , 'and your username length is ' , userNameLength) ;
console.log('the first letter of the username is ',userName[0] , 'the second letter of the username is' ,userName[1] , 'the third letter of the username is ' , userName[2]);

//EMAIL VALIDATOR BASICS 


let studentsEmail = "student@school.com";

// TODO: Check if email contains "@"

let doesItContain = studentsEmail.indexOf("@");
console.log('the position of @ is ', doesItContain);

if (doesItContain !== -1 )
  {
    console.log("email contains @ ");
  }
else
  console.log("email does not contains ", doesItContain);
// TODO: Check if email contains "."

let doesItContain1 = studentsEmail.indexOf(".");
console.log('the position of the dot is ' , doesItContain1);

if(doesItContain1 !== -1)
  {
    console.log("it contains .");
  }
else
  console.log("it does not contain .");
                                   
// TODO: Get the part before @ (username)
let part = studentsEmail.slice(0 , doesItContain) ;
// TODO: Get the part after @ (domain)

let afterDomain = studentsEmail.slice(doesItContain + 1 );
// TODO: Print validation results

console.log('the part before the domain is ' ,part);
console.log('the part after the domain is' , afterDomain) ;


//EMAIL GENERATOR 2

const studentsUserEmail = "shanehollander@rivalry.com"

//find the position of s

let positionOfS = studentsUserEmail.indexOf("s");
//find the position of h

let positionOfH = studentsUserEmail.indexOf("h");
//fing if it contains @

let ifItContains = studentsUserEmail.indexOf("@");

if(ifItContains !== -1)
  {
    console.log("it contains the symbol @");
  }
else
  console.log("it does not contain the symbol @");

//find if it contains rivalry

let ifItContainsRivalry = studentsUserEmail.indexOf("rivalry");

if(ifItContainsRivalry == -1)
  {
    console.log("it does not contain rivalry");
  }
else
  console.log("it has the term rivalry");

let before = studentsUserEmail.slice(0 ,ifItContains);
console.log(before);

let doesItHaveShane = studentsUserEmail.includes("shane") ;
console.log('it has the term shane', doesItHaveShane);

let uppercase = studentsUserEmail.toUpperCase();
console.log(uppercase);


//Practice Challenge! 🎮
//Try to create a program that checks if a password is strong:

//Must be at least 8 characters long
//Must contain a number
//Must contain an uppercase letter

let password = "hollanderjunoir" ;

passwordLength = password.length ;



if(passwordLength >= 8)
  {
    console.log("the password is strong") ;
  }
else 
  console.log("the password is weak ");
let hasNumber = false ;
 for(let i =0 ; i = password.length ; i++)
   {
     if(password[i]>= "0" && password[i]<="9")
       { hasNumber = true}
   }
console.log('has number');

let hasLetter = false
for(let i= 0 ; i = password.length ; i++)
  {
    if(password[i]>= "A" && password[i] <="Z")
    {
       hasLetter = true
    }
  }
console.log("has uppercaseletter");

//THE CENSORESHIP FILTER

let message = "This game is crap and boring";
let badWord = "crap";

// TODO: Check if the message contains the bad word
let ifItHasABadWord = message.includes("crap");


// TODO: If it does, replace it with "****" (4 asterisks)

let badWordReplacement = message.replace("badword" , "***");
// TODO: Print both the original and cleaned message
console.log(ifItHasABadWord) ;
console.log(badWordReplacement);
// TODO: BONUS: Count how many bad words you found
let badWordsCount = true ;

for(let i =0 ; i<badWordsCount ; i++)
  {
    if(badWordsCount[i]>= "0" && badWordsCount[i] <= "9")
      {
        console.log(badWordsCount = true)
      }
  }

console.log('has bad words');

                                         


//### Example Output:

//Original message: "This game is crap and boring"
//Cleaned message: "This game is **** and boring"
//Bad words found: 1

 