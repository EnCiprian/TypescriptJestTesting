Feature: Employee api in new feature

Scenario: Get the employees details in the new feature
  Given that i have the employee api
  When I do a get on the "employee" endpoint
  And i set the message this is another message
  Then the employees list is correct for the new feature