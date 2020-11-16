// requiring all of the dependencies neccessary for application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

/* function that will call user input
this function uses inquirer.prompt to generate the prompts in the command line */
 function getUserInput(){
    inquirer.prompt([
        {
            type:"input",
            name:"username",
            message:"What is your Github username?"
        },
        {
            type:"input",
            name: "email",
            message: "What is your email?"
        },
        {
            type:"input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type:"input",
            name:"description",
            message:"Provide a brief description of your project?"
        },
        {
            type:"input",
            name:"installation",
            message:"How is the application installed?"
        },
        {
            type:"input",
            name:"usage",
            message:"What is the purpose of this application?"
        },
        {
            type:"input",
            name:"instructions",
            message:"How would this application be tested?"
        },
        {
            type:"list",
            name:"license",
            message:"Choose a license to use",
            choices:[
                "MIT",
                "Apache 2.0",
                "Boost",
                "ISC",
                "IBM"
            ]
        },
        {
            type:"input",
            name:"contributions",
            message:"List all of the contributers for this project"
        },
        {
            type: "input",
            name:"questions",
            message: "For any further questions feel free to contact me "
        }
    ]).then((data) => {
        // const filename = `${data..toLowerCase().split(' ').join('')}.json`; 
        fs.writeFile("README.md", markdown(data), (err) => err ? console.log(err) : console.log('Success!')); 
    })
    // return data
}

getUserInput();


// async function results() {
//     await getUserInput();
// } 
// console.log(results);


// function to write README file (call inside the file function)
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
