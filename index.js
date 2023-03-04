const inquirer = require("inquirer"); //object of methods
const fs = require("fs");
//Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Please give a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "input",
      message: "Please list any collaborators or third-party assets used.",
      name: "credits",
    },
    {
      type: "input",
      message:
        "Write tests for your application. Then provide examples on how to run them here.",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((responses) => {
    const pageContent = generateFile(responses);
    fs.writeFile("READMEoutput.md", pageContent, (error) =>
      error ? console.log(error) : console.log("Your README has been created!")
    );
  });

function generateFile(responses) {
  const readMe = `# ${responses.title}

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
  
  ## Credits
  ${responses.credits}
  
  ## Tests
  ${responses.tests}
  
  ## Questions
  For questions, comments or concerns you can reach me at [https://github.com/${responses.github}](https://github.com/${responses.github}) or [${responses.email}](mailto:${responses.email}).`;
  return readMe;
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
