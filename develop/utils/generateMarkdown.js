class MarkDown{
  static renderLicenseBadge(license){
    const badges = {
      mit:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      gpl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',

    }
    return badges[license]
  }

  static renderLicenseLink(license){
    const licenseLinks = {
      mit:'[MIT](https://choosealicense.com/licenses/mit/)',
      apache: '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)',
      gpl: '[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)'

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
