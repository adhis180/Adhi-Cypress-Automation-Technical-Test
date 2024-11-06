/// <reference types = 'cypress'/>

describe('Sauce Demo Product Page', () => {

  
     beforeEach(() => {
        cy.visit('https://saucedemo.com/')
    });
  
    it('should successfully log in with valid credentials and be redirected to the products page', () => {
     
      cy.get('input#user-name') 
        .type('Tes');
      
      cy.get('input#password')
        .type('tes'); 
        cy.get('input#login-button').click();
        cy.url().should('include', '/invetory.html')
      
    cy.get('.inventory_item').should('have.length.greaterThan', 0); 
    });
  });
