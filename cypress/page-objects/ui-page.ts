
const locator = {
    NAME: "#load_box > #load_form > :nth-child(5) > input",
    PHONE: '#load_box > #load_form > :nth-child(6) > input'
}

class UIPage {

    enterDetails(){

        cy.cssType(locator.NAME, "John")
        cy.cssType(locator.PHONE, "1234567889")
    }

}

export let uiPage= new UIPage()