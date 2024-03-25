const webdriver = require('selenium-webdriver');

var chrome = require('selenium-webdriver/chrome');

var options = new chrome.Options()
options.addArguments("-headless")
options.addArguments("start-maximized");

function initDriver(){
  return new webdriver.Builder()
  .forBrowser('chrome')
  .withCapabilities(webdriver.Capabilities.chrome())
  .setChromeOptions(options)
  .build();
}

module.exports = {initDriver};