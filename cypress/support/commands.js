Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('/login');
    cy.get('#userName').type(usuario);
    cy.get('#password').type(senha);
    cy.get('#login').click();
    cy.url({timeout: 10000}).should('include', '/profile');
});

Cypress.Commands.add('adicionarLivroAColecao', (tituloLivro) => {
    cy.visit('/books');
    cy.get('#searchBox').type(tituloLivro);
    cy.get('tbody tr').first().within(() => {
        cy.contains('a', tituloLivro).click();
    });
    cy.contains('button', 'Add To Your Collection').click();
    cy.wait(500);
});