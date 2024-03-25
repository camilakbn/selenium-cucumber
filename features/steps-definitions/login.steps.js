const {Given, Then, When} = require('@cucumber/cucumber');
const {initDriver} = require('../../init');
const {By} = require('selenium-webdriver');

let driver = null;

//LOGIN INVÁLIDO

Given('Estou tentando realizar login no sistema', {timeout: 15 * 1000}, async () => {
    driver = initDriver();
    await driver.get("http://publicazo.insprak.com//")
    await driver.findElement(By.linkText("Entrar")).click()
});

When('Passo um usuário e senha inválidos', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.id("user_email")).sendKeys("cccc@cccc")
    await driver.findElement(By.id("user_password")).sendKeys("111111")
    await driver.findElement(By.name("commit")).click()
});

Then('O sistema me notifca que as credencias não são válidas', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.css(".toast-message")).click()
    await driver.quit()
    driver = null;
});

//LOGIN VÁLIDO

When('Passo um usuário valido', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.id("user_email")).sendKeys("camila12345@gmail.com")
    await driver.findElement(By.id("user_password")).sendKeys("123456")
    await driver.findElement(By.name("commit")).click()
    });

Then('O sistema me autentica com sucesso', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.css(".toast-message")).click()
    await driver.quit()
});