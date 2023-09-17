class MarkDown{
  static renderLicenseBadge(license){
    const badges = {
      mit:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

    }
    return badges[license]
  }

  static renderLicenseLink(license){
    const licenseLinks = {
      mit:'[MIT](https://choosealicense.com/licenses/mit/)'

    }
    return licenseLinks[license]
  }
// ???
  static renderLicenseSection(license){
    if(license){
      return `Licensed under the ${this.renderLicenseLink(license)} license`
    } else return ''
  }
  
  static generateMarkdown(data) {
    return `
# ${data.title}
${this.renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Tests)
- [Questions](#Questions)

## Installation
${data.installation}
## Usage
${data.usage}
## License
${this.renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
${data.email}
${data.gitHub}`
  }
}

module.exports = MarkDown;
