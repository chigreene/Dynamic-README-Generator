function renderLicenseBadge(license){
    const badges = {
      mit:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      gpl: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',

    }
    return badges[license]
  }

function renderLicenseLink(license){
    const licenseLinks = {
      mit:'[MIT](https://choosealicense.com/licenses/mit/)',
      apache: '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)',
      gpl: '[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)'

    }
    return licenseLinks[license]
  }
// ???
function renderLicenseSection(license){
    if(license){
      return `Licensed under the ${renderLicenseLink(license)} license`
    } else return ''
  }
  
function generateMarkdown({title, license, description, installation, usage, contributing, test, email, gitHub}) {
    return `
# ${title}
${renderLicenseBadge(license)}
## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)

## Installation
${installation}
## Usage
${usage}
## License
${renderLicenseSection(license)}
## Contributing
${contributing}
## Test
${test}
## Questions
${email}
[${gitHub}](https://github.com/${gitHub})`
  }

module.exports = generateMarkdown;
