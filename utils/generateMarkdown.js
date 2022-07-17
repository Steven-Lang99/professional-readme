// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'General Public License') {
    return "https://img.shields.io/badge/License-General--Public--License-brightgreen"
  }
  if (license === 'Mozilla Public License') {
    return "https://img.shields.io/badge/License-Mozilla%20Public%20License-yellow"
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  -${data.motivation}
  -${data.build}
  -${data.problem}
  -${data.learn}

  ## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Features](#features)
[How to Contribute](#how to contribute)
[Tests](#tests)

## Installation
Please follow these steps to install:
-${data.install}

## Usage
Please follow to screenshots for the usage of the application:

![alt text](assets/images/screenshot.png)

## Credits
List of collaborators on the application:

-${data.collaborators}
-${data.assets}

## License

-${renderLicenseSection(data.license)}${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Features
List of features on the applications:

-${data.features}

## How to Contribute
Guidelines on howt to contribute to the application:

-${data.contribute}

## Tests
Instruction on how to test the application:

-${data.tests}
`;
}

module.exports = generateMarkdown;
