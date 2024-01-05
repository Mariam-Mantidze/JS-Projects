/*
პროექტი 48 - Magic 8 Ball
შექმენით Magic 8 Ball თამაშის პროგრამა, რომელიც მოთხოვს მომხმარებელს რაიმე 
კითხვის შეყვანას და პასუხად შემთხვევითობის პრინციპით გამოიტანს "Yes", "No" ან "Ask again later".

შემთხვევითობის პრინციპით დასადგენად, გამოიყნეთ შესაბამისი ბიბლიოთეკა.
გააკეთეთ input-ის ვალიდაცია და დაყავით კოდი ფუნქციებად.

*/

// ცალკე პროგრამა ვალიდაციისთვის.
// პროგრამა შემთხვევითი რიცხვისთვის.

// function generateRandomAnswer() {
//   const answers = [
//     "yes",
//     "no",
//     "Ask again later",
//     "Do not count on that",
//     "Absolutely",
//   ];
//   let max = answers.length;
//   let randomNum = Math.floor(Math.random() * max);
//   return answers[randomNum];
// }

// function magicBall() {
//   console.log("MagicBall function started."); // Debug log
//   let input = validateInput("Enter your question.");
//   console.log("Input received: ", input); // Debug log

//   // handle cancellation
//   if (input === null) {
//     console.log("User cancelled input.");
//     return;
//   }
//   //handle successfull input
//   console.log("Valid input received:", input); //Debug log
//   alert(`${generateRandomAnswer()}`);
// }

// magicBall();

// function validateInput(promptMessage) {
//   let userInput;
//   while (true) {
//     userInput = prompt(promptMessage);

//     // handle cancellation
//     if (userInput === null) {
//       alert("Ending program.");
//       return null;
//     }
//     // normalize input
//     userInput = userInput.trim();

//     // handle invalidInput
//     if (userInput === "" || typeof userInput !== "string") {
//       alert("Please input a valid question.");
//       continue;
//     }
//     // handle successfull input
//     return userInput;
//   }
// }

//პროექტი 49 - Picking a Winner - გამარჯვებულის არჩევა
/*
შექმნით პროგრამა, რომელიც შემთხვევითობის პრინციპით აარჩევს შეჯიბრში მოგებულ მონაწილეს.
 პროგრამამ უნდა შეგეკითხოთ სახელი იქამდე, სანამ მომხმარებელი input-ში არაფერს არ
  ჩაწერს და უბრალოდ enter-ს არ დააჭერს. ამის შემდეგ შემთხვევით უნდა აირჩიოს მოგებული მონაწილე.

შემთხვევითობის პრინციპით დასადგენად, გამოიყნეთ შესაბამისი ბიბლიოთეკა.
გააკეთეთ input-ის ვალიდაცია და დაყავით კოდი ფუნქციებად.
როცა მოგებული მონაწილე არჩეულია, წაშალეთ ის სიიდან და მიეცით მომხმარებელს შესაძლებლობა აირჩიოს სხვა მოგებული.
თუ სურვილი გაქვს, შეგიძლია ამ აპლიკაციის GUI ვერსია ააწყო, სადაც ეკრანზე მონაწილეების სია ვიზუალურად აირევა და საბოლოოდ გამოიტანს გამა

*/

// ფუნქცია სახელების შესაგროვებლად -
// ფუნქცია ინფუთის ვალიდაციისთვის -
// ფუნქცია გამარჯვებულის გამოსავლენად -
// GUI აწყობა (optional)

function pickingAwinner() {
  let list = gatherNames();
  let max = list.length;
  let randomNum = Math.floor(Math.random() * max);

  alert(`Winner is ${list[randomNum]}!`);
}
pickingAwinner();

function gatherNames() {
  let input;
  let listOfNames = [];
  while (true) {
    input = inputValidator("Enter a name.");
    //handle cancellation
    if (input === null) {
      return;
    }
    if (input === "") {
      console.log("User inputs gathered:", listOfNames); // Debug log
      return listOfNames;
    }
    listOfNames.push(input);
  }
}

// gatherNames();
function inputValidator(promptMessage) {
  let userInput;

  while (true) {
    let pattern = /^[A-Za-z\s]*$/;
    userInput = prompt(promptMessage);

    // handle cancellation
    if (userInput === null) {
      alert("Ending program.");
      return null;
    }

    //normalize user input
    userInput = userInput.trim();

    // handle valid input
    if (
      userInput === "" ||
      (typeof userInput === "string" && pattern.test(userInput))
    ) {
      return userInput;
    } else {
      alert("Please input valid name."); // handle invalid input
      continue;
    }
  }
}
