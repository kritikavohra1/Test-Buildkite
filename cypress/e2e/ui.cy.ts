/// <reference types="cypress"/>
import {uiPage} from "../page-objects/ui-page"

describe("Test page object model sample demo", () => {

    beforeEach(()=>{

        cy.visit('https://way2automation.com/way2auto_jquery/index.php')
        cy.url().should('include', 'way2auto_jquery')
    })

    it('Enter details on page test', ()=>{
        uiPage.enterDetails()
        cy.get('test')
    })
})
