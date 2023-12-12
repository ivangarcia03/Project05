Feature: User Management

  Scenario: Add a new user
    Given I am on the "https://techglobal-training.com/backend" page
    When I fill in the First Name with "Ivan"
    And I fill in the Last Name with "Garcia"
    And I fill in the Email with "ivan.garcia@example.com"
    And I fill in the Date of Birth with "1990-01-01"
    And I click the ADD button
    Then I should see "Ivan Garcia" in the users list

  Scenario: Search for an existing user
    Given I am on the "https://techglobal-training.com/backend" page
    When I type "Ivan Garcia" into the search box
    And I press the Enter key
    Then I should see results related to "Ivan Garcia"

  Scenario: Edit an existing user
    Given I am on the "https://techglobal-training.com/backend" page
    When I click the EDIT button for "Ivan Garcia"
    And I change the Email to "ivan.garcia@email.com"
    And I click the UPDATE button
    Then I should see the new email "ivan.garcia@email.com" next to "Ivan Garcia"

  Scenario: Delete an existing user
    Given I am on the "https://techglobal-training.com/backend" page
    When I click the DELETE button for "Ivan Garcia"
    Then I should not see "Ivan Garcia" in the users list

  Scenario: Delete all users
    Given I am on the "https://techglobal-training.com/backend" page
    When I click the DELETE ALL button
    And I confirm the deletion
    Then I should see "Number of active users: 0"