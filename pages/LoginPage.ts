//using OrangeHRM Demo instead to test for linkedin because of linkedin bolt check in or hard auto log in
import {Page} from '@playwright/test'
import BasePage from './BasePage'
import config from '../utils/config'

class LoginPage extends BasePage{
 //selectors
 private usernameField = '[name="username"]';
 private passwordField ='[name="password"]';
 private signInButton = 'button[type="submit"]';
 private errorMessage ='.oxd-alert-content-text';

 constructor(page:Page){
    super(page) //calling BasePage constructor
 }

 async navigate(){
    await super.navigate(`${config.baseUrl}/login`)
 }

 async login(username: string, password: string){
    await this.page.fill(this.usernameField ,username)
    await this.page.fill(this.passwordField , password)
    await this.page.click(this.signInButton)
 }

 async getErrorMessage(): Promise<string>{
    const error = this.page.locator(this.errorMessage);
    await error.waitFor({ timeout: 10000 });
    return (await error.textContent()) ?? ''; }
}

export default LoginPage