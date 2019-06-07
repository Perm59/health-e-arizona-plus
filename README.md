# health-e-arizona-plus

## Project Description:
Functional/UI testing of home page of 'health-e-arizona-plus' web application.  
  Base URL: https://www.healthearizonaplus.gov

## Technical stack:
* Node.js
* WebDriverIO
* Mocha.js test framework
* Chai.js assertion library

## Test Approach:
* simultaneous support of two browsers: 'Chrome' and 'Firefox'
* testing design, functionality, eng-spanish versions and general features of each section of the page (`.test/scripts` folder)
* usage of langugage dictionary files for automated enumerating over English and Spanish content(`./test/dictionary` folder)
* accessing of the certain web content properties using `browser.execute` function, wherever WebdriverIO native selectors do not have build-in capability
* utilizing `webdriver-image-comparison` plugin (screenshots), whenever it was impossible to capture elements' attributes (text, etc) due to being implemented as images (`./test/specs/images` folder)
* creation of reusabale functions and data structures in `./test/helpers.js` file

## To launch the project in terminal:
* clone the repository:
```
git clone https://github.com/itrusevich/health-e-arizona-plus
```
* install project dependencies:
```
npm install
```
* execute all test scripts and generate a stats report:  
 ```
 npm test
 ```
The report will be launched automatically in browser upon completion of all tests. Screenshots will be saved in `./screenshots` folder.
