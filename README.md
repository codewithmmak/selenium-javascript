---
# Selenium and JavaScript Setup Guide
---

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Test
** Add new test under `test` folder
** Name the file as <TestName>.js (e.g. LoginTest.js)
* Pages
** Add new page under `pages` folder
** Name the file as <PageName>.js (e.g. LoginPage.js)

### How to Run Test
* Go to Project root directory and run command: `npm test`
* If you want to run one test then run command: `npm run testGrep`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to view HTML report
* Go to Project root directory: `./playwright-report/index.html`

### How to view failed test screenshot
* Go to Project root directory: `./test-results/`

### Sample Allure Test Report
![Selenium and JavaScript Test Report](./assets/test-report.png?raw=true "Selenium and JavaScript Test Report")

![Selenium and JavaScript Test Report Expanded View](./assets/test-report-expanded-view.png?raw=true "Selenium and JavaScript Test Report Expanded View")


### How to run Test on SauceLabs
* [SauceLabs Quickstart](https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/)
    * Set Environment Variables:
        * Open Terminal
        * Run `touch ~/.bash_profile; open ~/.bash_profile`
        * In TextEdit, add
        * `export SAUCE_USERNAME=“YOUR USERNAME”`
        * `export SAUCE_ACCESS_KEY="YOUR ACCESS KEY"`
        * Save the .bash_profile file and Quit (Command + Q) Text Edit.
        * In Terminal echo $SAUCE_USERNAME
        * In Terminal echo $SAUCE_ACCESS_KEY
