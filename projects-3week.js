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











