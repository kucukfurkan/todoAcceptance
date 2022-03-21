const { When, Then, Given, BeforeAll, AfterAll } = require("cucumber");
const { expect, assert } = require('chai')
const { By } = require("selenium-webdriver")
const webdriver = require('selenium-webdriver');

var { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

BeforeAll(function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    driver.get('http://localhost:8080/')
})

AfterAll(async function () {
    await setDefaultTimeout(60 * 1000);
    driver.quit();
})

Given('Empty ToDo list', async function () {
 return true;
});

When(' I write {string} to the text box and click to the add button', async function (text) {
  return true;
});

Then('I should see {string} in the TODO list', async function (text) {
   return true;
});

