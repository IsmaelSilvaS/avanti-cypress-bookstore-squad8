// Import commands.js using ES2015 syntax:
import './commands'


// Erros não tratados
Cypress.on("uncaught:exception", (err) => {
  return false;
});
 