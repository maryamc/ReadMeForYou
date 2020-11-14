// function to generate markdown for README
function generateMarkdown(data) {
  return `

## Username
  ${data.username}

## Email
${data.email}

## Title
${data.title}

`;
}

module.exports = generateMarkdown;
