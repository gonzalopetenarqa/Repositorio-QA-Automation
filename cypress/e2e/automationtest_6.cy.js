beforeEach('iniciar sesion',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("[placeholder='Username']").should("be.enabled").type("Admin")
    cy.get("[placeholder='Password']").should("be.enabled").type("admin123")
    cy.get(".oxd-button").should("be.visible").click()
})

describe("",()=>{
    it("validar datos",()=>{
        cy.get(".oxd-icon")
    })
}) asdasdasd