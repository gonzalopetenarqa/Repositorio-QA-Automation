Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que Cypress falle el test
    return false;
  });

beforeEach('',()=>{
    //Precondicion: El usuario debe encontrarse dentro de esta Url
    cy.visit('https://demo.opencart.com/', { failOnStatusCode: false });

});
  

describe('Búsqueda de productos en la tienda en línea',()=>{
    //Precondicion2: Como usuario dentro de la pagina
    it('Validar busqueda exitosa del producto',()=>{
    
    //Quiero buscar "imac"
        cy.get(".form-control").should("be.visible").type("imac {enter}")
    //Para encontrar el producto deseado
        cy.get(".img-fluid").should("be.visible")
    //Y poder añadir al carro
        cy.get('.image > a > .img-fluid').click()
        cy.get(".btn").contains("Add to Cart")
    });

    it('Validar busqueda sin exito',()=>{
    //Quiero buscar "pc"
        cy.get(".form-control").should("be.visible").type("pc {enter}")
    //Para validar el resultado del producto no encontrado
        cy.get("#content").contains("Products meeting the search criteria")
    })
    
    it("Validar boton de busqueda exitosa",()=>{
    //Quiero buscar "iphone"
        cy.get(".form-control").should("be.visible").type("iphone")
    //Para validar el boton de busqueda exitosamente
        
        cy.get('.image > a > .img-fluid').should("be.visible")
    })

    it("Validar lista de productos relacionados",()=>{
    //Quiero buscar "mac"
        cy.get(".form-control").should("be.visible").type("mac")
        cy.get(".btn").should("be.enabled")
        cy.get(".btn").dblclick()
    //Para Validar la lista de productos exitosamente
        cy.get("#input-category").select("18").contains("Laptops & Notebooks")
        cy.get("#button-search").should("be.enabled").click()
    //Y poder visibilizar los productos mostrados por el filtro
        cy.get("#product-list").should("be.visible")
    })
});