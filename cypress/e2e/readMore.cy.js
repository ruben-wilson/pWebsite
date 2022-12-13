describe("aboutMe", ()=>{
  beforeEach(() => {
    cy.visit("/")
    cy.get('#aboutMe').click()
  })

  it("contains correct text and image", ()=>{
    cy.url().should("include", '/aboutMe')
    cy.contains("A twenty-one-year-old developer who is highly enthusiastic and driven.")
  })

  it('readMore drop down works', ()=>{
    cy.get('.collapse').click()
    cy.get('#dropDown1').should('be.visible', true)
  })
})