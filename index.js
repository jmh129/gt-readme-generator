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
      {
        name: "No License",
        value:
          "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
      },
      //   { name: "Academic Free License v3.0", badge: "" },
      {
        name: "Apache license 2.0",
        value:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      { name: "Artistic license 2.0", badge: "" },
      {
        name: "Boost Software License 1.0",
        value:
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      },
      {
        name: "BSD 2-clause 'Simplified' license",
        value:
          "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
      },
      {
        name: "BSD 3-clause 'New' or 'Revised' license",
        value:
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: "BSD 3-clause Clear license",
        value:
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      //   "Creative Commons license family",
      //   "Creative Commons Zero v1.0 Universal",
      // name: "Creative Commons Attribution 4.0",
      {
        name: "Creative Commons Attribution Share Alike 4.0",
        value:
          "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
      },
      //   "Do What The F*ck You Want To Public License",
      //   "Educational Community License v2.0",
      {
        name: "Eclipse Public License 1.0",
        value:
          "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
      },
      //   "European Union Public License 1.1",
      {
        name: "GNU Affero General Public License v3.0",
        value:
          "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
      },
      //   "GNU General Public License family",
      {
        name: "GNU General Public License v2.0",
        value:
          "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
      },
      {
        name: "GNU General Public License v3.0",
        value:
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      },
      //   "GNU Lesser General Public License family",
      //   "GNU Lesser General Public License v2.1",
      {
        name: "GNU Lesser General Public License v3.0",
        value:
          "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
      },
      {
        name: "ISC",
        value:
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      },
      //   "LaTeX Project Public License v1.3c",
      //   "Microsoft Public License",
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Mozilla Public License 2.0",
        value:
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      },
      //   "Open Software License 3.0",
      //   "PostgreSQL License",
      {
        name: "SIL Open Font License 1.1",
        value:
          "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
      },
      //   "University of Illinois/NCSA Open Source License",
      {
        name: "zLib License",
        value:
          "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
      },
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
