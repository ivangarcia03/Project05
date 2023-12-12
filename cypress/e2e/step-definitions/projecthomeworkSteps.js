const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const ProjectPagination = require("../../pages/Project05Page");
const ProjectPagination = new ProjectPagination()
Given(/^the user is on "([^"]*)"$/, (url) => {
    cy.visit(url)
});
Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    ProjectPagination.getHeadingText(heading).should('have.text', heading)
});
Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
    ProjectPagination.getCityParagraph().should('have.text', text)
});


Then(/^the user should see the "([^"]*)" button is disabled$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^the user clicks on the "([^"]*)" button$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the user should see the "([^"]*)" button is disabled$/, (args1) => {
	console.log(args1);
	return true;
});
