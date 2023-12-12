const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const BackendPage = require('../../pages/BackendPage')


const backendPage = new BackendPage()


Given(/^I am on the "([^"]*)" page$/, (args1) => {
	cy.visit(args1)
	
});


When(/^I fill in the First Name with "([^"]*)"$/, (args1) => {
	backendPage.getFirstName().type(args1)
});


Then(/^I fill in the Last Name with "([^"]*)"$/, (args1) => {
	backendPage.getLastName().type(args1)
});


Then(/^I fill in the Email with "([^"]*)"$/, (args1) => {
	backendPage.getEmail().type(args1)
});

Then(/^I fill in the Date of Birth with "([^"]*)"$/, (args1) => {
	backendPage.getDOB().type(args1)
});

Then(/^I click the ADD button$/, () => {
	backendPage.getAddButoon().click()
});


Then(/^I should see "([^"]*)" in the users list$/, (fullname) => {
	backendPage.getUserList().contains(fullname)
});


When(/^I type "([^"]*)" into the search box$/, (fullname) => {
	backendPage.getSearchBar().type(fullname)
});


Then(/^I press the Enter key$/, () => {
	return true;
});



When(/^I click the EDIT button for "([^"]*)"$/, (user) => {
	backendPage.getUserEditButton(user)
})


Then(/^I change the Email to "([^"]*)"$/, (email) => {
	backendPage.getModalEmail().clear().type(email)
})


Then(/^I click the UPDATE button$/, () => {
	backendPage.getModalUpdateButton().click()
    backendPage.getEditModal().should('not.exist')
})


Then(/^I should see the new email "([^"]*)" next to "([^"]*)"$/, (user, email) => {
	backendPage.getSpecificuserEmail(user, email)
})


When(/^I click the DELETE button for "([^"]*)"$/, (user) => {
	backendPage.getUserDeleteButton(user)
})

Then(/^I should not see "([^"]*)" in the users list$/, (user) => {
	backendPage.getSpecificUser(user).should('not.exist')
})

When(/^I click the DELETE ALL button$/, () => {
	backendPage.getDeleteAllButton().click()
})

When(/^I confirm the deletion$/, () => {
	backendPage.getUserList().find('> div').should('have.length', 2)
})

Then(/^I should see "([^"]*)"$/, (users) => {
	backendPage.getNumberofActiveUsers().should('have.text', users)
})





















