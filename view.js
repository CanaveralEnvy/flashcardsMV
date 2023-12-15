const inquirer = require("inquirer");
const fs = require("fs");

const dataStr = fs.readFileSync(
  "./topics/nighthawk_flashcard_data.json",
  "utf-8"
);
const data = JSON.parse(dataStr);
console.log(data.questions.length);

const arr = [];
function questions() {
  for (i = 0; i < data.questions.length; i += 1) {
    let obj = {};
    obj.name = i + 1;
    obj.message = data.questions[i];
    arr.push(obj);
  }
}
questions();
// console.log(arr);

inquirer

  .prompt(arr)

  .then((answers) => {
    if (answers.faveReptile === "123") {
      console.info("Answer:", "right");
    } else {
      console.info("wrong");
    }
  });

// inquirer

//   .prompt(arr)

//   .then((answers) => {
//     if (answers.kkk === "123") {
//       console.info("Answer:", "right");
//     } else {
//       console.info("wrong");
//     }
//   });
