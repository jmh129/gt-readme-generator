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
    type: "checkbox",
    message: "What licenses will you be using?",
    name: "license",
    choices: [
      { name: "No License", badge: "" },
      { name: "Academic Free License v3.0", badge: "" },
      {
        name: "Apache license 2.0",
        badge:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      { name: "Artistic license 2.0", badge: "" },
      {
        name: "Boost Software License 1.0",
        badge:
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      },
      {
        name: "BSD 2-clause 'Simplified' license",
        badge:
          "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
      },
      {
        name: "BSD 3-clause 'New' or 'Revised' license",
        badge:
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: "BSD 3-clause Clear license",
        badge:
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      //   "Creative Commons license family",
      //   "Creative Commons Zero v1.0 Universal",
      {
        name: "Creative Commons Attribution 4.0",
        badge:
          "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
      },
      //   "Creative Commons Attribution Share Alike 4.0",
      //   "Do What The F*ck You Want To Public License",
      //   "Educational Community License v2.0",
      //   "Eclipse Public License 1.0",
      //   "European Union Public License 1.1",
      //   "GNU Affero General Public License v3.0	",
      //   "GNU General Public License family",
      //   "GNU General Public License v2.0",
      //   "GNU General Public License v3.0",
      //   "GNU Lesser General Public License family",
      //   "GNU Lesser General Public License v2.1",
      //   "GNU Lesser General Public License v3.0",
      //   "ISC",
      //   "LaTeX Project Public License v1.3c",
      //   "Microsoft Public License",
      //   "MIT",
      //   "Mozilla Public License 2.0",
      //   "Open Software License 3.0",
      //   "PostgreSQL License",
      //   "SIL Open Font License 1.1",
      //   "University of Illinois/NCSA Open Source License",
      //   "The Unlicense",
      //   "zLib License",
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

    console.log("Success!");
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
