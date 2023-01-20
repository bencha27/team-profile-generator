const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml")

let managerObject = {};
let engineerArray = [];
let internArray = [];

// Array of questions
const questions = {
  member: "Choose a team member to add.",
  manager: {
    name: "Enter the team manager's name.",
    id: "Enter the team manager's ID number.",
    email: "Enter the team manager's email address.",
    officeNum: "Enter the team manager's office number.",
  },
  engineer: {
    name: "Enter the engineer's name.",
    id: "Enter the engineer's ID number.",
    email: "Enter the engineer's email address.",
    github: "Enter the engineer's GitHub username.",
  },
  intern: {
    name: "Enter the intern's name.",
    id: "Enter the intern's ID number.",
    email: "Enter the intern's email address.",
    school: "Enter the intern's school name.",
  },
}

// Function to initialize the app
function init() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: questions.manager.name,
      },
      {
        name: "id",
        type: "input",
        message: questions.manager.id,
      },
      {
        name: "email",
        type: "input",
        message: questions.manager.email,
      },
      {
        name: "officeNum",
        type: "input",
        message: questions.manager.officeNum,
      },
    ])
    .then((response) => {
      managerObject = response;
      chooseMember();
    });
}
init();

// Function to prompt team member
function chooseMember() {
  inquirer
    .prompt({
      name: "member",
      type: "list",
      message: questions.member,
      choices: ["Engineer", "Intern", "None"],
    })
    .then((response) => {
      switch (response.member) {
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;
        default:
          writeToFile();
      }
    })
}

// Function to prompt engineer questions
function engineerPrompt() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: questions.engineer.name,
      },
      {
        name: "id",
        type: "input",
        message: questions.engineer.id,
      },
      {
        name: "email",
        type: "input",
        message: questions.engineer.email,
      },
      {
        name: "github",
        type: "input",
        message: questions.engineer.github,
      },
    ])
    .then((response) => {
      engineerArray.push(response);
      chooseMember();
    })
}

// Function to prompt intern questions
function internPrompt() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: questions.intern.name,
      },
      {
        name: "id",
        type: "input",
        message: questions.intern.id,
      },
      {
        name: "email",
        type: "input",
        message: questions.intern.email,
      },
      {
        name: "school",
        type: "input",
        message: questions.intern.school,
      },
    ])
    .then((response) => {
      internArray.push(response);
      chooseMember();
    })
}

// Function to write HTML file from user input
function writeToFile() {
  fs.writeFile("./dist/team.html", generateHtml(managerObject, engineerArray, internArray), (err) => {
    err ? console.error(err) : console.log("Successfully created team profile page!");
  })
}