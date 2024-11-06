/// <reference types = 'cypress'/>


describe('Sauce Demo Product Detail Page', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/'); 
      cy.get('input#user-name').type('standard_user'); 
      cy.get('input#password').type('secret_sauce');  
      cy.get('input#login-button').click();           
      cy.url().should('include', '/inventory.html'); 
    });
  
    it('should redirect to the product detail page when a product is clicked', () => {
  
      cy.contains('Sauce Labs Backpack').click(); 
  
      cy.url().should('include', '/inventory-item.html'); 
  
      cy.get('.product_label').should('contain', 'Sauce Labs Backpack'); 
    });
  
  });
  