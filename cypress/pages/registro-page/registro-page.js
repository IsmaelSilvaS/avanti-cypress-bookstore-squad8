//Cypress.Commands.add('typeFirstName', (firstName) => {
 //   cy.get('#firstname').type(firstName);
//});
Cypress.Commands.add('typeFirstName', (firstName) => {
    cy.get('#firstname').type(firstName, { parseSpecialCharSequences: false });
});

Cypress.Commands.add('typeLastName', (lastName) => {
     cy.get('#lastname').type(lastName);
});

Cypress.Commands.add('typeUserName', (userName) => {
    cy.get('#userName').type(userName);
});

Cypress.Commands.add('typePassword', (password) => {
    cy.get('#password').type(password);
});

Cypress.Commands.add('clickRegister', () => {
   cy.get('#register').click();
});

Cypress.Commands.add('prepareAlertStub', () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('windowAlert');
  });
});

Cypress.Commands.add('assertAccountCreated', () => {
  cy.get('@windowAlert')
    .should('have.been.calledOnce')
    .and('have.been.calledWith', 'User Registered Successfully.');
});


Cypress.Commands.add('assertMessageUserExist', () => {
    cy.get('#name').contains('User exists!').should('be.visible');
});

Cypress.Commands.add('assertFirstNameRequired', () => {
    cy.get('#firstname').should('have.class', 'is-invalid');
});

Cypress.Commands.add('assertLastNameRequired', () => {
    cy.get('#lastname').should('have.class', 'is-invalid');
});

Cypress.Commands.add('assertUserNameRequired', () => {
    cy.get('#userName').should('have.class', 'is-invalid');
});

Cypress.Commands.add('assertPasswordRequired', () => {
    cy.get('#password').should('have.class', 'is-invalid');
}); 

Cypress.Commands.add('assertFirstNameInvalid', () => {
    cy.get('#firstname').should('have.class', 'is-invalid');
});

Cypress.Commands.add('assertLastNameInvalid', () => {
    cy.get('#lastname').should('have.class', 'is-invalid');
});

Cypress.Commands.add('assertPasswordInvalid', () => {
    cy.get('#name').contains("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.').should('be.visible");
});

