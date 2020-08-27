const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const theTEAM = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function beginHere(){
    inquirer
    .prompt([
        {
            type: "list",
            name: "selectPosition",
            message: "Select position you're inputting for: ",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(function(response){

        console.log("Position selected: ", response.selectPosition);
        

        if(response.selectPosition === "Manager"){
            console.log("manager has been chosen");
            managerSelection();

        }
        else if(response.selectPosition === "Engineer"){
            console.log("engineer has been chosen");
            engineerSelection();

        }
        else if(response.selectPosition === "Intern"){
            console.log("intern has been chosen");
            internSelection();

        }
    })
}


function managerSelection(){
    console.log("entered manager function");
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?" 
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email? "
        },
        {
            type: "input",
            name: "phoneNumber",
            message: "Enter office number where one can reach the manager: "
        },
    ]).then(function(response){
    
        console.log("Manager data: ", response);

        const manager = new Manager(response.name, response.id, response.email, response.phoneNumber);

        theTEAM.push(manager);

    })
}


function engineerSelection(){
    console.log("entered engineer function");
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer? "
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email? "
        },
        {
            type: "input",
            name: "username",
            message: "What is the engineer's GitHub username? "
        }
    ]).then(function(response){
        
        const engineer = new Engineer(response.name, response.id, response.email, response.username);

        theTEAM.push(engineer);

    })

}


function internSelection(){
    console.log("entered intern function");
    return inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern? "
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email? "
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend? "
        }
    ]).then(function(response){

        const intern = new Intern(response.name, response.id, response.email, response.school);

        theTEAM.push(intern);

    })

}

beginHere();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
