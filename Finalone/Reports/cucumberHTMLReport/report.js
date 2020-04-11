$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/Myapp.Feature");
formatter.feature({
  "line": 2,
  "name": "Practice Automation Website",
  "description": "",
  "id": "practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestAutomation"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Valid Register",
  "description": "",
  "id": "practice-automation-website;valid-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open My Accounts Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user fills valid username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "vr_tc01.the_user_launch_the_application_in_the_browser()"
});
formatter.result({
  "duration": 51024903000,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.the_user_open_My_Accounts_Page()"
});
formatter.result({
  "duration": 7088874600,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.the_user_fills_valid_username_and_Password()"
});
formatter.result({
  "duration": 14110919400,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.click_on_the_Register_button()"
});
formatter.result({
  "duration": 10319193500,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 2115065500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Invalid Register",
  "description": "",
  "id": "practice-automation-website;invalid-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "the user launches the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user clicks on My Accounts Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user fills Invalid username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I validate the outcomes of invalid Register",
  "keyword": "Then "
});
formatter.match({
  "location": "ir_tc02.the_user_launches_the_application_in_the_browser()"
});
formatter.result({
  "duration": 20340497200,
  "status": "passed"
});
formatter.match({
  "location": "ir_tc02.the_user_clicks_on_My_Accounts_Page()"
});
formatter.result({
  "duration": 1320763200,
  "status": "passed"
});
formatter.match({
  "location": "ir_tc02.the_user_fills_Invalid_username_and_Password()"
});
formatter.result({
  "duration": 5776695500,
  "status": "passed"
});
formatter.match({
  "location": "ir_tc02.i_validate_the_outcomes_of_invalid_Register()"
});
formatter.result({
  "duration": 7430421100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "valid Login",
  "description": "",
  "id": "practice-automation-website;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "the user launch the application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user clicks on My Accounts",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the user Enters the valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate the outcomes of valid login",
  "keyword": "Then "
});
formatter.match({
  "location": "vl_tc03.the_user_launch_the_application_in_browser()"
});
formatter.result({
  "duration": 24000622800,
  "status": "passed"
});
formatter.match({
  "location": "vl_tc03.the_user_clicks_on_My_Accounts()"
});
formatter.result({
  "duration": 1599728500,
  "status": "passed"
});
formatter.match({
  "location": "vl_tc03.the_user_Enters_the_valid_username_and_password()"
});
formatter.result({
  "duration": 7488336700,
  "status": "passed"
});
formatter.match({
  "location": "vl_tc03.click_on_signin_button()"
});
formatter.result({
  "duration": 11920052500,
  "status": "passed"
});
formatter.match({
  "location": "vl_tc03.i_validate_the_outcomes_of_valid_login()"
});
formatter.result({
  "duration": 10110896200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Invalid Login",
  "description": "",
  "id": "practice-automation-website;invalid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC_04"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the user launch the app in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user clicks on My Accounts",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the user Enters the Invalid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I validate the outcomes of invalid login",
  "keyword": "Then "
});
formatter.match({
  "location": "il_tc04.the_user_launch_the_app_in_browser()"
});
formatter.result({
  "duration": 20178515200,
  "status": "passed"
});
formatter.match({
  "location": "il_tc04.user_clicks_on_My_Accounts()"
});
formatter.result({
  "duration": 1268258900,
  "status": "passed"
});
formatter.match({
  "location": "il_tc04.the_user_Enters_the_Invalid_username_and_password()"
});
formatter.result({
  "duration": 4586320100,
  "status": "passed"
});
formatter.match({
  "location": "il_tc04.click_on_the_signin_button()"
});
formatter.result({
  "duration": 1817796500,
  "status": "passed"
});
formatter.match({
  "location": "il_tc04.i_validate_the_outcomes_of_invalid_login()"
});
formatter.result({
  "duration": 17792340700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Adding to Basket",
  "description": "",
  "id": "practice-automation-website;adding-to-basket",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user launches the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "the  user clicks on Shop",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the user clicks on add to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user clicks items",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I validate the outcomes of Adding to Basket",
  "keyword": "Then "
});
formatter.match({
  "location": "addcartTC_05.user_launches_the_application_in_the_browser()"
});
formatter.result({
  "duration": 21953719800,
  "status": "passed"
});
formatter.match({
  "location": "addcartTC_05.the_user_clicks_on_Shop()"
});
formatter.result({
  "duration": 1636301000,
  "status": "passed"
});
formatter.match({
  "location": "addcartTC_05.the_user_clicks_on_add_to_basket()"
});
formatter.result({
  "duration": 11209786800,
  "status": "passed"
});
formatter.match({
  "location": "addcartTC_05.user_clicks_items()"
});
formatter.result({
  "duration": 6838969600,
  "status": "passed"
});
formatter.match({
  "location": "addcartTC_05.I_validate_the_outcomes_of_Adding_to_Basket()"
});
formatter.result({
  "duration": 6124579200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Read more about a book",
  "description": "",
  "id": "practice-automation-website;read-more-about-a-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@TC_06"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the user launches the app in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "user clicks on Shop",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "user clicks Read more",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I validate the outcomes of Read more",
  "keyword": "Then "
});
formatter.match({
  "location": "ReadmoreTc_06.the_user_launches_the_app_in_browser()"
});
formatter.result({
  "duration": 21602650800,
  "status": "passed"
});
formatter.match({
  "location": "ReadmoreTc_06.user_clicks_on_Shop()"
});
formatter.result({
  "duration": 1282285800,
  "status": "passed"
});
formatter.match({
  "location": "ReadmoreTc_06.user_clicks_Read_more()"
});
formatter.result({
  "duration": 16161386400,
  "status": "passed"
});
formatter.match({
  "location": "ReadmoreTc_06.i_validate_the_outcomes_of_Read_more()"
});
formatter.result({
  "duration": 10375591100,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "To Retrive any data from Cruises table",
  "description": "",
  "id": "practice-automation-website;to-retrive-any-data-from-cruises-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@TC_07"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "the user launches the application in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "click DemoSite",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user fills all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Clicks Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I validate the results",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoTc_07.the_user_launches_the_application_in_browser()"
});
formatter.result({
  "duration": 19553266900,
  "status": "passed"
});
formatter.match({
  "location": "DemoTc_07.click_DemoSite()"
});
formatter.result({
  "duration": 1677601500,
  "status": "passed"
});
formatter.match({
  "location": "DemoTc_07.user_fills_all_the_details()"
});
formatter.result({
  "duration": 12962548100,
  "status": "passed"
});
formatter.match({
  "location": "DemoTc_07.clicks_Register_button()"
});
formatter.result({
  "duration": 5277727700,
  "status": "passed"
});
formatter.match({
  "location": "DemoTc_07.i_validate_the_results()"
});
formatter.result({
  "duration": 12047985300,
  "status": "passed"
});
});