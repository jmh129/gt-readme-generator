function generateLicense(licenses) {
  let licenceString = ""
  // add a for loop to loop through array to return license.
  // add arrays for license and badges in this file. 
}


// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  ${data.title}
  =============
Description
===========
  ${data.description}

Table of Contents
=================
  * [Title](#title)
  * [Description](#description)
  * [Table of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
Installation
============
  ${data.installation}

Usage
=====
  ${data.usage}
  
License
=======
  ${data.license}
  
Contributing
============
  ${data.contributing}
  
Tests
=====
  ${data.tests}
  
Questions
=========
  ${data.github_username}
  ${data.email}`;
}

module.exports = generateMarkdown;
