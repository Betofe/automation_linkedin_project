//using OrangeHRM Demo instead to test for linkedin because of linkedin bolt check in or hard auto log in
import {Page} from '@playwright/test'

class BasePage{
 protected page: Page
 
 constructor(page:Page){
    this.page = page
 }

 async navigate(url: string){
    await this.page.goto(url)
    await this.page.waitForLoadState('domcontentloaded')
 }

 async getTitle():Promise<string>{
    return await this.page.title()
 }
}
export default BasePage