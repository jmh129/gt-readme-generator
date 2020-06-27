const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your product.",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter directions for installation.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter directions for usage.",
    name: "usage",
  },
  {
    type: "list",
    message: "What license will you be using?",
    name: "license",
    choices: [
      "Apache 2.0",
      "Eclipse Public LIcense 1.0",
      "IBM Public License Version 1.0",
      "ISC",
      "MIT",
      "Mozilla Public License 2.0",
      "The Perl License",
      "The Artistic License 2.0",
      "The Unlicense",

    ],
  },
  {
    type: "input",
    message: "Please enter any contribution guidlines.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter any test instructions.",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "github_username",
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const mdReturn = markDown(answers);
      writeToFile("user_readme.md", mdReturn);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// function call to initialize program
init();
