describe('Login no Sauce Labs', () => {

    beforeEach(() => {
        cy.restoreLocalStorage();
        Cypress.Cookies.preserveOnce('session_id', 'session-username')
    });

    afterEach(() => {
        cy.saveLocalStorage();
    })
    
    it('Realiza login', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    })

    it('Adiciona produtos ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_link').click();
    })

    it('Finaliza o checkout', () => {
        cy.get('[data-test="checkout"]').click();
    })

    it('Preencha os dados do cliente', () => {
        cy.get('[data-test="firstName"]').type('Jiselli');
        cy.get('[data-test="lastName"]').type('de Luca');
        cy.get('[data-test="postalCode"]').type('78700000');
        cy.get('[data-test="continue"]').click();
    })

    it('Finaliza compra', () => {
        cy.get('[data-test="finish"]').click();
    })

    it('Verifica se a compra foi finalizada com sucesso', () => {
        cy.get('.complete-header').should('be.visible');
    })
  })