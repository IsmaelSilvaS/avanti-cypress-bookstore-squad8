Cypress.Commands.add('typeFirstName', (firstName) => {
    cy.get('#firstname').type(firstName);
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

Cypress.Commands.add('assertAccountCreated', () => {
cy.on('window:alert', (mensagem) => {
    expect(mensagem).to.equal('User Registered Successfully.');
  });
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


