Feature: Adding an item to list

    Scenario: Adding an item into todo list
        Given There is a text-box to write todo
        When I write "write code" to the text box and click to the add button
        Then I should see "write code" in the TODO list

