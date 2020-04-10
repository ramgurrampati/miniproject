@TestAutomation
   Feature: Practice Automation Website
  
  @TC_01
  Scenario: Valid Register
    Given the user launch the application in the browser
    When the user open My Accounts Page 
    Then the user fills valid username and Password
    And click on the Register button
    Then I validate the outcomes

	@TC_02
    Scenario: Invalid Register
    Given the user launches the application in the browser
    When the user clicks on My Accounts Page 
    Then the user fills Invalid username and Password
    Then I validate the outcomes of invalid Register
    
  @TC_03
  Scenario: valid Login
    Given the user launch the application in browser
    When the user clicks on My Accounts 
    When the user Enters the valid username and password
    And click on signin button
    Then I validate the outcomes of valid login
    
  @TC_04
  Scenario: Invalid Login
    Given the user launch the app in browser
    When user clicks on My Accounts 
    When the user Enters the Invalid username and password
    And click on the signin button
    Then I validate the outcomes of invalid login
    
    @TC_05
    Scenario: Adding to Basket
    Given  user launches the application in the browser
    When the  user clicks on Shop
    Then the user clicks on add to basket
    And   user clicks items
    Then I validate the outcomes of Adding to Basket
    
    @TC_06
    Scenario: Read more about a book
    Given the user launches the app in browser
    When  user clicks on Shop
    Then user clicks Read more
    Then I validate the outcomes of Read more
    
 @TC_07
  Scenario: To Retrive any data from Cruises table
    Given the user launches the application in browser
    Then click DemoSite
    Then user fills all the details
    And Clicks Register button
    Then I validate the results
   

   