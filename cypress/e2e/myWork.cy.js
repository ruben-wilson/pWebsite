describe("my Work Page", ()=>{
  beforeEach(()=>{
    cy.visit('/myWork')
  })

  it('contains cards and title', ()=>{
    cy.contains('My recent projects...')
    cy.get('#cards-myWork').children().should('have.length', 5)
  })
})