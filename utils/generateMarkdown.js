// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
## Title
  ${data.title}

## Description
  ${data.description}

## Table of Contents
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [instructions](#instructions)
  * [license](#license)
  * [contributions](#contributions)
  * [questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Instructions
${data.instructions}

## License
${data.license}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributions
${data.contributions}

## Questions
For any additional questions contact me via github at ${data.username} or my email
${data.email}

`;
}

module.exports = generateMarkdown;
