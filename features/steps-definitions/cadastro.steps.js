const {Given, Then, When} = require('@cucumber/cucumber');
const {initDriver, killDriver} = require('../../init');
const {By} = require('selenium-webdriver');

let driver = null;

Given('o usuário acessa o menu de Cadastro', {timeout: 15 * 1000}, async () => {
  driver = initDriver();
  await driver.get("http://publicazo.insprak.com/")
  await driver.findElement(By.linkText("Cadastre-se")).click()
});

When('ele preenche os campos nome, email, senha, confirmação de senha e confirma', {timeout: 15 * 1000}, async () => {
    await driver.findElement(By.id("user_fullname")).click()
    await driver.findElement(By.id("user_fullname")).sendKeys("Camila Nascimento")
    await driver.findElement(By.id("user_email")).sendKeys("camila@mail.com")
    await driver.findElement(By.id("user_password")).sendKeys("123456")
    await driver.findElement(By.id("user_password_confirmation")).sendKeys("123456")
    await driver.findElement(By.name("commit")).click()
});

Then('o sistema exibe uma mensagem de sucesso', {timeout: 15 * 1000}, async () => {
  await driver.findElement(By.css(".toast-message")).click()
  await driver.quit()
  driver = null;
})