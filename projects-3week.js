/*
პროექტი 36 - Anagram Checker - ანაგრამის შემმოწმებელი
შექმენით პროგრამა, რომელიც ადარებს ორ სტრიქონს და ადგენს არის თუ არა ისინი ანაგრამა 
(სიტყვა, რომელიც წარმოიქმნება სხვა სიტყვის ასოების გადაადგილებით). პროგრამამ უნდა 
მოითხოვოს ორივე input-ის წინადადება და პასუხი ისე დაბეჭდოს, როგორც მაგალითშია ნაჩვენები.

Example Output

> Enter two strings and I'll tell you if they are anagrams:
> Enter the first string: note
> Enter the second string: tone
> "note" and "tone" are anagrams.

გამოიყენეთ ფუნქცია, სახელად isAnagram, რომელიც არგუმენტად იღებს ორ სტრიქონს და 
აბრუნებს boolean-ს. გამოიძახეთ ეს ფუნქცია თქვენი მთავარი ფუნქციიდან.
შეამოწმეთ, ორივე სიტყვა ერთნაირი სიგრძისაა თუ არა.
*/


// function isAnagram(str1, str2) {

//         // check for length
//         if (str1.length !== str2.length) {
//             alert ((`"${str1}" and "${str2}" are not anagrams.`))
//             return false;
//         }
  

//     str1 = str1.split("");
//     str2 = str2.split("");

//      // every-თი. check for actual anagram;
//      let answer = str1.every((char) => str2.includes(char));

//      if (answer === true) {
//         alert (`"${str1.join("")}" and "${str2.join("")}" are anagrams.`)
//      } else {
//         alert (`"${str1.join("")}" and "${str2.join("")}" are not anagrams.`)
//      }
//      return answer;
     
    
//     // ----------  for ციკლით

//     // for (let char of str1) {
//     //     if (!str2.includes(char)) {
//     //         return false;
//     //     }
//     // }
//     // return true;
// }

// function anagramChecker () {
//     let str1 = inputValidator("Please enter the first string");

//     // check for cancelled input from inputValidator funcition
//     if (str1 === null) return;

//     let str2 = inputValidator("Please enter the second string");
//     if (str1 === null) return;

//     return isAnagram(str1, str2);

// }


// function inputValidator(message) {
//     let string;

//     while (true) {
//         string = prompt(message);

//         // check for cancellation
//         if (string === null) {
//             alert("Program ending.")
//             return null;
//         }

//         string = string.toLowerCase();

//         if (!isNaN(string) || string === "") {
//             alert("Please input valid word.")
//             continue;
//         }
//         return string;
//     }
// }

// anagramChecker();

/*
პროექტი 37 - Password Strength Indicator - პაროლის სიძლიერის შემფასებელი
ექმენით პროგრამა, რომელიც განსაზღვრავს მოცემული პაროლის სიძლიერეს ამ წესების საფუძველზე:

• ძალიან სუსტი პაროლი შეიცავს მხოლოდ ციფრებს და რვა სიმბოლოზე ნაკლებია. 
• სუსტი პაროლი შეიცავს მხოლოდ ასოებს და რვა სიმბოლოზე ნაკლებია. 
• ძლიერი პაროლი შეიცავს ასოებს და მინიმუმ ერთ რიცხვს, ასევე, მინიმუმ რვა სიმბოლოს. 
• ძალიან ძლიერი პაროლი შეიცავს ასოებს, ციფრებს და სპეციალურ სიმბოლოებს და არის მინიმუმ რვა სიმბოლოს სიგრძის.

Example Output

> The password '12345' is a very weak password.
> The password 'abcdef' is a weak password.
> The password 'abc123xyz' is a strong password.
> The password '1337h@xor!' is a very strong password.

შექმენით passwordValidator ფუნქცია, რომელიც მიიღებს პაროლს არგუმენტად და 
დააბრუნებს მნიშვნელობას, რომელიც შეფასდება პაროლის სიძლიერის დასადგენად.
 ფუნქციამ არ უნდა დააბრუნოს სტრიქონის (string) ტიპის მნიშვნელობა.
*/
// let password = "aaaaaaaaaaa1";

// function passwordValidator (password) {

//     const specialCharactersPattern = /[^a-zA-Z0-9_]/;
//     let numberCount = 0;
//     let specialCharacterCount = 0;
//     let characterCount = 0;
//     let passwordStrength = {strength: "normal"};

  

//     for (let i = 0; i < password.length; i++) {
//         let char = password[i];

//         if (!isNaN(char)) {
//             numberCount++;
//         }
//         if (/[a-zA-Z]/.test(char)) {
//             characterCount++;
//         }
//         if (specialCharactersPattern.test(char)) {
//             specialCharacterCount++;
//         }
//     }

//             // weak password
//          if (password.length < 8 && numberCount === 0 && specialCharacterCount === 0 && characterCount > 1) {
//            passwordStrength.strength = "weak";

//            // very weak password
//         } else if ((password.length < 8 && numberCount > 0 && specialCharacterCount === 0 && characterCount === 0)) {
//             passwordStrength.strength = "very Weak";

//             // strong password
//         } else if ((password.length >= 8 && numberCount > 0 && specialCharacterCount === 0 && characterCount > 0)) {
//             passwordStrength.strength = "strong";

//             // very strong
//         } else if ((password.length >= 8 && numberCount > 1 && specialCharacterCount > 1 && characterCount > 1)) {
//             passwordStrength.strength = "very strong";
//         }
//         return passwordStrength;


//     }

//     // function for generating a message

//     function generatePasswordMessage (password) {
//         const result = passwordValidator(password);
//         let message = `The password '${password}' is a `;

//         switch (result.strength) {
//             case "very weak":
//                 message += "very weak password.";
//                 break;
//             case "weak":
//                 message += "veak password";
//                 break;
//             case "strong":
//                 message += "strong password.";
//             break;
//             case "very strong":
//             message += "very strong password.";
//             break;
//             default:
//             message += "normal password.";  
//         }
//         return message;
//     }
    


// console.log(generatePasswordMessage(password));




/*
პროექტი 38 - Months to Pay Off a Credit Card -

შექმენით პროგრამა, რომელიც დაგეხმარებათ განსაზღვროთ, რამდენი თვე დასჭირდება საკრედიტო ბარათის ბალანსის დაფარვას. 
პროგრამამ უნდა სთხოვოს მომხმარებელს შემდეგი ინფორმაციის შეყვანა: საკრედიტო ბარათის ბალანსი, ბარათის APR (წლიური საპროცენტო განაკვეთი), 
და თვიური გადასახადი. შემდეგ პროგრამამ უნდა დააბრუნოს თვეების რაოდენობა. ფორმულა შემდეგია:

• n არის თვეების რაოდენობა. 
• i არის დღიური მაჩვენებელი (APR / 365). 
• b - ბალანსი. 
• p - ყოველთვიური გადასახდელი თანხა.

Example Output

> What is your balance? 5000
> What is the APR on the card (as a percent)? 12
> What is the monthly payment you can make? 100
 
> It will take you 70 months to pay off this card.
გამოიყენეთ ფუნქცია, სახელწოდებით countMonthsUntilPaidOff, 
რომელიც არგუმენტად იღებს ბალანსს, APR-ს და ყოველთვიურ გადასახადს და აბრუნებს თვეების რაოდენობას. ამ მნიშვნელობებს ფუნქციის გარედან არ მიწვდეთ.
*/

// function main () {
//     const userBalance = inputValidation("What is your balance?");
//     if (userBalance === null) return; // Exit if user cancelled

//     const userAPR = inputValidation("What is the APR on the card as a percent?");
//     if (userAPR === null) return; // Exit if user cancelled

//     const userMonthlyPayment = inputValidation("What is the monthly payment you can make?");
//     if (userMonthlyPayment === null) return; // Exit if user cancelled

//     const months = countMonthsUntilPaidOff(userBalance, userAPR, userMonthlyPayment);
//     console.log(`It will take you ${months} months to pay off this card.`);


// }

// main();

// // months calculator

// function countMonthsUntilPaidOff (balance, APR, monthlyPayment) {
//         const dailyRate = (APR / 100) / 365;

//         let n = -(1 / 30) * Math.log(1 + (balance / monthlyPayment) * (1 - Math.pow((1 + dailyRate), 30))) / Math.log (1 + dailyRate);
//         return Math.ceil(n);

        
// }

// // to check if user input is valid;

// function inputValidation (message) {
//     let response;
//     while (true) {
//         response = prompt(message);

//         // check for cancellation
//         if (response === null) {
//             alert ("Ending program");
//             return null;
//         }

//         // check for non-numeric input
//         response = parseFloat(response);

//         if (isNaN(response) || response === "") {
//             alert ("Please input only numbers.");
//             continue;
//         }
//         return response;
//     }
// }


/*
პროექტი 39 - Validating Inputs - Input-ების ვალიდაცია


დაწერეთ პროგრამა, რომელიც მოგთხოვთ სახელს, გვარს, თანამშრომლის ID-ს და ZIP კოდს. 
დარწმუნდით, რომ input-ები ვალიდურია შემდეგი წესების მიხედვით:

• სახელი უნდა იყოს შევსებული. 
• გვარი უნდა იყოს შევსებული. 
• სახელი და გვარი უნდა იყოს მინიმუმ ორი სიმბოლოს სიგრძის. 
• თანამშრომლის ID არის AA-1234 ფორმატში - ორი ასო, დეფისი და ოთხი რიცხვი. 
• ZIP კოდი უნდა იყოს რიცხვი.

არასწორ მონაცემებზე აჩვენეთ შესაბამისი შეცდომის შეტყობინებები.

Example Output

> Enter the first name: J
> Enter the last name:
> Enter the ZIP code: ABCDE
> Enter an employee ID: A12-1234
> "J" is not a valid first name. It is too short.
> The last name must be filled in.
> The ZIP code must be numeric.
> A12-1234 is not a valid ID.
 
შექმენით ფუნქცია თითოეული ტიპის ვალიდაციისთვის. 
შემდეგ შექმენით validateInput ფუნქცია, რომელიც იღებს ყველა Input-ის მონაცემს 
და იძახებს კონკრეტული ვალიდაციის ფუნქციებს.
*/

// name
// surname
// id
// zip


// function nameValidator (name) {
//     if (name === "") {
//        return "Name must be filled.";
//     }
//     else if (name.length < 2 || !isNaN(name)) {
//        return `"${name}" is not a valid name. Name must be at least 2 characters long.`
//     } 
//     return true;
// }

// function lastNameValidator (surName) {
//     if (surName === "") {
//        return `Last name must be filled.`;
       
//     } else if (surName.length < 2 || !isNaN(surName)) {
//        return `"${surName}" is not a valid last name. Last name must be at least 2 characters long.`;

//     }
//     return true;
// }

// function idValidator (id) {
//     const pattern = /^[A-Za-z]{2}-\d{4}$/;
//     const result = pattern.test(id);

//     if (!result) {
//         return "Not a valid ID."; 
//     }
//     return true;
// }

// function zipCodeValidator (zipCode) {
//     zipCode = parseInt(zipCode);

//     if (isNaN(zipCode)) {
//         return "ZIP code must be numeric.";
//     }
//     return true;
// }

// // // ყველა ტიპის ვალიდაცია, ცალ-ცალკე ფუნქციების გამოძახება; 


// function main () {

//     let isValid = false;

//     while (!isValid) {
//         const name = prompt("Enter your first name.");
//         if (name === null) {
//          alert ("Ending program.")
//          return;
//         }
       
//         const lastName = prompt("Enter your last name.");
//         if (lastName === null) {
//          alert ("Ending program.")
//          return;
//         }
//         const userId = prompt("Enter your employee ID");
//         if (userId === null) {
//          alert ("Ending program.")
//          return;
//         }
     
//         const zipCode = prompt("Enter your ZIP code");
//         if (zipCode === null) {
//          alert ("Ending program.")
//          return;
//         }
     
//         // validateInputs and continue the loop if the validation fails;
//         isValid = validateInput(name, lastName, userId, zipCode);
//         if (!isValid) {
//             alert("Please correct the errors and try again.");
//             console.log("Restarting the input flow. Please re-enter your information.");
//         }
//     }
    
//     console.log("Success!")

// }
// main()


// function validateInput (name, surname, id, zipCode) {

  
//     let errors = [];

//     let nameError = nameValidator(name);
//     if (nameError !== true) {
//         errors.push(nameError);
     
//     }
    
//     let surnameError = lastNameValidator(surname);
//     if (surnameError !== true) {
//         errors.push(surnameError);
        
//     }

//     let idError = idValidator(id);
//     if (idError !== true) {
//         errors.push(idError);
        
//     }

//     let zipCodeError = zipCodeValidator(zipCode);
//     if (zipCodeError !== true) {
//         errors.push(zipCodeError);
        
//     }

//        // gather all errors and display to user and re-prompt if any error is remaining.
//     if (errors.length > 0) {
//         errors.forEach(error => console.log(error));
//         return false;
//     }
//     return true;
// };


/*
პროექტი 40 - Camel Case


შექმენით პროგრამა, რომელიც მომხმარებელს მოუწოდებს, input-ად შეიყვანოს ცვლადის სახელი camel case-ში, 
პროგრამამ კი უნდა დაბეჭდოს იგივე სახელი snake case-ში.
დაუშვით, რომ მომხმარებლის ჩანაწერი აუცილებლად camel case სტილში იქნება.

Example Output

> camelCase: name
> snake_case: name
> camelCase: firstName
> snake_case: first_name
> camelCase: preferredFirstName
> snake_case: preferred_first_name
*/

// function main() {

//     while (true) {
//     let userInput = prompt("Enter a camelCase word: ");
//     if (userInput === null) {
//         return;
//     }
//         if (userInput === "" || !isNaN(userInput)) {
//             alert("Please enter a valid word.")
//             continue;
//         }
//         return console.log(camelToSnake(userInput))
//     }
    
// }

// // function inputValidation(message) {
// //     let status = true;
// //     let input;
// //     while (!true) {
// //          input = prompt(message);

// //         if (input === null) {
// //             return;
// //         } else if (input === "" || (!isNaN(input))) {
// //             status = false;
// //             continue;
// //         }
// //     }  
// //     return input;
// // }

// main()

// function camelToSnake (camelString) {

//     // converting using loop
//     let snakeCase = "";

//     for (let i = 0; i < camelString.length; i++) {
//         if (i > 0 && camelString[i] === camelString[i].toUpperCase()) {
//             snakeCase += "_" + camelString[i].toLowerCase();
//         } else {
//             snakeCase += camelString[i].toLowerCase();
//         }
//     }
//     return snakeCase;

//     // or with regular expressions
//     // return camelString.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();

// }

/*
პროექტი 41 - Coke Machine - კოკა-კოლის მანქანა
დავუშვათ, რომ მანქანა ყიდის კოკა-კოლას ბოთლებს 50 ცენტად.
 მასში მხოლოდ შემდეგი მონეტების ჩაგდება შეგვიძლია: 25-ცენტიანი, 10-ცენტიანი და 5-ცენტიანი.

დაწერეთ პროგრამა, რომელიც Input-ად სთხოვს მომხმარებელს მონეტის "ჩაგდებას" მანამ, 
სანამ თანხა 50 ცენტს არ მიაღწევს. პროგრამამ ყოველი მონეტის "ჩაგდების" შემდეგ მომხმარებელს უნდა აცნობოს,
რამდენი დარჩა გადასახდელი და კვლავ სთხოვოს input-ის შეყვანა. მას შემდეგ, რაც მომხმარებელი მინიმუმ 50 ცენტს შეიტანს, 
დაბეჭდეთ, რამდენი ცენტი ხურდა ეკუთვნის მას. დაუშვით, რომ მომხმარებელი მხოლოდ მთელ რიცხვებს შეიყვანს - 
ყველა ისეთი რიცხვის იგნორირება მოახდინეთ, რომელიც დაშვებული მონეტებიდან არც ერთს არ ემთხვევა.
*/




// function cokeMachine() {
//     // initialize variables for counting coins, userInput, total coke price and price that is left.
//     let count = 0;
//     let userInput, userCoin;
//     let coke_price = 50;
//     let priceLeft = coke_price;

//     while (count < coke_price) {
//         userInput = prompt(`Please add a coin. We only accept 5, 10 and 25 cents. You have ${priceLeft} cents to pay.`);
    
//         // check for calcellation
//         if (userInput === null) {
//             alert("End of program.")
//             return;
//         }
//         // convert userInput to integer and handle empty string
//         userCoin = userInput === "" ? NaN : parseInt(userInput);

       
//         // check for invalid inputs
//         if (userCoin !== 10 && userCoin !== 25 && userCoin !== 5 || isNaN(userCoin)) {
//             alert ("Please add a coin. We only accept 5, 10 and 25 cents.");
//             continue; // invalid input so prompt again;
//         } 

//             // update count and calculate price left
//             count += userCoin;
//             priceLeft = coke_price - count;

//             // handle overpayment
//             if (count > coke_price) {
//                 let userChange = count - coke_price;
//                 alert (`You bough the coke. Your change is ${userChange} cents.`)
//                 return;
//             }
//             // if exact amount is paid
//             if (count === coke_price) {
//                 alert(`You bought the coke. Enjoy!`)
//                 return;
//             }
//         }
//     }



// cokeMachine();

/*
პროექტი 42 - Just setting up my twttr - ჩემი twttr-ის დაყენება
ტექსტური შეტყობინებების ან ე.წ. "ტვიტების" გაგზავნისას, არც ისე იშვიათია სიტყვების შემოკლება დროისა და
 შეტყობინების სიგრძის დაზოგვის მიზნით. ეს ხშირად ხმოვანთა გამოტოვების ხარჯზე ხდება, როგორც თავდაპირველად 
 Twitter-ს ეძახდნენ twttr-ს.

შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შეყვანას და შემდეგ იმავე ტექსტს დაბეჭდავს,
 მაგრამ ყველა ხმოვანს (A, E, I, O და U) გამოტოვებს, მიუხედავად იმისა, დიდი ასოებით ეწერა ისინი თუ - პატარა ასოებით.
*/


// patern-ის ცვლადი, სადაც შევინახავთ ხმოვნებს. regex = /[aeiou]/gi
// serialization - toLowerCase() // an modifier "gi" in regex
// replace all 




// function settingUpTwtr() {

//     let userInput;

//     while (true) {
//     userInput = prompt("Please enter a word: ");

//     // handle cancellation
//     if (userInput === null) {
//         alert("End of program.")
//         return;
//     }

//     // handle invalid input and re-prompt user
//     if (userInput.match(/[^a-zA-Z\s]/g)) {
//         alert ("Please enter a valid word");
//         continue;
//     }

//     // alert for succsess and return user string without vowels.
//     alert (`Your word without vowels: '${replaceVowels(userInput)}'.`);
//     return replaceVowels(userInput);

//     }
    
// }
// settingUpTwtr()

// // function for replacing vowels in strings
// function replaceVowels(string) {
//     let pattern = /[aeiou]/gi;
//     return string.replaceAll(pattern, "");
// }

/*
პროექტი 43 - Vanity Plates - სანომრე ნიშნები
მასაჩუსეტში შეგიძლიათ თქვენი მანქანისთვის თქვენთვის სასურველი სანომრე ნიშნები აიღოთ, 
იმ ასოებითა და ციფრებით, რაც გნებავთ, მაგრამ რამდენიმე წესი უნდა იყოს დაცული:

ყველა სანომრე ნიშანი უნდა იწყებოდეს მინიმუმ ორი ასოთი.
შეიძლება შეიცავდეს მაქსიმუმ 6 სიმბოლოს (ასოს ან რიცხვს) და მინიმუმ 2 სიმბოლოს.
ციფრების გამოყენება არ შეიძლება სანომრე ნიშნის შუაში; ისინი ბოლოს უნდა იყოს. მაგალითად, 
AAA222 იქნება მისაღები, თუმცა AAA22A ამ წესს ვერ დააკმაყოფილებს.
გამოყენებული პირველი რიცხვი არ შეიძლება იყოს "0".
დაშვებული არ არის წერტილების, სივრცეების (space) და პუნქტუაციის ნიშნების გამოყენება.
შექმენით პროგრამა, რომელიც მოუწოდებს მომხმარებელს სანომრე ნიშნის შეყვანისკენ და და შემდეგ output-ად 
გამოაქვს ან valid (თუ ნიშნები აკმაყოფილებს ყველა მოთხოვნას), ან - Invalid. დაუშვით, რომ მომხმარებლის input-ის ყველა 
ასო იქნება დიდი.
*/

// pattern /^[A-Za-z]{2}\d{4}$/

// გავცხრილოთ მაქსიმუმ იყოს length 6, პირველი ინდექსი რომ არ იყოს 0
// რეჯექსი, რომ გავცრხილოთ პუნქტუაციის ნიშნები, სფეისები და ა.შ.
// პირველი ორი ასო აუცილებლად იყოს letter: /^[A-Za-z]{2}
// შუაში რომ არ იყოს რიცხვები 🤔


// function validateUserPlates() {
//     let userPlates;

//     while (true) {
//         userPlates = prompt("Please enter a desired plate number.");
       
//         // handle cancellation
//         if (userPlates === null) {
//             alert ("End of the program.");
//             return
//         }
//         // normalize to upper case

//         userPlates = userPlates.toUpperCase()

//         // check for invalid input and prompt again.
//         if (!checkPlates(userPlates)) {
//             alert ("Not a valid format. Please input maximum 6 characters. First 2 characters must be letters. Numbers should be at the end and should not start with zero.")
//             continue;
//         }
//         // If user was successfull display the success message
//         if (checkPlates(userPlates)) {
//             alert(`You have sucessfully chosen '${userPlates}' as your plate number!`);
//             return;
//         }
//     }
// }

// validateUserPlates()



// function checkPlates(plates) {
//     // create pattern for plates
//     let pattern = /^[A-Z]{2}[A-Z0-9]{0,4}$/; // აქაც თუ სწორად გავიგე, 2 ასო უნდა იყოს, და რიცხვების რაოდენობას არ აქვს მნიშვნ. ამიტომ, თუ მაგ. 2 AA შეიყვანა, უკვე ვალიდურია. თუ არასწორად გავიგე პირობა, ჩავასწორებდი რეჯექსის პირობას
    
    
//     // check for character count. Should be max 6;
//     if (plates.length > 6) { //  თუ სწორად გავიგე პირობა და მაქს. 6 არის. თუ არა და < 6-ზეც false დაბრუნდებოდა და იქნებოდა დასავშები მხოლოდ 6 ქერექთერი.
//         return false;
//     }

//     // check for pattern match
//     if (!plates.match(pattern)) {
//         return false;
//     }
    
    
//     // find index of first occurance of number
//     let index = plates.search(/\d/);
//     // extract the number part from the string
//     if (index !== -1) {
//        let numbers = plates.substring(index);
//            // check if it starts with zero.
//        if (numbers.startsWith("0")) {
//         return false;
//     }
// }
//     return true;

// }

/*
პროექტი 44 - Handling Bad Input - ცუდი Input-ის მართვა

72-ის წესი სწრაფი მეთოდია იმის შესაფასებლად, თუ რამდენი ხანი დასჭირდება თქვენი ინვესტიციის გაორმაგებას. 
ამის გამოსათვლელად 72 მის მოსალოდნელ შემოსავალზე (ROR) უნდა გავყოთ. ეს კარგი ინსტრუმენტია, რომელიც დაგეხმარებათ გაარკვიოთ, 
არის თუ არა აქციები, ობლიგაციები ან ანაბრები თქვენთვის მომგებიანი. ასევე, კარგი პროგრამაა input-ის გასატესტად, 
რადგან რადგან კომპიუტერებს ნულზე გაყოფა არ შეუძლიათ.

იმის ნაცვლად, რომ პროგრამა შეაჩეროთ, როდესაც მომხმარებელი არასწორ input-ს შეიყვანს,
 შეგიძლიათ უბრალოდ განაგრძოთ input-ის მოთხოვნა, სანამ არ მიიღებთ ვალიდურ ჩანაწერს. შექმენით კალკულატორი, 
 რომელიც მოგთხოვთ ინვესტიციის Rate of Return-ს (ROR) და გამოთვლის, რამდენი წელი დასჭირდება თქვენი ინვესტიციის გაორმაგებას.

ფორმულა შემდეგია: years = 72 /r, სადაც r არის ROR-ის მითითებული მაჩვენებელი.

არ მისცეთ მომხმარებელს საშუალება, პროგრამაში ჩაწეროს 0.
არ მისცეთ საშუალება, ჩაწეროს არა-რიცხვითი input.
გამოიყენეთ ციკლი (loop) ცუდი input-ისთვის, რათა დარწმუნდეთ, რომ მომხმარებელი ვალიდურ მნიშვნელობას შეიყვანს.

*/

// ROR ცვლადი - მომხარებლის ინფუთი
// ფორმულა - ცალკე ფუნქცია - სადაც years = 72/ror. return ror;
// ფუნქცია, სადაც დავჰენდლავთ ლოგიკას - მომხარებელი ვერ შეიყვანს 0-ს. ვერ შეიყვანს არა რიცხვით ინფუთს. 




// function hadnlingUserInput() {
//     let ROR;

//     while (true) {
//         ROR = prompt("Type in the rate of return.");

//         // handle cancellation
//         if (ROR === null) {
//             alert ("End of program.")
//             return;
//         }
//         // normalize userInput to numbers
//         ROR = Number(ROR);

//         // handle non-numeric input and zero input
//         if (ROR === 0 || isNaN(ROR)) {
//             alert ("Sorry, not a valid input.");
//             continue;
//         }

//         // handle success
//         alert (`It will take ${calculateDoublingTime(ROR)} years to double your initial investment.`)
//         return calculateDoublingTime(ROR);

//     }
// }
// hadnlingUserInput()

// function calculateDoublingTime(ror) {
//     let years = Math.ceil(72 / ror);
//     return years;
// }

/*
პროექტი 45 - Multiplication Table - გამრავლების ტაბულა
შექმენით პროგრამა, რომელიც დააგენერირებს გამრავლების ტაბულას რიცხვებისთვის 0-დან 12-მდე.
გამოიყენეთ nested loop ამ პროგრამის დასასრულებლად.
*/

// for loop i-ს დასაგენერირებლად და ნესთიდ ლუპი j-s დასაგენერირებლად/
//  i = 0; j = 0; i = 0; j = 1; i = 0; 

// function multiplicationTable() {
//     // initialize the variable to build results in
//     let table = "";
//     // loop and perform calculations
//     for (let i = 0; i <= 12; i++) {
//         for (let j = 0; j <= 12; j++) {
//             table += `${i} * ${j} = ${i * j}\n`; // add each calculation to the table
//         }
//         // add extra new line for spacing after each row
//         table += '\n'
//     }
//     // return the table;
//     return table;
    
// }

// console.log(multiplicationTable());


/*
პროექტი 46 - Karvonen Heart Rate
Karvonen Heart Rate არის ერთ-ერთი მეთოდი თქვენი პულსის დადგენისთვის.
 შექმენით პროგრამა, რომელიც შეეკითხება მოხმარებელს მის ასაკსა და გულისცემას,
  შემდეგ კი ამ მონაცემებზე დაყრდნობით დაითვლის პულსს, სხვადასხვა ინტენსიურობის მიხედვით 
  (55 % -იდან 95 % -მდე). გამოიტანეთ ამ ყველაფრის ამსახველი ცხრილი. ისეთი, როგორიც მაგალითშია ნაჩვენები.

გამოსათვლელი ფორმულა: TargetHeartRate = (((220 - age) - restingHR) * intensity) + restingHR

ხელით არ დაწეროთ პროცენტები, გამოიყენეთ ციკლი და გაზარდეთ 5 პროცენტით 55-95 მნიშვნელობები.
გააკეთეთ ვალიდაცია, არ მისცეთ მომხმარებელს საშუალება რომ შეიყვანოს input-ში რიცხვების გარდა სხვა სიმბოლოები.
*/


// გასასუფთავაბელია კოდი, გასასწორებელია ვალიდაცია მთლიანად.

function karvorenHeartRateCalculation(age, restingHR) {
    let target = "";
 
    // target გამოვთვალეთ
    for (let i = 0.55; i <= 1; i += 0.05) {
        let intensity = i;
        let formula = (((220 - age) - restingHR) * intensity) + restingHR;
        target += `${Math.floor(percentConverter(intensity))}% | ${(formula.toFixed(0))} bpm \n`
    }
    
    return `Intensity | Rate\n-------------|-------- \n${target}`;


}

function percentConverter(number) {
    return number * 100;
}

// გასასწორებელია 
function getUserInput () {
    let userAge, userHeartRate;

    while (true) {
        userAge = prompt("Enter your age:");
        validateUserInput(userAge);

        userHeartRate = prompt("Enter your resting pulse:");
        validateUserInput(userHeartRate);

       
        // convert userInputs to numbers;
        userAge = Number(userAge); 
        userHeartRate = Number(userHeartRate);

       
        console.log(`${karvorenHeartRateCalculation(userAge, userHeartRate)}`);
        return karvorenHeartRateCalculation(userAge, userHeartRate);

    }
}

getUserInput()

// გასასწორებელია
function validateUserInput(input) {
    while (true) {
         // handle cancellation
    if (input === null) {
        alert("Ending program.")
        return;
    }
     // handle non-numeric input
     if (isNaN(input)) {
        alert ("Please input only numbers.");
        continue;
    }
    return input;
    }  

}







