// function to generate markdown for README
function generateMarkdown(data) {
  return `

## Username
  ${data.username}

## Email
${data.email}

## Title
${data.title}

## Table of Contents
  * [username](#username)
  * [email](#email)
  * [description](#description)
  * [installation](#installation)
  * [license](#license)
  * [contributions](#contributions)
  * [questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## License
${data.license}

## Contributions
${data.contributions}

## Questions
For any additional questions contact me via github or my email
${data.email}

`;
}

module.exports = generateMarkdown;
