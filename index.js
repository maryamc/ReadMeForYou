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
            name:"Github Username",
            message:"What is your Github username?"
        },
        {
            type:"input",
            name: "Email",
            message: "What is your email?"
        },
        {
            type:"input",
            name: "Title",
            message: "What is your project title?"
        },
        {
            type:"input",
            name:"Description",
            message:"Provide a brief description of your project?"
        },
        {
            type:"input",
            name:"Installation",
            message:"How is the application installed?"
        },
        {
            type:"input",
            name:"Usage",
            message:"What is the purpose of this application?"
        },
        {
            type:"checkbox",
            name:"License",
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
            name:"Contributers",
            message:"List all of the contributers for this project"
        }
    ]).then((data) => {
        const filename = `${data.Name.toLowerCase().split(' ').join('')}.json`; 
        fs.writeFile(filename, markdown(data), (err) => err ? console.log(err) : console.log('Success!')); 
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
