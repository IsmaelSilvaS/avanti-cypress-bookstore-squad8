Cypress.Commands.add('login', () => {
  const usuario = Cypress.env('usuario');
  const senha = Cypress.env('senha');

  if (!usuario || !senha) {
    throw new Error(
      'Variáveis de ambiente "usuario" e "senha" não encontradas. ' +
      'Copie cypress.env.json.example para cypress.env.json e preencha suas credenciais.'
    );
  }

  cy.session([usuario, senha], () => {
    cy.visit('/login');
    cy.get('#userName').type(usuario);
    cy.get('#password').type(senha);
    cy.get('#login').click();
    cy.url({ timeout: 10000 }).should('include', '/profile');
  },
    {
      validate: () => {
        cy.window().then((win) => {
          const token = win.localStorage.getItem('token');
        });
      },
    });
  cy.visit('/profile');
});

Cypress.Commands.add('adicionarLivroAColecao', (tituloLivro) => {
  cy.visit('/books');
  cy.get('#searchBox').type(tituloLivro);
  cy.get('tbody tr').first().within(() => {
    cy.contains('a', tituloLivro).click();
  });
  cy.contains('button', 'Add To Your Collection').should('be.visible').click();
  cy.on('window:alert', () => true);
  cy.wait(500);
});

Cypress.Commands.add('removerLivroDaColecao', (tituloLivro) => {
  cy.contains('a', tituloLivro).should('be.visible').closest('tr').find('span[title="Delete"]').click();
  cy.get('.modal-content').should('be.visible').within(() => {
    cy.contains('button', 'OK').click();
  });
});