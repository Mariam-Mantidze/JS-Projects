/* პროექტი 1 - თამაში Mad Libs
// შექმენით მარტივი პროგრამა, რომელიც ითხოვს არსებით სახელს, 
//ზმნას, ზმნიზედას და ზედსართავ სახელს და ამ სიტყვებს თქვენივე შექმნილ ისტორიაში სვამს. */

// function madLibs () {
//     let noun = prompt("Enter a noun: ");
//     let verb = prompt("Enter a verb: ");
//     let adjective = prompt("Enter an adjective: ");
//     let adverb = prompt("Enter an adverb: ");

//     console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? Cool.`)

// }
// madLibs();

// პროექტი 2 - ქულების გამომთვლელი
 // 2. შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით. 
// შეფასების სქემა შემდეგნაირია: A: 90-100 B: 80-89 C: 70-79 D: 60-69 F: 0-59

// function gradeStudent() {
//     let grade = Number(prompt("Enter student's grade"));

//     if (grade >= 90) {
//         console.log("Student's score: " + grade)
//         console.log("Grade: A");
//     } else if 
//         (grade >= 80 && grade <= 89) {
//         console.log("Student's score: " + grade)
//         console.log("Grade: B");
//     } else if 
//         (grade >= 70 && grade <= 79) {
//         console.log("Student's score: " + grade)
//         console.log("Grade: C");
//         } else if 
//         (grade >= 60 && grade <= 69) {
//         console.log("Student's score: " + grade)
//         console.log("Grade: D");
//         } else if 
//         (grade <= 59) {
//         console.log("Student's score: " + grade)
//         console.log("Grade: F");
//         }
// }
// gradeStudent();

// პროექტი 3 - Simple Math - მარტივი მათემატიკა
//დაწერეთ პროგრამა, რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.

// function simpleMath () {
//     let num1 = Number(prompt("Enter your first number: "));
//     let num2 = Number(prompt("Enter your second number: "));

//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     console.log(`${num1} / ${num2} = ${num1 / num2}`);

// }
// simpleMath();

// პროექტი 4 - Einstein - აინშტაინი
// შექმენით პროგრამა, რომელიც მომხმარებლისგან მასის კილოგრამებში შეყვანას მოითხოვს და დაბეჭდავს ამ მასის 
//ეკვივალენტურ რაოდენობას ჯოულში. ეს ორივე რიცხვი უნდა იყოს მთელი (integer).

// function einstein () {
//     let formula = 9e16;
//     let mass = parseFloat(prompt("Please enter a mass in KG: "));
//     let energy = mass * formula;

//     console.log(`Equivalent of ${mass} kilograms is ${energy} joules!`)
// }
// einstein();

// პროექტი 5 - Tip Calculator - "ჩაის" კალკულატორი
// შექმენით პროგრამა, რომელიც მოითხოვს თანხისა და პროცენტის შეყვანას და გეტყვით, რამდენი დოლარი უნდა დატოვოთ "ჩაის" სახით.

// function tipCalculator () {

//     function convertCheck () {
//     let check = prompt("How much was your check?");
//     check = check.replaceAll("$", "");
//     let checkValue = parseFloat(check).toFixed(1)
//     return checkValue;
// }
//     function convertPercent () {
//      let percent = prompt("What percentage are you willing to tip?");
//     percent = percent.replaceAll("%", "");
//     let percentValue = parseFloat(percent) / 100;
//     return percentValue;
//     }

//     let tip = convertCheck () * convertPercent ();
//         console.log(`Leave $${tip}.`)
// }
// tipCalculator();


// better version --  rასაც ვამეორებთ ორივეგან, ვეცადოთ გავწეროთ ერთხელ პატერნში.

// function tipCalculator () {
//     function promptValue (promptMessage, symbolToRemove) {
//         let userInput = prompt(promptMessage);
//         userInput = userInput.replaceAll(symbolToRemove, "");
//         return parseFloat(userInput);
//     }
//     function convertCheck () {
//         let checkValue = promptValue("How much was your check?", "$");
//         return checkValue.toFixed(1);
//     }
//     function convertPercent () {
//         let percentValue = promptValue ("What percentage are you tipping?", "%");
//         return percentValue / 100;
//     }
//         let tip = convertCheck() * convertPercent();
//         console.log(`Leave $${tip}.`)
// }
// tipCalculator();


/* პროექტი 6 - Retirement Calculator - საპენსიო კალკულატორი
შექმენით პროგრამა, რომელიც მოითხოვს თქვენი ამჟამინდელი ასაკისა და იმ ასაკის შეყვანას, 
როცა გსურთ, პენსიაზე გახვიდეთ; შემდეგ კი განსაზღვრავს, 
რამდენი წელი დაგრჩათ პენსიაზე გასვლამდე და კონკრეტულად რომელ წელს შეგიძლიათ ამის გაკეთება.*/

// function retirement () {
//         //user input
//         let userAge = parseInt(prompt("What is your age?"));
//         while (isNaN(userAge) || userAge <= 0) {
//                 alert("Please enter a valid age.")
//                 userAge =  parseInt(prompt("What is your age?"));
//         }
//         let userRetirement = parseInt(prompt("At what age would you like to retire? "));
//         while (isNaN(userRetirement) || userRetirement <= userAge) {
//                 alert("Please enter a valid retirement year.")
//                 userRetirement =  parseInt(prompt("At what age would you like to retire? "));
//         }

//         // define date
//         const currYear = new Date().getFullYear();
//         const yearsLeft = userRetirement - userAge;
//         const retirementYear = currYear + yearsLeft;

//         console.log(`It's ${currYear}, you can retire in ${retirementYear}. So you have ${yearsLeft} years to retire!`);
// }
// retirement();

// პროექტი 7 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი
// შექმენით პროგრამა, რომელიც ითვლის ოთახის ფართობს. შესთავაზეთ მომხმარებელს ოთახის სიგრძე და სიგანე ფუტებში. 
// შემდეგ აჩვენეთ ტერიტორია როგორც კვადრატულ ფუტში, ასევე - კვადრატულ მეტრში.

// function feetToMeters(feet) {
//         return feet * 0.092903;
// }

// function roomArea () {
//         let length = parseFloat(prompt("Enter the length of the room in feet: "));
//         while (isNaN(length) || length <= 0) {
//                 alert("Please enter a valid number.");
//                 length = parseFloat(prompt("Enter the length of the room in feet: "));
//         }
//         let width = parseFloat(prompt("Enter the width of the room in feet: "));
//         while (isNaN(width) || width <= 0) {
//                 alert("Please enter a valid number.");
//                 width = parseFloat(prompt("Enter the width of the room in feet: "));
//         }
       
//         const feetValue = length * width;
//         const metersValue = feetToMeters(feetValue).toFixed(2);


//         console.log(`You entered dimensions of ${length} feet by ${width} feet. 
//         \nThe area is ${feetValue} square feet. 
//         \n${metersValue} square meters.`);    
        
// }
// roomArea();

// პროექტი 8 - Pizza Party - პიცის წვეულება

// function slicesCount (people, pizza, slices) {
//         return Math.floor((pizza * slices) / people);
// }
// function slicesLeftCount (people, pizza, slices) {
//         return ((pizza * slices) % people);
// }


// function pizzaParty () {
//         let peopleCount = parseInt(prompt("How many people?"));
//         while (isNaN(peopleCount) || peopleCount <= 0) {
//                 alert ("Please input a right count!");
//                 peopleCount = parseInt(prompt("How many people?"));
//         }

//         let pizzaCount = parseInt(prompt("How many pizzas do you have?"));
//         while (isNaN(pizzaCount) || pizzaCount <= 0) {
//                 alert ("Please input a right amount!");
//                 pizzaCount = parseInt(prompt("How many pizzas do you have?"));
//         }

//         let sliceCount = parseInt(prompt("How many slices in pizza?"));
//         while (isNaN(sliceCount) || sliceCount <= 0) {
//                 alert ("Please input a right amount!");
//                 sliceCount = parseInt(prompt("How many slices in pizza?"));
//         }

//         let slicesForPeople = slicesCount(peopleCount, pizzaCount, sliceCount);
//         let slicesLeft = slicesLeftCount(peopleCount, pizzaCount, sliceCount);

//         let sliceWord = slicesForPeople === 1 ? "slice" : "slices";
//         let leftowerWord = slicesLeft === 1 ? "piece" : "pieces";

//         console.log(`There are ${peopleCount} people with ${pizzaCount} pizzas.
//         \nEach person gets ${slicesForPeople} ${sliceWord}.
//         \nThere are ${slicesLeft} leftover ${leftowerWord}`);
// }

// pizzaParty();

// პროექტი 9 - Paint Calculator - საღებავის კალკულატორი

// function paintCalculator () {
//         let length = parseInt(prompt("Input the length of the room in feet: "));
//         while (isNaN(length) || length <= 0) {
//                 alert ("Please input the right length!")
//                 length = parseInt(prompt("Input the length of the room in feet: ")); 
//         }
//         let width = parseInt(prompt("Input the width of the room in feet: "))
//         while (isNaN(width) || width <= 0) {
//                 alert ("Please input the right width!")
//                 width = parseInt(prompt("Input the width of the room in feet: ")); 
//         }

//         const squareFootage = calculateSquareFoot(length, width);
//         const gallonsRequired = calculateGallonsRequired(squareFootage);
//         const gallonWord = gallonTerminology (gallonsRequired);


//         function calculateSquareFoot (length, width) {
//                 return length * width;
//         }

//         function calculateGallonsRequired (squareFootage) {
//                 const coveragePerGallon = 350;
//                 return Math.ceil(squareFootage / coveragePerGallon)
//         }

//         function gallonTerminology (gallons) {
//                 return gallons === 1 ? "gallon" : "gallons";
//         }

       

//         console.log(`You will need to purchase ${gallonsRequired} ${gallonWord} of paint to cover ${squareFootage} square feet.`)
// }
// paintCalculator();

// პროექტი 10 - Self-Checkout - თვით-გადახდა


// function selfCheckout () {
//         let item_1_price = parseFloat(prompt("Enter the price of item 1: "))
//         let item_1_quantity = parseInt(prompt("Enter the quantity of item 1: "));

//         let item_2_price = parseFloat(prompt("Enter the price of item 2: "));
//         let item_2_quantity = parseInt(prompt("Enter the quantity of item 2: "));

//         let item_3_price = parseFloat(prompt("Enter the price of item 3: "));
//         let item_3_quantity = parseInt(prompt("Enter the quantity of item 3: "));

         
//         let item_1_check = calculateEachItemPrice(item_1_price, item_1_quantity);
//         let item_2_check = calculateEachItemPrice(item_2_price, item_2_quantity);
//         let item_3_check = calculateEachItemPrice(item_3_price, item_3_quantity);

//         let itemCheck = calculateItemCheck(item_1_check, item_2_check, item_3_check);
//         let checkTax = calculateTax(itemCheck);
//         let fullCheck = calculateFullCheck(checkTax, itemCheck);


//         function calculateEachItemPrice (item, price) {
//                 return Number(item * price)
//         }

//         function calculateItemCheck (price1,price2,price3) {
//                 return Number(price1 + price2 + price3)
//         }

//         function calculateTax (check) {
//                return Number(((5.5 * check) / 100).toFixed(2))
//         }

//         function calculateFullCheck(check, tax) {
//                 return Number(check + tax)
//         }

//         console.log(`Subtotal: ${itemCheck}`);
//         console.log(`Tax: ${checkTax}`);
//         console.log(`Total: ${fullCheck}`);

// }

// selfCheckout();

// after giving a (LOT) of thought version


// function selfCheckout () {
//         const TAX_RATE = 5.5 / 100;

//         let itemPrice = [];
//         let itemQuantity = [];

//         for (let i = 1; i <= 3; i++) {
//                 itemPrice[i] = parseFloat(prompt(`Enter the price of item ${i}: `));
//                 itemQuantity[i] = parseFloat(prompt(`Enter the quantity of item ${i}: `));
//         }
//         let subTotal = 0;
//         for (let i = 1; i <= 3; i++) {
//                 subTotal += itemPrice[i] * itemQuantity[i];
//         }
//         let tax = subTotal * TAX_RATE;
//         let total = subTotal + tax;

//         function dollarValue (value) {
//                 return `$${value}`;
//         }

//         console.log(`Subtotal: ${dollarValue(subTotal)}`);
//         console.log(`Tax: ${dollarValue(tax)}`);
//         console.log(`Total: ${dollarValue(total)}`);
// }
// selfCheckout();



// პროექტი 11 - Currency Conversion - ვალუტის კონვერტაცია
/*
დაწერეთ პროგრამა, რომელიც გარდაქმნის ვალუტას. კერძოდ, გადააკეთეთ ევრო აშშ დოლარში. 
მოითხოვეთ თანხის რაოდენობა ევროში და ევროს მიმდინარე კურსი. ამობეჭდეთ ახალი თანხა დოლარში.

ვალუტის კონცერტაციის ფორმულაა:
amount to = (amount from × rate from ) / rate to

სადაც:

Amount to არის თანხა დოლარში
Amount from არის თანხა ევროში
rate from არის მიმდინარე გაცვლითი კურსი ევროში
rate to არის აშშ დოლარის მიმდინარე გაცვლითი კურსი // ეს საერთოდ არაა საჭირო იდეაში
*/



// function currencyConversion () {

//         let amountInEuros = inputValidation("How many euros are you exchanging?");
//         let currencyRateOfEuro = inputValidation("What is the exchange rate?"); 


//         const DOLLAR = (amountInEuros * currencyRateOfEuro);

//         alert (`${amountInEuros}€ is equal to ${DOLLAR}$.`)

// }

// function inputValidation (message) {
//         let response;

//         while (true) {
//                 response = prompt(message);

//                 if (response === null || response == "") {
//                         return null;
//                 }
//                 response = parseFloat(response);

//                 if (isNaN(response)) {
//                         alert ("Please enter valid amount");
//                         continue;
//                 }
//                 return response;
//         }
        
// }
// currencyConversion();




// პროექტი 12 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა


// function computingSimpleInterest () {
        
//         let principal = parseFloat(prompt("Enter the principal: "));
//         let rateOfInterest = parseFloat(prompt("Enter rate of interest: "))
//         let numberOfYears = parseFloat(prompt("Enter the number of years: "));

//         function dollarValue (value) {
//                 return `$${value}`;
//         }

//         let finalWorth = principal * (1 + rateOfInterest / 100 * numberOfYears);

//         console.log(`After ${numberOfYears} years at ${rateOfInterest}%, the investment will be worth ${dollarValue(finalWorth)}.`)

// }
// computingSimpleInterest();


// cleaner version. 

// function getInput (message) {
//         let value;
//         do {
//                 value = parseFloat(prompt(message));
//         } while (isNaN(value));
//         return value;
// }

// function computingSimpleInterest () {
//         let principal = getInput("Enter the principal: ");
//         let rateOfInterest = getInput("Enter rate of interest: ");
//         let numberOfYears = getInput("Enter the number of years: ");

//         function dollarValue (value) {
//                 return `$${value.toFixed(2)}`;
//         }
//         let finalWorth = principal * (1 + rateOfInterest / 100 * numberOfYears);

//         console.log(`Afrer ${numberOfYears} years at ${rateOfInterest.toFixed(2)}%, the investment worth will be ${dollarValue(finalWorth)}.`);
// }
// computingSimpleInterest();


// პროექტი 13 - Computing Simple Interest - მარტივი პროცენტის გამოთვლა

// function inputValue (message) {
//         let value;
//         do {
//                 value = parseFloat(prompt(message))
//         } while (isNaN(value) || value < 0) {
//                 return value;
//         }
// }

// function computingSimpleInterest () {

//         let principal = inputValue("Enter the principal: ");
//         let rateOfInterest = inputValue("Enter the rate of interest: ");
//         let numberOfYears = inputValue("Enter number of years: ");
//         let annualPeriod = inputValue("Enter the number of times the interest is applied anually: ");

//         function dollarValue (value) {
//                 return `$${value.toFixed(2)}`;
//         }

//         let finalWorth = principal * Math.pow(1 + (rateOfInterest / 100) / (annualPeriod), annualPeriod * numberOfYears);



//         console.log(`After ${numberOfYears} years, the rate of ${rateOfInterest}% compounded ${annualPeriod} times a year, the investment will be worth ${dollarValue(finalWorth)}`);


// }
// computingSimpleInterest();

// პროექტი 14 - Deep Thought - ღრმა ფიქრი

// function deepThought () {
        
//         const userAnswer = prompt ("What is the answer to great question of life, the universe, and everything? ");

//         switch (userAnswer.toLowerCase()) {
//                 case "42": 
//                 case "forty-two": 
//                 case "forty two": 
//                 return "Yes";
//                 default: 
//                 return "No";
//         }  

// }
// console.log(deepThought());

// პროექტი 15 - Home Federal Saving Bank - ფედერალური ბანკი

// function noHello () {
//         let hello = prompt("Say your greeting: ").toLowerCase();
//         if (hello === "hello") {
//                 return "$0";
//         }
//         let splitHello = hello.split("");
//         console.log(splitHello)

//         if (splitHello[0] === "h") {
//                 return "$20";
//         } else {
//                 return "$100";
//         }

// }
// console.log(noHello());

// პროექტი 16 - File Extensions - ფაილის ტიპები

// function checkExtension () {
//         let fileName = prompt("Enter a file name: ").toLowerCase();
//         let splitFileName = fileName.split(".").pop()

//         const mimeTypes = {
//                 "gif": "image/gif",
//                 "jpg": "image/jpeg",
//                 "jpeg": "image/jpeg",
//                 "png": "image/png",
//                 "pdf": "application/pdf",
//                 "zip": "application/zip",
//                 "txt": "text/plain" 
//         }

//         return mimeTypes[splitFileName] || "appliaction.octet/stream"; // რომელიც თრუა, იმას დააბრუნებს. note.


// }
// console.log(checkExtension());

// პროექტი 17 - Math Interpreter - მათემატიკური ინტერპრეტატორი

// function mathInterpreter () {
//         let mathExpression = prompt("Enter the expression: ").split(" ");
//         // let splittedExpression = mathExpression.split(" ");

//        const numbered = mathExpression.map((number) => {
//                 if (!isNaN(number)) {
//                         return Number(number)
//                 } else {
//                         return number;
//                 }
//        });

//        const leftOperand = numbered[0];
//        const operator = numbered[1];
//        const rightOperand = numbered[2];
//        let result;

//        switch (operator) {
//         case "+":
//                 result = leftOperand + rightOperand;
//                 break;
//         case "-":
//                 result = leftOperand - rightOperand;
//                 break;
//         case "*":
//                 result = leftOperand * rightOperand;
//                 break;
//         case "/":
//                 if (rightOperand !== 0) {
//                         result = leftOperand / rightOperand;
//                 } else {
//                         return "Can't divide by zero!";
//                 }
//                 break;
//         default:
//                 return "Unsuported operation";
//        }

//        return (`${leftOperand} ${operator} ${rightOperand} = ${(result.toFixed(1))}`);
       

// }

// console.log(mathInterpreter());


// პროექტი 18 - Meal Time - კვების დრო.

// function mealTime() {
//         let time = prompt("What time is it? ")
//         let decimalTime = timeConvertion(time);
        

//         function timeConvertion (time) {
//                 let [hours, minutes] = time.split(":").map(Number);
//                 return hours + minutes / 60;
//         }

//                 if (decimalTime >= 7 && decimalTime <= 8) {
//                         return "Breakfast time";
//                 } else if (decimalTime >= 12 && decimalTime <= 13) {
//                         return "Lunch time";
//                 } else if (decimalTime >= 18 && decimalTime <= 19) {
//                         return "Dinner time";
//                 } 

// }

// console.log(mealTime());


// პროექტი 6 Adding Numbers

// function addingNumbers () {

      
//         let number;
//         let sum = 0;
//         for (let i = 1; i <= 5; i++) {
//                 number = Number(prompt("Enter a number: "));
//                 sum += number;
//         }

//         console.log(`The total is ${sum}.`);

// }
// addingNumbers();

// პროექტი 19 - Tax Calculator - გადასახადის კალკულატორი


// function taxCalculator (subtotal, taxRate) {
//         return subtotal * taxRate;
// }

// function totalCalculator (subtotal, tax) {
//         return subtotal + tax;

// }

// function calculator () {
//         const TAX_RATE = 5.5 / 100;

//         let amount = parseFloat(prompt("What is the order amount?")) 
//         let state = prompt("What is your state?").toUpperCase();

//         let tax = taxCalculator(amount, TAX_RATE);
//         let totalForWI = totalCalculator(amount, tax);

//         const dollarValue = (value) => `$${value}`;
        
//         if (state === "WI") {
//                 console.log(`The subtotal is ${dollarValue(amount.toFixed(2))}.`)
//                 console.log(`The tax is is ${dollarValue(tax.toFixed(2))}.`)
//                 console.log(`The total is ${dollarValue(totalForWI.toFixed(2))}.`)
//         } else {
//                 console.log(`The total is ${dollarValue(amount.toFixed(2))}.`)
//         }

// }

// console.log(calculator());

// better version. მივუბრუნდეთ 👇🏻


// const TAX_RATE = 5.5 / 100;

// function calculateTax(amount) {
//     return amount * TAX_RATE;
// }

// function calculateTotal(amount, tax) {
//     return amount + tax;
// }

// function formatAsCurrency(value) {
//     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
// }

// function getInput(promptMessage) {
//     let input = parseFloat(prompt(promptMessage));
//     while (isNaN(input)) {
//         input = parseFloat(prompt(`Invalid input. ${promptMessage}`));
//     }
//     return input;
// }

// function calculator() {
//     const amount = getInput("What is the order amount?");
//     const state = prompt("What is your state?").toUpperCase();

//     if (state === "WI") {
//         const tax = calculateTax(amount);
//         const total = calculateTotal(amount, tax);
//         displayResults(amount, tax, total);
//     } else {
//         displayResults(amount, 0, amount);
//     };


//     function displayResults(subtotal, tax, total) {
//         if (state === "WI") {
//     console.log(`The subtotal is ${formatAsCurrency(subtotal)}.`);
//     }
//     if (tax > 0) {
//         console.log(`The tax is ${formatAsCurrency(tax)}.`);
//     }
//     console.log(`The total is ${formatAsCurrency(total)}.`);
// }

// }

// calculator();

// პროექტი 20 - Password Validation - პაროლის ვალიდაცია

// const password = "nonce10";


// function checkPass () {
//         let userInput = prompt("Enter a password: ");

//         if (userInput === password) {
//                 return "Welcome!"
//         } else {
//                 return "I don't know you!"
//         }
// }
// console.log(checkPass());

// better one. დავშალოთ მეტ აბსტრაქციად.

// const WELCOME_MESSAGE = "Welcome!";
// const FAILURE_MESSAGE = "I don't know you!";

// function getInput () {
//         return prompt("Enter a password: ");
// }

// function validatePassword (input, validPassword) {
//         return input === validPassword ? WELCOME_MESSAGE : FAILURE_MESSAGE;
// }

// function checkPass () {
//         const userInput = getInput();
//         return validatePassword(userInput, "abc10")
// }

// console.log(checkPass());

// პროექტი 21 - Legal Driving Age - მართვის კანონიერი ასაკი

// const LEGAL_AGE_MESSAGE = "You are old enough to legally drive.";
// const ILLEGAL_AGE_MESSAGE = "You are not old enough to drive.";
// const legalAge = 16;

// function getUserInput () {
//         const input = parseInt(prompt("What is your age? "));
//         const age = parseInt(input, 10); // radix. making our intentions more clear (we are expecting integer)
//         if (isNaN(age)) {
//                 alert ("Please input a valid age");
//                 return getUserInput();
//         }
//         return age;
// }

// function testAge (input, legalage) {
//         return input >= legalage ? LEGAL_AGE_MESSAGE : ILLEGAL_AGE_MESSAGE;
// }

// function checkAge () {
//         const userInput = getUserInput();
//         return testAge(userInput, legalAge);
// }

// console.log(checkAge());

// პროექტი 22 - Blood Alcohol Calculator - სისხლში ალკოჰოლის შემცველობის კალკულატორი.

      
// function calculateBAC(weight, gender, cups, percentage, hours) {
//        // გრამებში გადმომდყავს, რომ შევამოწმო, ისე ვერ ვიგებ
//         const ouncesOfAlcohol = cups * (percentage * 0.01) * 0.789 * 29.5735;  
//         // ფუნტებში წონა
//         const bodyWeightInPounds = weight * 2.20462;
//         // განაწილების თანაფარდობა
//         const distributionRatio = gender === 'male' ? 0.73 : 0.66;
//         //ბოლო ჭიქიდან საათები
//         const hoursSinceLastDrink = hours;
    
//         const BAC = (ouncesOfAlcohol * 5.14 / bodyWeightInPounds * distributionRatio) - .015 * hoursSinceLastDrink;
    
//         console.log(`Your BAC is ${BAC.toFixed(4)}`);
//         if (BAC < 0.08) {
//             console.log('You are under the legal limit for driving.');
//         } else {
//             console.log('You are over the legal limit for driving.');
//         }
//     }
    
//     calculateBAC(70, 'male', 2, 5, 2); 
    
// პროექტი 23 - Temperature Converter - ტემპერატურის კონვერტაცია

// function temperatureConversion () {

//         let userInput = prompt("Choose C to convert from Fahrenheit to Celsius. Press F to convert from Celsius to Fahrenheit.").toUpperCase();

//         function convertToCelcius (fahrenheitValue) {
//                 return ((fahrenheitValue - 32) * 5 / 9)
//         }

//         function converToFahrenheit (celciusValue) {
//                 return ((celciusValue * 9 / 5) + 32)
//         }

//         if (userInput === "C") {
//                 let fahrenheit = parseFloat(prompt("Please enter the temperature in Fahrenheit"));
//                 if (isNaN(fahrenheit)) {
//                         return "Please enter a valid temperature in Fahrenheit!"
//                 }
//                 return (`The temperature in Celcius is ${convertToCelcius(fahrenheit)}.`);

//         } else if (userInput === "F") {
//                 let celcius = parseFloat(prompt("Please enter the temperature in Celcius"));
//                 if (isNaN(celcius)) {
//                         return "Please enter a valid temperature in Celcius!"
//                 }
//                 return (`The temperature in Fahrenheit is ${converToFahrenheit(celcius)}.`);
//         } else {
//                 return "Not a valid type. Please enter a valid input!"
//         }


// }
// console.log(temperatureConversion());

// პროექტი 24 - BMI Calculator - სხეულის მასის ინდექსის კალკულატორი

// function BMICalculator () {

//         function BMI (weight, height) {
//                 return (weight / (height * height)) * 703;
//         }

//         let weight = parseFloat(prompt("Please enter your weight in pounds: "));
//         if (isNaN(weight)) {
//                 return "Invalid input. Please input your weight in pounds!"
//         }
//         let height = parseFloat(prompt("Please enter your height in inches: "));

//         if (isNaN(height)) {
//                 return "Invalid input. Please input your height in inches!";
//         }


//         let userBMI = BMI(weight, height);


//         const HEALTHY_MESSAGE = `Your BMI is ${parseInt(userBMI.toFixed(1))}. You are in ideal weight range.`;
//         const UNDERWEIGHT_MESSAGE = `Your BMI is ${parseInt(userBMI.toFixed(1))}. "You are underweight. You should see your doctor.`;
//         const OVERWEIGHT_MESSAGE = `Your BMI is ${parseInt(userBMI.toFixed(1))}. You are overweight. You should see your doctor.`;

//         if (userBMI >= 18.5 && userBMI < 25) {
//                 return HEALTHY_MESSAGE;
//         } else if (userBMI < 18.5) {
//                 return UNDERWEIGHT_MESSAGE;
//         } else  {
//                 return OVERWEIGHT_MESSAGE;    
//         }

// }


// console.log(BMICalculator());


// პროექტი 25 - Multistate Sales Tax Calculator - შტატშორისი გაყიდვების გადასახადის კალკულატორი

// function multiSaleTaxCalculator () {

//         function calculateTaxRate (subtotal, taxRate) {
//                 return subtotal * taxRate;

//         }

//         function totalCalculator (subtotal, tax) {
//                 return subtotal + tax;
//         }
                
//         const TAX_RATE_FOR_DUNN =  0.004;
//         const TAX_RATE_FOR_EAU_CLAIRE = 0.005;
//         const TAX_RATE_FOR_ILLINOIS = 0.08;

        

//         let orderAmount = parseFloat(prompt("What is the order amount?"));
//         if (isNaN(orderAmount)) {
//                 return "Invalid input. Please type in the right order amount!";
//         }
//         let userState = prompt("What state do you live in? ").toLowerCase();
//         if (userState.trim() === "" || userState === null) {
//                 return "Invalid input. Please type in the right State!"
//         }

//         if (userState === "wisconsin") {
//                 let county = prompt("What county do you live in?").toLowerCase();
//                 if (county === "dunn") {
//                         let taxForDunn = calculateTaxRate (orderAmount, TAX_RATE_FOR_DUNN);
//                         return `The tax is $${taxForDunn.toFixed(2)}. The total is $${totalCalculator(orderAmount, taxForDunn).toFixed(2)}.`;
//                 } else if (county === "eau claire") {
//                         let taxForEauClaire = calculateTaxRate(orderAmount, TAX_RATE_FOR_EAU_CLAIRE);
//                         return `The tax is $${taxForEauClaire.toFixed(2)}. The total is $${totalCalculator(orderAmount, taxForEauClaire).toFixed(2)}.`;
//                 } 
                
//         }
    
//         if (userState === "illinois") {
//                 let taxForIllinois = calculateTaxRate (orderAmount, TAX_RATE_FOR_ILLINOIS);
//                 let totalWithTax = totalCalculator(orderAmount,taxForIllinois)
//                 return `The tax is $${taxForIllinois.toFixed(2)}. The total is $${totalWithTax.toFixed(2)}.`;

//         }

//         return `The total is $${orderAmount.toFixed(2)}.`;
// }

// console.log(multiSaleTaxCalculator());



// 17-საც მიუბრუნდი.
// პროექტი 26 - Numbers to Names - რიცხვები სიტყვებში
/*
დაწერეთ პროგრამა, რომელიც გადააქცევს რიცხვს 1-დან 12-მდე შესაბამის თვეში.
// მოითხოვეთ ნომერი და აჩვენეთ შესაბამისი კალენდარული თვე, სადაც 1 იქნება 
//იანვარი, ხოლო 12 - დეკემბერი. ამ დიაპაზონის გარეთ ნებისმიერი მნიშვნელობისთვის დაბეჭდეთ შესაბამისი შეცდომის შეტყობინება.
*/

// function numbersToMonth () {

//         while (true) {
//         let userInput = prompt("Please enter the number of the month from 1 to 12:");

//                 // enabling canceling and empty input
//         if (userInput === null || userInput.trim() === "") {
//                 return;
//         }
//           // then turning userInput to a number
//         userInput = parseInt(userInput);

//         // check for valid inputs
//         if (isNaN(userInput) || userInput < 1 || userInput > 12) {
//                 alert("Please enter number from 1 to 12");
//                 continue;
//         }

//         switch (userInput) {
//                 case 1: alert("1 is for January🎄");
//                 break;
//                 case 2: alert ("2 is for February 🌨️");
//                 break;
//                 case 3: alert("3 is for March");
//                 break;
//                 case 4: alert ("4 is for April");
//                 break;
//                 case 5: alert ("5 is for May 🌸");
//                 break;
//                 case 6: alert ("6 is for June");
//                 break;
//                 case 7: alert ("7 is for July 🌴");
//                 break;
//                 case 8: alert ("8 is for August 🐳");
//                 break;
//                 case 9: alert ("9 is for September 🍂");
//                 break;
//                 case 10: alert ("10 is for October");
//                 break;
//                 case 11: alert ("11 is for November ☔️");
//                 break;
//                 case 12: alert ("12 is for December ☃️");
//         }
//         break;

//         }

       
// }
// numbersToMonth();



// პროექტი 27 - Comparing Numbers - რიცხვების შედარება
/*
პროექტი 34 - Comparing Numbers - რიცხვების შედარება
ერთი Input მნიშვნელობის შედარება ცნობილ მნიშვნელობასთან საკმაოდ ხშირია, 
მაგრამ ასევე ხშირად დაგჭირდებათ input-ების კრებულის დამუშავება. დაწერეთ 
პროგრამა, რომელიც ითხოვს სამ რიცხვს. ჯერ დარწმუნდით, რომ ყველა რიცხვი განსხვავებულია
 და თუ ისინი არ განსხვავდებიან, მაშინ პროგრამის მუშაობა შეჩერდეს. წინააღმდეგ შემთხვევაში,
 აჩვენეთ ამ სამიდან ყველაზე დიდი რიცხვი.
*/

// function comparingNumbers () {

//         while (true) {
//         let num1 = Number(prompt("Enter the first number:"));
//         if (isNaN(num1)) {
//                 alert ("Invalid input, please enter correct number.");
//                 continue;
//         }
//         let num2 = Number(prompt("Enter the second number:"));
//         if (isNaN(num2)) {
//                 alert ("Invalid input, please enter correct number.");
//                 continue;
//         }
//         let num3 = Number(prompt("Enter the third number:"));
//         if (isNaN(num3)) {
//                 alert ("Invalid input, please enter correct number.");
//                 continue;
//         }

//         if (num1 === num2 || num1 === num3 || num2 === num3) {
//                 return;
//         }     

//         let numbers = [num1, num2, num3];
//         return numbers.reduce((largestNum, curr) => largestNum > curr ? largestNum : curr)
        
//         }
// }
// console.log(comparingNumbers());

// second ✨refined✨ version;
    

// function compareNumbers () {

//         let num1 = inputValidation("Enter the first number:");
//         // checks for letting user cancel
//         if (num1 === null) return;

//         let num2 = inputValidation("Enter the second number:");
//         if (num2 === null) return;

//         let num3 = inputValidation("Enter the third number:");
//         if (num3 === null) return;

//         // check for valid numbers.
//         if (num1 === num2 || num1 === num3 || num2 === num3) {
//           alert ("All numbers must be distinct. Ending program. Refresh to try again.")
//           return;
//         }  
//         // finding largest number and displaying to user;
//         let numbers = [num1, num2, num3];
//         let largestNum =  numbers.reduce((largestNum, curr) => largestNum > curr ? largestNum : curr);
//         alert (`Largest number is ${largestNum}!`);
//         return;
// }

// function inputValidation (message) {
//         let number;
//         while (true) {
//            number = prompt(message);
//            // again check for cancellation;
//            if (number === null) {
//                 return null;
//            }
//            // converting prompt to number
//            number = Number(number);
//            // checking if convertion was successfull and if so, returning that number;
//            if (!isNaN(number)) {
//                 return number;
//            }
//            // else, display error message and prompt user for correct input;
//            alert ("Invalid input, please enter a correct number")
//         }
// }
// compareNumbers();



// პროექტი 28 - Troubleshooting Car Issues - მანქანის პრობლემების მოგვარება

/*
შექმენით პროგრამა, რომელიც მომხმარებელს მანქანის პრობლემების მოგვარებაში ეხმარება.
 თითოეულ კითხვაზე მომხმარებელს "კი/არა" პასუხის გაცემა შეეძლება, პროგრამა კი შესაბამისი
  კითხვების დასმას ამ პასუხების მიხედვით განაგრძობს.
*/



// function startDiagnostics () {
//         let problem = inputValidation("Is the car silent when you run the key?");
//         if (problem === null) return;
//                 if (problem === "yes") {
//                    batteryTerminalChecker();
//                 } else {
//                         clickingNoiseChecker();
//                 }
//    }
//    startDiagnostics()

//    function batteryTerminalChecker() {
//         let batteryAnswer = inputValidation("Are the battery terminals corroded?");
//         if (batteryAnswer === null) return;
//         if (batteryAnswer === "yes") {
//                 alert ("You might consider checking and cleaning the terminals.");
//         } else {
//                 alert ("The battery might be dead or discharged.");
//         }
//    }

//    function clickingNoiseChecker () {
//         let clickingAnswer = inputValidation("Does the car make a clicking noise?");
//         if (clickingAnswer === null) return;
//         if (clickingAnswer === "yes") {
//                 alert ("the starter might be malfunctioning.")
//         } else {
//                 engineProblem();
//         }

//    }
//    function engineProblem () {
//         let engineQuestion = inputValidation("Does the engine start but then die?");
//         if (engineQuestion === null) return;
//         if (engineQuestion === "no") {
//                 alert ("Please consult a proffessional.")
//         } else {
//                 fuelInjectionSystem ();
//         }
//    }

//    function fuelInjectionSystem () {
//         let fuelInjectionAnswer = inputValidation ("If you have a fuel injection system, are you getting a 'check engine' light?");
//         if (fuelInjectionAnswer === "yes") {
//                 alert ("Consider getting the engine checked for trouble codes.")
//         } else {
//                alert ("Consider checking the fuel pump or fuel filter.") 
//         }
//    }       



// function inputValidation (message) {
//    let response;
   

//        while (true) {
//         response = prompt(message);

//         //check for cancellation
//         if (response === null || response.trim() === "") {
//                 alert ("End of program.")
//                 return null;
//         };
//         response = response.toLowerCase();

//                         // check if response is yes or no
//                 if (response === "yes" || response === "no") {
//                         return response; // this sends user answer back to the calling function and stops this loop/
                      
//                 }               
//                 alert ("Invalid answer, answer should be 'yes or 'no'.")
//        }
        
// }
























     
        
       






