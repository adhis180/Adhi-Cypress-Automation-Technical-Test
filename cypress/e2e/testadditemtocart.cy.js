
/// <reference types = 'cypress'/>

describe('Sauce Demo Add to Cart', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input#user-name').type('standard_user'); 
    cy.get('input#password').type('secret_sauce');  
    cy.get('input#login-button').click();            
    cy.url().should('include', '/inventory.html'); 
  });

  it('should add a product to the cart and update the UI correctly', () => {

    cy.get('.inventory_list').should('be.visible'); 

    cy.contains('Sauce Labs Backpack') 
      .parents('.inventory_item') 
      .find('button') 
      .click(); 

   
    cy.get('.shopping_cart_badge').should('contain', '1'); 

    cy.contains('Sauce Labs Backpack') 
      .parents('.inventory_item') 
      .find('button') 
      .should('contain', 'Remove'); 

  });

});
