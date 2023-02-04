//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; //image to license
  }
  if (license ==='MIT') {
    return '[![License]([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
if (license ==='IBM') {
  return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';

}
  return ''; //returns nothing for else
}
//Create a function that returns the license link
// If there no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '\n* [License](#license)\n';
  }
  return '';
}

//Create a funciton that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License'
    // This project is licensed under the ${license} license; //Uncertainty 
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.Installation}

## Usage
${data.usage}

## License
${data.license}

## How to Contribute
${data.contribution_guidlines}

## Tests
${data.test_instructions}
  `
}
module.exports = generateMarkdown
