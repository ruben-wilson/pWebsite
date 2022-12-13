describe("Home page", ()=>{
  beforeEach(()=>{
    cy.visit("/")
  })

  it("loads home page and all relevant text is present", ()=>{
    cy.contains("Software")
    cy.contains("Developer")
    cy.contains("Ruben Wilson")
    cy.contains("Contact")
    cy.contains("About Me")
    cy.contains("My Work")
    cy.contains("Hire Me")
    cy.get("#cvButton > a").contains("Download My CV")
  })

  it("when download cv button is clicked it redirects to cv", ()=>{
    cy.get('#cvButton > a').should("have.attr", "href", "/files/CV.pdf");
    
  })

  it('when "hire me" button is clicked redirects to linkedin profile',()=>{
    cy.get('.mr-2 > a').should('have.attr', 'href', "https://www.linkedin.com/in/ruben-wilson-6a774a254/")
  })

})