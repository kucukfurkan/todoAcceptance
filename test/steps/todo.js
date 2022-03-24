const { When, Then, Given, BeforeAll, AfterAll } = require("cucumber");
const { expect, assert } = require('chai')
const { By } = require("selenium-webdriver")
const webdriver = require('selenium-webdriver');

var { setDefaultTimeout } = require('@cucumber/cucumber');

config.capabilities = ['firefox']


setDefaultTimeout(60 * 1000);

BeforeAll(function () {
    driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();
    driver.get('https://todo-vue-2cac8.web.app/')
})

AfterAll(async function () {
    await setDefaultTimeout(60 * 1000);
    driver.quit();
})

Given('There is a text-box to write todo', async function () {
    let textBox = driver.findElement(By.id('inputPlace')).isDisplayed()
});

When('I write {string} to the text box and click to the add button', async function (text) {
    let addbtn = await driver.findElement(By.id('buttonAdd'));
    await driver.findElement(By.id('inputPlace')).sendKeys(text);
    addbtn.click()
});

Then('I should see {string} in the TODO list', async function (text) {
    let textarea = await driver.findElement(By.xpath("/html/body/div/div/div/div[2]/div/div/p")).getText();
    await assert.equal(text, textarea);
});

