const inquirer = require ('inquirer')
const fs = require("fs");
const questions = require ('./index.js')
const questions2 = require ('./index.js')
const questions3 = require ('./index.js')




async function topping () {
 await inquirer
  .prompt([
{
    type: 'list',
    name: 'topping',
    message: 'Выберите тему',
    choices: ['загадки с подвохом', 'школьное', 'ny'],
  }
  ])
  .then((answers) => {
    if (answers.topping === 'загадки с подвохом') {
    questions()
    }
    if (answers.topping === 'школьное') {
        questions2()
        }
    if (answers.topping === 'three') {
            questions3()
            }
            
  })
}

topping()