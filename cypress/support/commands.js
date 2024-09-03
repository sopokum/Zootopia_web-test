// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('register', (user) => {
    cy.get(':nth-child(1) > .ismile').type(user.fullName);
    cy.get(':nth-child(2) > .imail').type(user.email);
    cy.get('.ipir').type(user.idNumber);
    cy.get(':nth-child(4) > .itel').type(user.phoneNumber);
    cy.get(':nth-child(5) > .ipass').type(user.password);
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(user.confirmPassword);
    cy.get('.etx > svg > #Group_15422').click()
    cy.get('.regsub').click();
  });
Cypress.Commands.add('registerInvalid', (user) => {
  cy.get(':nth-child(2) > .imail').type(user.email);
  cy.get('.ipir').type(user.idNumber);
  cy.get(':nth-child(4) > .itel').type(user.phoneNumber);
  cy.get(':nth-child(5) > .ipass').type(user.password);
  cy.get('.reg-form-left > :nth-child(6) > .ipass').type(user.confirmPassword);
  cy.get('.etx > svg > #Group_15422').click()
  cy.get('.regsub').click();
});
  

Cypress.Commands.add('login', (credentials) => {
  cy.get('.menu-pop > .rprof').click()
  cy.get(':nth-child(5) > .imail').type(credentials.email);
  cy.get('.ipass').type(credentials.password);
  cy.get('.avtorization > .input-shablon > .form-button').click();
});
