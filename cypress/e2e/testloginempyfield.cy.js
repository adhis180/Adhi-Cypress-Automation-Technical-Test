/// <reference types = 'cypress'/>

describe('Sauce Demo Login - Empty Fields', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
    });
  
    it('should not allow login when either username or password is empty', () => {
    
      cy.get('input#user-name').clear();  
      cy.get('input#password').type('secret_sauce');  
      cy.get('input#login-button').click();  
      
      cy.get('.error-message-container').should('be.visible');  
      cy.get('.error-message-container').should('have.text');
      cy.get('input#user-name').type('standard_user');  
      cy.get('input#password').clear();  
      cy.get('input#login-button').click();  
      
      cy.get('.error-message-container').should('be.visible'); 
      cy.get('.error-message-container').should('have.text', 'Epic sadface: Password is required');
  
      cy.get('.error-message-container').should('have.class', 'error'); 
    });
  });
  