describe('User Registration with Invalid Data', () => {
  beforeEach(() => {
    cy.fixture('invalidUser.json').as('InvalidUserData');
  });

  it('should register a new user with invalid data', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register');
    cy.registerInvalid(this.InvalidUserData);
    
    cy.url().should('include', '/index');
    cy.get('.bg-transparent').click()
  });
});
