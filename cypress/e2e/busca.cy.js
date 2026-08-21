/* 

CENÁRIO 03 - Busca
Autor: Isadora Furtado Menezes
Automação: Cypress

Casos automatizados:
1. CT02: Busca por título completo
2. CT03: Validar busca de livros pelo autor 
3. CT05: Busca utilizando parte do título
4. CT11: Acessar os detalhes de um livro

*/

describe('Cenário 03 - Busca', () => {

    it('CT 02 - Busca por título completo', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Git Pocket Guide');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('Git Pocket Guide').should('be.visible');
    })
    it('CT 03 - Busca por autor', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Richard E. Silverman');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('Richard E. Silverman').should('be.visible');
    })

    it('CT 05 - Busca utilizando parte do título', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('JavaScript');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('JavaScript').should('be.visible');
    })
    it('CT 11 - Acessar os detalhes de um livro ', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Git Pocket Guide');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('a', 'Git Pocket Guide').should('be.visible').click();

        cy.url().should('eq','https://demoqa.com/books?search=9781449325862');
    })

})