import { Page } from '@playwright/test'
import BasePage from './BasePage'
import config from '../utils/config'

class HomePage extends BasePage {

  //constructor
  constructor(page: Page){
    super(page)
  }

  //selectors
  private searchBar = '[placeholder="Search"]'
   
  async navigate(){
    await super.navigate(`${config.baseUrl}/dashboard`)
  }
  async search(searchbar: string){
    await this.page.getByRole('textbox', { name: 'Search' }).fill(searchbar)
    await this.page.getByRole('textbox', { name: 'Search' }).press('Enter') // ← no button needed
}
  
}

export default HomePage