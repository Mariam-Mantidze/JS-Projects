//1) პროექტი 1 - Saying Hello - გამარჯობა
//შექმენით პროგრამა რომელიც გკითხავთ "რა გქვია?", დაელოდება თქვენს პასუხს და გიპახუსებთ "გამარჯობა, თქვენი სახელი

// function sayHello () {
//     let name = prompt("What is your name?");
//     alert("Hello " + name + "!")
// }
// sayHello()


// / პროექტი 2 - Counting the Number of Characters - სიმბოლოების რაოდენობის დათვლა
//  შექმენით პროგრამა, რომელიც მოგთხოვთ სიტყვის ან წინადადების (string) შეყვანას და შემდეგ გიჩვენებთ,
//   თუ რამდენი სიმბოლოსგან შედგება თქვენი ჩანაწერი. */

  // function countSymbols () {
  //   let string = prompt("Enter your words: ");
  //   let noWhiteSpaceString = string.replaceAll(" ", "");
  //   console.log((string + " has " + noWhiteSpaceString.length + " symbols!"))
  // }
  // countSymbols();

// /* პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა
//  შექმენით პროგრამა, რომელიც მოგთხოვთ ციტატისა და მისი ავტორის ჩაწერას, 
//  შემდეგ კი გაჩვენებთ ორივეს ისე, როგორც მაგალითშია. */

//  function quoteAuthor () {
//     let quote = prompt("What is your quote?");
//     let author = prompt("Who said it?");
//     console.log(`${author} says, "${quote}"`);
//  }
//  quoteAuthor();

/* პროექტი 4 - Indoor Voice - ჩუმი ხმა
შექმენით პროგრამა, რომელიც მოგთხოვთ სტრიქონის ჩაწერას და 
შემდეგ იმავე ჩანაწერს მხოლოდ პატარა ასოებით გაჩვენებთ. 
პუნქტუაცია და სიმბოლოებს შორის სივრცეები (whitespace) უცვლელი უნდა დარჩეს.*/

// function indoorVoice () {
//   let string = prompt("Enter your words: ").toLowerCase()
//   console.log(string)
// }
// console.log(indoorVoice());

/* პროექტი 5 - Playback Speed - საუბრის სიჩქარე
შექმენით პროგრამა, რომელიც წინადადების ჩაწერას მოგთხოვთ, 
შემდეგ კი იმავე ჩანაწერს გაჩვენებთ, ოღონდ იმ განსხვავებით, 
რომ ამჯერად ასოებს შორის ყველა სივრცე (whitespace) მრავალწერტილით (...) იქნება ჩანაცვლებული.*/


// function playBackSpeed () {
//   let sentence = prompt("Please enter a sentence: ").replaceAll(" ", "...")
//   console.log(sentence)
// }
// playBackSpeed();

/* პროექტი 6 - Making Faces - სახეების მიღება
შექმენით პროგრამაში, სადაც დაწერთ ფუნქციას სახელწოდებით convert, რომელიც პარამეტრად იღებს სტრიქონს (str), 
შემდეგ კი იმავე სტრიქონს აბრუნებს, იმ განსხვავებით, რომ ნებისმიერ ამგვარ ჩანაწერს - ":)" 🙂-ით, ხოლო ":(" - 🙁-ით შეცვლის. 
დანარჩენი ტექსტი უცვლელი უნდა დარჩეს.
იმავე პროგრამაში, დაწერეთ მეორე ფუნქცია - main, რომელიც სტრიქონის შეყვანას გთხოვთ, 
შემდეგ convert ფუნქციას იძახებს და ბოლოს, შედეგს გაჩვენებთ. */

// function makingFaces () {
//   function convert (str) {
//     return str.replaceAll(":)", "🙂").replaceAll(":(", "😔");
//   }
//   function main () {
//     let sentence = prompt("Please enter a sentence: ");
//     console.log(convert(sentence));
//   }
//   main();
// }
// makingFaces();

//regExp-ით.

// function makingFaces () {
//   function convert (string) {
//     const replacedString =  string.replace(/:\)/g, "🙂").replace(/:\(/g, "😔");
//     return replacedString;
//   }
//   const main = function () {
//     string = prompt("Write a sentence with emoji: ");
//     console.log(convert(string));
//   }
//   main()
  
// }
// makingFaces();















