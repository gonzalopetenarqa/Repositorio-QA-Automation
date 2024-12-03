beforeEach('',()=>{
    cy.visit("https://saucedemo.com/")
})
describe('Validacion de flujo de compra en la plataforma de Sauce Labs',()=>{
    it('Validar login',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
    })

    it('Validar filtro',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
        cy.get(".product_sort_container").select("za")
        cy.contains('Name (Z to A')
        cy.get(".inventory_item_name").contains("Test.allTheThings() T-Shirt (Red)").and('be.visible')
    })

    it('Validar agregar producto correctamente',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
        cy.get(".product_sort_container").select("Price (low to high)")
        cy.contains("Price (low to high)")
        cy.get(".inventory_item_img").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").contains("Add to cart").click()
        cy.contains("Remove")
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get(".cart_desc_label").contains("Description")
    })

    it('Validar completar datos de pago',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
        cy.get(".product_sort_container").select("Price (low to high)")
        cy.contains("Price (low to high)")
        cy.get(".inventory_item_img").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").contains("Add to cart").click()
        cy.contains("Remove")
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get(".cart_desc_label").contains("Description")
        cy.get("#checkout").contains("Checkout").click()
        cy.get("input[placeholder='First Name']").type("Emanuel").should("be.enabled")
        cy.get("input[placeholder='Last Name']").type("Petenar").should("be.visible")
        cy.get("input[placeholder='Zip/Postal Code']").type("1425").should('have.value', '1425')

        
    })

    it('Validar confirmacion de pago exitoso',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
        cy.get(".product_sort_container").select("Price (low to high)")
        cy.contains("Price (low to high)")
        cy.get(".inventory_item_img").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").contains("Add to cart").click()
        cy.contains("Remove")
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get(".cart_desc_label").contains("Description")
        cy.get("#checkout").contains("Checkout").click()
        cy.get("input[placeholder='First Name']").type("Emanuel").should("be.enabled")
        cy.get("input[placeholder='Last Name']").type("Petenar").should("be.visible")
        cy.get("input[placeholder='Zip/Postal Code']").type("1425").should('have.value', '1425')
        cy.get("[data-test='continue']").should("be.visible").click()
        cy.get(".summary_tax_label").should("be.visible")
        cy.get("[data-test='finish']").should("be.enabled").click()
        cy.get(".complete-header").contains("Thank you for your order!")

        
    })

    it('Validar no completar datos de pago',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
        cy.get(".product_sort_container").select("Price (low to high)")
        cy.contains("Price (low to high)")
        cy.get(".inventory_item_img").should("be.visible")
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").contains("Add to cart").click()
        cy.contains("Remove")
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get(".cart_desc_label").contains("Description")
        cy.get("#checkout").contains("Checkout").click()
        cy.get("[data-test='continue']").should("be.visible").click()
        cy.get("[data-test='error']").contains("Error: First Name is required")
        
    })

    it('Validar mensaje de error de checkout al no seleccionar un producto',()=>{
        //usuario
        cy.get("#user-name").type('standard_user').should('exist').and('be.visible');
        //contraseña
        cy.get("#password").type('secret_sauce');
        cy.contains('secret_sauce');
        //boton de login
        cy.get(".submit-button").contains("Login").click()
        cy.get(".product_sort_container").select("Price (low to high)")
        cy.contains("Price (low to high)")
        cy.get("#shopping_cart_container").should("be.visible").click()
        cy.get(".cart_desc_label").contains("Description")
        cy.get("#checkout").contains("Checkout").click()
        cy.get("input[placeholder='First Name']").type("Emanuel").should("be.enabled")
        cy.get("input[placeholder='Last Name']").type("Petenar").should("be.visible")
        cy.get("input[placeholder='Zip/Postal Code']").type("1425").should('have.value', '1425')
        cy.get("[data-test='continue']").should("be.visible").click()
        cy.get(".summary_tax_label").should("be.visible")
        cy.get("[data-test='finish']").should("be.enabled").click()
        cy.get(".complete-header").contains("Thank you for your order!")
        
    })

})

