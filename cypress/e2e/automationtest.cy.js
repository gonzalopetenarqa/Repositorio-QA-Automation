beforeEach(()=>{
    cy.visit("http://www.automationpractice.pl/index.php")
});

describe('Validación de búsqueda de productos',()=>{
    it('Validación de búsqueda de productos en una tienda online',()=>{
        cy.get("#search_query_top").type('dress').should('be.visible');
        cy.get('[name="submit_search"]').click()
        cy.get(".lighter").contains("dress")
        cy.get(".replace-2x").should('be.visible')
    });

    it('Validacion de resultado no encontrado',()=>{
        cy.get("#search_query_top").type('shorts').should('be.visible')
        cy.get('[name="submit_search"]').click()
        cy.get(".heading-counter").contains("0 results have been found.")
        cy.get(".alert").contains('No results were found for your search "shorts"')
    })

    it('Validacion de resultado campo vacio',()=>{
        cy.get("#search_query_top")
        cy.get('[name="submit_search"]').click()
        cy.get(".heading-counter").contains("0 results have been found.")
        cy.get(".alert").contains('Please enter a search keyword')
    })
    

    it('Validar boton de busqueda',()=>{
        cy.get("#search_query_top").type('shoes').should('be.visible');
        cy.get(".btn").should('be.visible').and('not.be.disabled')
        cy.get(".img-responsive").should('be.visible');
        })
    })

    