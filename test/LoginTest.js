// filename: test/LoginTest.js
//const { Builder } = require('selenium-webdriver') 
// const path = require('path')
const assert = require('assert')
const LoginPage = require('../pages/LoginPage')
require('./spec_helper')


//describe is a method from Mocha
describe('Login', function () {
    let login

    beforeEach(async function () {
        login = new LoginPage(this.driver)
        await login.load()
    })

    it('with valid credentials @shallow', async function () {
        await login.authenticate('tomsmith', 'SuperSecretPassword!')
        assert(await login.successMessagePresent(), 'Success message not displayed')
    })

    it('with invalid credentials @deep', async function () {
        await login.authenticate('tomsmith', 'SuperSecretPassword!')
        assert(!(await login.failureMessagePresent()), 'Failure message displayed')
    })

})