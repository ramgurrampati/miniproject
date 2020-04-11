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
  "duration": 18732517600,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.the_user_open_My_Accounts_Page()"
});
formatter.result({
  "duration": 1155447000,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.the_user_fills_valid_username_and_Password()"
});
formatter.result({
  "duration": 4067583100,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.click_on_the_Register_button()"
});
formatter.result({
  "duration": 5150440900,
  "status": "passed"
});
formatter.match({
  "location": "vr_tc01.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 1205940100,
  "status": "passed"
});
});