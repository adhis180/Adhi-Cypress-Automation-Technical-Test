/// <reference types = 'cypress'/>

describe('Sauce Demo Product Page', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/'); 
      });

    it('should display a list of products with correct names and descriptions', () => {
  
        cy.get('input#user-name').type('standard_user'); 
        cy.get('input#password').type('secret_sauce');   
        cy.get('input#login-button').click();         
    
        cy.url().should('include', '/inventory.html'); 
        cy.get('.inventory_list').should('be.visible');
    
        cy.get('.inventory_item').each(($product) => {
          cy.wrap($product).find('.inventory_item_name').should('not.be.empty');
    
          cy.wrap($product).find('.inventory_item_desc').should('not.be.empty');
        });
      });
  
    });
