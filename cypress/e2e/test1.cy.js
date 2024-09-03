describe('User Registration with Valid Data', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('userData');
  });

  it('should register a new user with valid data', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka/register');
    cy.register(this.userData);
    
    cy.url().should('include', '/index');
    cy.get('.bg-transparent').click()
  });
});
