Feature: Adding an item to list

    Scenario: Adding an item into todo list
        Given Empty ToDo list
        When I write "write code" to the text box and click to the add button
        Then I should see "write code" in the TODO list

