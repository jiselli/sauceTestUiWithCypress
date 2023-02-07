describe('Login no Sauce Labs', () => {
  it('Realiza login', () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  })
   
  it('Acessa a página onde lista os produtos', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible')
    cy.get('.shopping_cart_link').should('be.visible')
  })
})