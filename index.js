console.log("hello world");
const fs = require("fs");
const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const weeks = fs.readdirSync("./").filter((file) => file.startsWith("week-"));

let week, spinner;
async function getProject() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "week",
        message: "which week do you want to view?",
        choices: weeks,
      },
    ])
    .then((answers) => {
      week = answers["week"];
    });

  await inquirer
    .prompt([
      {
        type: "list",
        name: "project",
        message: "which project do you want to view?",
        choices: fs.readdirSync(week),
      },
    ])

    .then((answers) => {
      spinner = createSpinner("Looking into it").start();
      setTimeout(() => {
       // spinner.success({text: `please input: \n node ${week}/${answers["project"]}`, mark: ":)", color: "cyan"});
       spinner.success({text: `success`});
        const func = require(`./${week}/${answers["project"]}/index.js`)
        func();
        // spinner.stop()
      }, 1000);
    });
}

getProject();

//console.log(weeks);
