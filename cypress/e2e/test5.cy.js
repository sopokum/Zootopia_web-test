describe('Remove Item from Shopping Cart', () => {
  beforeEach(() => {
    cy.fixture('userCredentials.json').as('credentials');
  });

  it('should remove an item from the shopping cart', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.login(this.credentials);
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    cy.get('.clear > a').click()
    cy.get('.empty > p').should("be.visible")
  });
});
