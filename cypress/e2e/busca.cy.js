describe('Validar a busca livros', () => {

    it('Busca por título completo', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Git Pocket Guide');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('Git Pocket Guide').should('be.visible');
    })
    it('Busca por autor', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Richard E. Silverman');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('Richard E. Silverman').should('be.visible');
    })

    it('Busca utilizando parte do título', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('JavaScript');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('JavaScript').should('be.visible');
    })
    it('Acessar os detalhes de um livro ', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Git Pocket Guide');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('a', 'Git Pocket Guide').should('be.visible').click();

        cy.url().should('eq','https://demoqa.com/books?search=9781449325862');
    })

})