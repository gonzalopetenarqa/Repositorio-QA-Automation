// cypress/support/index.js

import 'cypress-plugin-api';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Cypress.Commands.add('api', (options) => {
  return cy.request(options).then((response) => {
    return response;
  });
});
