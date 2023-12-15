const inquirer = require("inquirer");
const fs = require("fs");
const { log } = require("console");
const dataStr = fs.readFileSync(
  "./topics/nighthawk_flashcard_data.json",
  "utf-8"
);
const data = JSON.parse(dataStr);

async function questions() {
  let count = 0;
  for (let i = 0; i < data.questions.length; i += 1) {
    await inquirer

      .prompt([
        {
          name: i + 1,
          message: data.questions[i],
        },
      ])

      .then((answers) => {
        if (answers[i + 1] === data.answers[i]) {
          console.log("Right");
          count += 1;
        } else {
          console.log("WRONG");
        }
      });
  }
  console.log(`${count}/${data.answers.length}`);
}
questions();
// console.log(data);
