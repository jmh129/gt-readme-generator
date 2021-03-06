function generateLicense(licenses) {
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
\n<img src="https://img.shields.io/badge/license-${data.license}-green"/>
\n${data.description}

Table of Contents
=================
  * [Title](#title)
  * [Description](#description)
  * [Table of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
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
This application is covered the following license: ${data.license}
  
Contributing
============
${data.contributing}
  
Tests
=====
${data.tests}
  
Questions
=========

If you have any questions regarding anything regarding this application please reach out to me at either of the following and I will get back to you as soon as I can. 

GitHub: ${data.github_username}
\nEmail: ${data.email}
\n Thanks for checking out my page!`;
}

module.exports = generateMarkdown;
