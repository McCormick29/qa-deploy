import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Add X to upper left corner', async () => {

    let UpperLSqr = await (await driver).findElement(By.id('cell-0'));
    await UpperLSqr.click();
    
});

test('Add X to upper right corner', async () => {

    let UpperLSqr = await (await driver).findElement(By.id('cell-2'));
    await UpperLSqr.click();
    
});

test('Add X to bottom right corner', async () => {

    let UpperLSqr = await (await driver).findElement(By.id('cell-8'));
    await UpperLSqr.click();
    
});