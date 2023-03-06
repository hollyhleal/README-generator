// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "N/A") {
    return `[License]()`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "N/A") {
    return `[License](#license)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `This application is covered under ${responses.license}.`;
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ${renderLicenseBadge(responses.license)}
  ${renderLicenseLink(responses.license)}

  ## Description
  ${responses.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  ${responses.installation}
  
  ## Usage
  ${responses.usage}
  
  ## License
  ${renderLicenseSection(responses.license)}
  
  ## Credits
  ${responses.credits}
  
  ## Tests
  ${responses.tests}
  
  ## Questions
  For questions, comments or concerns you can reach me at [https://github.com/${
    responses.github
  }](https://github.com/${responses.github}) or [${responses.email}](mailto:${
    responses.email
  }).`;
}

module.exports = generateMarkdown;
