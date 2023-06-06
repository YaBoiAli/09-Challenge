// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Your Project Title? ",
    name: "title",
  },

  {
    type: "input",
    message: "What was your motivation?",
    name: "what",
  },

  {
    type: "input",
    message: "Why did you build this project?",
    name: "why",
  },

  {
    type: "input",
    message: "What problem does it solve?",
    name: "problem",
  },

  {
    type: "input",
    message: "What did you learn?",
    name: "learn",
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
    name: "credit",
    message: "Please put all the credits here? ",
  },

  {
    type: "list",
    name: "license",
    message: "Which license will you use for your project?",
    choices: ["agpl", "apache", "mit", "no license"],
  },

  {
    type: "input",
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. ",
    name: "contribution",
  },

  {
    type: "input",
    message: "Please enter the test instructions. ",
    name: "test",
  },

  {
    type: "input",
    message: "Please enter your github Username:  ",
    name: "githubUsername",
  },

  {
    type: "input",
    message: "Please enter your email address so people can connect with you: ",
    name: "email",
  },
  


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var x = fs.writeFile(fileName, data, function (err) {
    console.log(err);
  });
  return x;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (result) {
    writeToFile("./utils/README.md", generateMarkdown(result));
  });
}

// Function call to initialize app
init();
