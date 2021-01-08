# Automation

the first intention is to build some kind bot for twitter using cypress automation testing as my learning path. Because of some problem and security policy, so i decide to use dummies website.

# Test Case

case : test_realworldio.spec.js

step 1 : Visit and login
    
- visit website with `cy.visit`
- find input element for username and password, then find the login button using  `cy.get`
(format: `cy.get('tag_name[attribute_name="attribute_value"]')`)

step 2 : Exploring global feed

- find element that contain "global feed" using `cy.contain`
- find div element who have button as a child (example: `cy.get("div button")` 

step 3 : Create an article

- find element to create an article
- fill the input and textarea

step 4 : Go to setting and logout

- find setting and click button logout