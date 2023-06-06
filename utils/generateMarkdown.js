// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `

## Badge:
![badge](https://img.shields.io/badge/license-${license}-brightorange)

`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
## License
  
The application is covered under the following license:
  
${renderLicenseLink(license)}
      `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(result) {
  return `
# ${result.title}
${renderLicenseBadge(result.license)}                       
## Table of contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
    
## Description:

${result.what}

${result.why}

${result.problem}

${result.learn}

## Installation:

${result.installation}

## Usage:

${result.usage}

## Credits: 

${result.credit}

${renderLicenseSection(result.license)}

## Contribution:

${result.contribution}

The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${result.tests}

## Questions:

My [GitHub](https://github.com/${result.githubUsername})

[Email: ${result.email}](mailto:${result.email})

`;
}

module.exports = generateMarkdown;
