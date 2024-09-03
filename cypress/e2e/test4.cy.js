describe('Add Item to Shopping Cart', () => {
  beforeEach(() => {
    cy.fixture('userCredentials.json').as('credentials');

    
  });

  it('should add an item to the shopping cart', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.login(this.credentials);
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
  });
});
