Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
beforeEach(() => {
    cy.visit("https://demoqa.com/droppable");
});
describe('',()=>{

    it('Validar boton drag me y alojarlo en drop here',()=>{
        cy.get("#draggable").should("be.visible").drag(".drop-box",{force:true});
        cy.get(".drop-box").contains("Dropped!");
});
    it('Validar boton aceptable en accept',()=>{
        cy.get("#droppableExample-tab-accept").should("be.visible").click()
        cy.get("#acceptable").should("be.visible").drag(".drop-box",{force:true});
        cy.get(".drop-box")

    });

    it("Validar prevent propagation - outer drop greedy",()=>{
        cy.get("#droppableExample-tab-preventPropogation").should("be.visible").click()
        cy.get(".drag-box").contains("Drag Me").drag("#notGreedyInnerDropBox",{force:true})
        cy.get("#notGreedyInnerDropBox").contains("Dropped!")
    })

    it("Validar prevent propagation - inner drop greedy",()=>{
        cy.get("#droppableExample-tab-preventPropogation").should("be.visible").click()
        cy.get(".drag-box").contains("Drag Me").drag(".drop-box",{force:true})
        cy.get(".drop-box").should("be.visible")
    })

    it("Validar prevent propagation - outer drop not greedy",()=>{
        cy.get("#droppableExample-tab-preventPropogation").should("be.visible").click()
        cy.get(".drag-box").contains("Drag Me").drag("#greedyDropBox",{force:true})
        cy.get("#greedyDropBox").contains("Dropped!")
    })

    it("Validar prevent propagation - inner drop not greedy",()=>{
        cy.get("#droppableExample-tab-preventPropogation").should("be.visible").click()
        cy.get(".drag-box").contains("Drag Me").drag("#greedyDropBoxInner",{force:true})
        cy.get("#greedyDropBoxInner").should("be.visible")
    })

    it("Validar revert draggable will revert",()=>{
        cy.get("#droppableExample-tab-revertable").should("be.visible").click()
        cy.get("#revertable").contains("Will Revert").drag("#droppable",{force:true})
        cy.get("#droppable").contains("Drop here")
    })

    it("Validar revert draggable not revert",()=>{
        cy.get("#droppableExample-tab-revertable").should("be.visible").click()
        cy.get("#notRevertable").contains("Not Revert").drag("#droppable",{force:true})
        cy.get("#droppable").contains("Drop here")
    })


});
