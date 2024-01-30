describe('Newsletter Subscribe Form', () => {
  beforeEach (() => {
    cy.visit("http://localhost:3000")
  })

  it('allows users to subscribe to the email list', () => {
    cy.getByData("email-input").type("ron@mail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("ron@mail.com")
    
  })

  it('does not allow user to input invalid email address ', () => {
    cy.getByData('email-input').type("ron")
    cy.getByData('submit-button').click()
    cy.getByData("success-message").should("not.exist")
  })

  it('does not allow user to input already subscribed email addresses', () => {
    cy.getByData('email-input').type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should("exist").contains("already exists. Please use a different email address")
    
  })
})