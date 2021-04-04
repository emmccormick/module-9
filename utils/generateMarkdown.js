

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1> ${data.projectName} </h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description
  ${data.description}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen) <br />
    This application is covered by the ${data.license} license. 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
    For questions regarding this project, reach out to me on Github at:
      [Github account](www.github.com/${data.github})
    Or email me at ${data.email}
  



`;
}

module.exports = generateMarkdown;
