Steps into creating a selenium-cucumber project using javascript:

- On the terminal, type "npm init -y";
- Then, type "npm install --save-dev @cucumber/pretty-formatter @cucumber/cucumber", to install cucumber and auxiliary packages;
- Then, type "npm install selenium-webdriver assert" to install the selenium-webdriver and the library;
- Type "npm install chromedriver geckodriver" to install the browser's drivers (chrome and firefox);
- See if your chrome/firefox browser on your computer is compatible with the chrome/firefox driver;
- On package.json, on "test", put the following code: "cucumber-js -f @cucumber/pretty-formatter features/* --format html:cucumber-report.html";
- Create a "features" folder on your project, to put the bdd (.feature) files for the tests;
- Create a "steps-definitions" folder inside the "features" folder, to put your tests (.js) files;
- Configure the project as you like, with the driver specifications and tests;
- Type "npm test" to run the tests;

- If you run the test with the .js file empty (after creating the .feature), the system will give you a "basis" for your tests, so you copy it and do the steps needed, and you can also use selenium IDE extension on google chrome to map the elements of the website you will use;

- To update the chrome version, type "npx webdriver-manager update";

- To run only one test at a time, type ex.: "npm run test:loginValido";