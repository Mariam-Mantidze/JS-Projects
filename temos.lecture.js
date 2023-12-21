
// let creditNumber;

// do {
//     let creditNumber = parseInt(prompt("enter your credit number: "));
// } while (creditNumber <= 0)

// function credit (creditNumber) {
//     let creditString = creditNumber.toString()
//     let length = creditNumber.toString().length;

//     if (firstTwoDigits !== 34 && firstTwoDigits !== 37 && firstTwoDigits !== 37 && firstDigit !== 4) {
//         return "invalid";
//     }

//     if (length !== 15 && length !== 13 && length !== 16) {
//         return "Invalid";
//     }
//     let firstTwoDigits = Number(creditString.slice(0,2));
//     let firstDigit = creditString[0];


//     while (creditNumber > 0) {
//         let checkSum = 0;
//         let digit = Math.floor((creditNumber % 100) / 10);
//         let product = digit * 2;

//         if(product >= 10) {
//             product = product % 10 + Math.floor(product / 10);
//         }
//         checkSum += product;

//         let remainedDigit = creditNumber % 10;
//         checkSum += remainedDigit;

//         creditNumber = Math.floor(creditNumber / 100);
//     }
//     if (checkSum % 10 !== 0) {
//         return "invalid";
//     }
//     if (length === 15 && (firstTwoDigits === 34 || firstTwoDigits === 37)) {
//         return "Amex"
//     } else if (length === 16 && (firstTwoDigits === 51 || firstTwoDigits === 52)) {
//         return "MasterCard";

//     } else if ((length === 13 || length === 16) && firstDigit === 4) {
//         return "VISA";
//     }
   
// }


// console.log(credit(creditNumber));
