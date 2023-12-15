const inquirer = require("inquirer");
const fs = require("fs");


async function questions() {

  const dataStr = fs.readFileSync(
    "./topics/nighthawk_flashcard_data.json",
    "utf-8"
  );
  const data = JSON.parse(dataStr);

  let bonuses = 0

  for (let i = 0; i < data.questions.length; i += 1) {
    await inquirer

      .prompt([
        {
          name: i + 1,

          message: data.questions[i],
        },
      ])

      .then((answers) => {
        
        if (answers[i+1] === data.answers[i]) {
          bonuses += 1
          console.log("Right");
        } else {
          console.log("WRONG");
        }
       
      });
  }
  console.log(`${bonuses}/${data.answers.length}`);
}



async function questions2() {

  const dataStr = fs.readFileSync(
    "./topics/second.json",
    "utf-8"
  );
  const data = JSON.parse(dataStr);

  let bonuses = 0

  for (let i = 0; i < data.questions.length; i += 1) {
    await inquirer

      .prompt([
        {
          name: i + 1,

          message: data.questions[i],
        },
      ])
      .then((answers) => {
        
        if (answers[i+1] === data.answers[i]) {
          bonuses += 1
          console.log("Right");
        } else {
          console.log("WRONG");
        }
       
      });
  }
  console.log(`${bonuses}/${data.answers.length}`);
}


async function questions3() {

  const dataStr = fs.readFileSync(
    "./topics/third.json",
    "utf-8"
  );
  const data = JSON.parse(dataStr);

  let bonuses = 0

  for (let i = 0; i < data.questions.length; i += 1) {
    await inquirer

      .prompt([
        {
          name: i + 1,

          message: data.questions[i],
        },
      ])
      .then((answers) => {
        
        if (answers[i+1] === data.answers[i]) {
          bonuses += 1
          console.log("Right");
        } else {
          console.log("WRONG");
        }
       
      });
  }
  console.log(`${bonuses}/${data.answers.length}`);
}



// questions2()
questions3()

module.exports = questions3
module.exports = questions2
module.exports = questions
