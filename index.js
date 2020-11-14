const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
import(generateMarkdown)

// array of questions for user
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
            default:"MIT",
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
            name:"Description",
            message:"Provide a brief description of your project?"
        }
    ]).then((data) => {
        const filename = `${data.Name.toLowerCase().split(' ').join('')}.json`; 
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')); 
    })
    // return data
}
// async function results() {
//     await getUserInput();
// } 
// console.log(results);
getUserInput();




// const questions = [

// ];

// function to write README file (call inside the file function)
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
