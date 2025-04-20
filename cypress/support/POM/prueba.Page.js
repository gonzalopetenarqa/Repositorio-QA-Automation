class Login{
    get = {
        page:()=> cy.visit('https://www.google.com.ar/'),
        search:()=> cy.get(".gLFyf"),
        validateOne: ()=> cy.get(".YmvwI")
    }
    loginPage(){
        this.get.page()
    }
    searchPage(){
        this.get.search().type('CPU{Enter}')
    }

    validatePage(){
        this.get.validateOne().contains('Todo')
    }
}
export const login = new Login;
