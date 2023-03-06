// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "N/A") {
    return `[License]()`;
  }
  return ``;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "N/A") {
    return `[License](#license)`;
  }
  return ``;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `This application is covered under ${data.license}.`;
  }
  return ``;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Credits
  ${data.credits}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For questions, you can reach me at [https://github.com/${
    data.github
  }](https://github.com/${data.github}) or by email at [${data.email}](mailto:${
    data.email
  }).`;
}

module.exports = generateMarkdown;
