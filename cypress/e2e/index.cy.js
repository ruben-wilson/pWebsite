describe("Home page", ()=>{
  it("loads home page and Download CV button allows user to access CV", ()=>{
    cy.visit('/');
    cy.url().should('contains', '/files/CV.pdf');
  })
})