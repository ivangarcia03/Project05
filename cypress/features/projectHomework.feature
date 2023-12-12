Feature: Project 05

    Feature Description
Background: 
Given the user is on "https://techglobal-training.com/frontend/project-5"
Scenario: Validate main content
Then the user should see the "Pagination" heading
And the user should see the "World City Populations 2022" heading
And the user should see the "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:" paragraph

Scenario: Validate the pagination next and preview bottom
Then the user should see the "Previous" button is disabled
And the user should see the "Next" button is enabled
When the user clicks on the "Next" button
Then the user should see the "Previous" button is enabled
When the user clicks on the "Next" button till it becomes disabled
Then the user should see the "Previous" button is enabled
And the user should see the "Next" button is disabled