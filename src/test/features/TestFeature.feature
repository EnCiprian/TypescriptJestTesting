Feature: Employee api

Scenario: Get the employees details
  Given that i have the employee api
  When I do a get on the "employee" endpoint
  And i set the message "this is a message"
  Then the employees list is correct
 
# Scenario: Get the employees details
#   Given that i have the employee wit the name "John"
#   When I do say hello to the employee
#   Then the hello should be addressed to "John" 