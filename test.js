const inquirer = require("inquirer");
const fs = require("fs");
const dataStr = fs.readFileSync(
  "./topics/nighthawk_flashcard_data.json",
  "utf-8"
);
const data = JSON.parse(dataStr);
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
console.log(arr);
