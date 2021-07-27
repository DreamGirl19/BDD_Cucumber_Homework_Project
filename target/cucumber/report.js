$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankAndCashLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash new account functionality validation",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should able to see the add new account",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User fill up the form entering accountTittle as \"\u003caccountTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill up the form entering description as \"\u003cdescription2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User fill up the form entering balance as \"\u003cbalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User fill up the form entering accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User fill up the form entering contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User fill up the form entering phone as \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User fill up the form entering internetBankingURL as \"\u003cinternetBankingUrl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate new account created",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description2",
        "balance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingUrl"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Dream Girl01",
        "Saving Account",
        "40000",
        "SB354278654",
        "Dream G",
        "212 321 4406",
        "/www.techfios.com/billing/?ng\u003dlogin/"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2700141900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1099737700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should able to see the add new account",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User fill up the form entering accountTittle as \"Dream Girl01\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill up the form entering description as \"Saving Account\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User fill up the form entering balance as \"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User fill up the form entering accountNumber as \"SB354278654\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User fill up the form entering contactPerson as \"Dream G\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User fill up the form entering phone as \"212 321 4406\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User fill up the form entering internetBankingURL as \"/www.techfios.com/billing/?ng\u003dlogin/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate new account created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 2203866000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 2087335800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1398331300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_see_the_dashboard()"
});
formatter.result({
  "duration": 4019746500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 105183600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_account()"
});
formatter.result({
  "duration": 4645485600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_able_to_see_the_add_new_account()"
});
formatter.result({
  "duration": 4007789800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dream Girl01",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_accountTittle_as(String)"
});
formatter.result({
  "duration": 2160310900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving Account",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_description_as(String)"
});
formatter.result({
  "duration": 2132345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_balance_as(String)"
});
formatter.result({
  "duration": 2122782900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SB354278654",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_accountNumber_as(String)"
});
formatter.result({
  "duration": 2145983900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dream G",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_contactPerson_as(String)"
});
formatter.result({
  "duration": 2128845800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "212 321 4406",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_phone_as(String)"
});
formatter.result({
  "duration": 2139844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/www.techfios.com/billing/?ng\u003dlogin/",
      "offset": 54
    }
  ],
  "location": "LoginStepDefinition.user_fill_up_the_form_entering_internetBankingURL_as(String)"
});
formatter.result({
  "duration": 2178420100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 1105801500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_new_account_created()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.after({
  "duration": 770870800,
  "status": "passed"
});
});