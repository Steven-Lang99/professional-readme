
//Function to return the badge of each license if chosen
function renderLicenseBadge(license) {
  if (license === 'General Public License') {
    return "https://img.shields.io/badge/License-General--Public--License-brightgreen"
  }
  if (license === 'Mozilla Public License') {
    return "https://img.shields.io/badge/License-Mozilla--Public--License-yellow"
  }
  if (license === 'Apache License') {
    return "https://img.shields.io/badge/License-Apache--License-orange"
  }
  if (license === 'MIT License') {
    return "https://img.shields.io/badge/License-MIT--License-red"
  }
  if (license === 'Boost Software License') {
    return "https://img.shields.io/badge/License-Boost--Software--License-lightgrey"
  }
  if (license === 'Unlicense') {
    return "";
  }

}


//Function to return the license link of each license if chosen
function renderLicenseLink(license) {
  if (license === 'General Public License') {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  }
  if (license === 'Mozilla Public License') {
    return "https://choosealicense.com/licenses/mpl-2.0/"
  }
  if (license === 'Apache License') {
    return "https://choosealicense.com/licenses/apache-2.0/"
  }
  if (license === 'MIT License') {
    return "https://choosealicense.com/licenses/mit/"
  }
  if (license === 'Boost Software License') {
    return "https://choosealicense.com/licenses/bsl-1.0/"
  }
  if (license === 'Unlicense') {
    return "";
  }
}


//Function to return the license section of each license if chosen
function renderLicenseSection(license) {
  if (license === 'General Public License') {
    return "![General Public License]"
  }
  if (license === 'Mozilla Public License') {
    return "![Mozilla Public License]"
  }
  if (license === 'Apache License') {
    return "![Apache License]"
  }
  if (license === 'MIT License') {
    return "![MIT License]"
  }
  if (license === 'Boost Software License') {
    return "![Boost Software License]"
  }
  if (license === 'Unlicense') {
    return "";
  }
}


// Function to gather the data from our questions and add them to our ReadMe
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  -${data.motivation}
  -${data.build}
  -${data.problem}
  -${data.learn}

  ## Table of Contents

[Installation](#installation)
[License](#license)
[Usage](#usage)
[Credits](#credits)
[Features](#features)
[Contribute](#contribute)
[Tests](#tests)
[Questions](#questions)

## Installation
Please follow these steps to install:
-${data.install}

## License

[${renderLicenseSection(data.license)}(${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

Please click on the license to read more.

## Usage
Please follow to screenshots for the usage of the application:

![alt text](assets/images/screenshot.png)

## Credits
List of collaborators on the application:

-${data.collaborators}
-${data.assets}

## Features
List of features on the applications:

-${data.features}

## Contribute
Guidelines on how to contribute to the application:

-${data.contribute}

## Tests
Instruction on how to test the application:

-${data.test}

## Questions

You can see my other projects at (https://github.com/${data.github}/).

If you have any further question reach out to me at ${data.email}.

`;
}

module.exports = generateMarkdown;
