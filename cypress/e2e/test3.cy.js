describe('User Authorization with Valid Credentials', () => {
  beforeEach(() => {
    cy.fixture('userCredentials.json').as('credentials');
  });

  it('should log in with valid credentials', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka');
    cy.login(this.credentials);

    cy.get('.logo > img')
  });
});
