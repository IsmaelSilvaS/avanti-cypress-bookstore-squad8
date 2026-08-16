/* 

CENÁRIO 04 - Coleção
Autor: Ismael da Silva Santos
Automação: Cypress

Casos automatizados:
1. CT01: Validar exibição correta dos livros adicionados na coleção
2. CT04: Validar remoção individual de um livro da coleção
3. CT05: Validar a remoção completa de todos os livros da coleção

*/

describe('Cenário 04 - Coleção (https://demoqa.com/books)', () => {
    const livroTeste = 'Designing Evolvable Web APIs with ASP.NET';
    let usuario;
    let senha;

    before(() => {
        cy.fixture('usuario').then((dados) => {
            usuario = dados.usuario;
            senha = dados.senha;
        });
    });

    beforeEach(() => {
        cy.login(usuario, senha);
    });

    it('CT01 - Deve exibir corretamente o livro adicionado na coleção do usuário', () => {
        cy.adicionarLivroAColecao(livroTeste);
        cy.visit('/profile');
        cy.contains('a', livroTeste, { timeout: 10000 }).should('be.visible');
    });

    it('CT04 - Deve remover individualmente um livro da coleção', () => {
        cy.adicionarLivroAColecao(livroTeste);
        cy.visit('/profile');
        // cy.contains('a', livroTeste).should('be.visible').closest('tr').find('.action-buttons').click();
        cy.contains('a', livroTeste).should('be.visible').closest('tr').find('span[title="Delete"]').click();
        cy.get('.modal-content').should('be.visible').within(() => {
            cy.contains('button', 'OK').click();
        });
        cy.contains('a', livroTeste).should('not.exist');
    });

    it('CT05 - Deve remover todos os livros ao clicar em "Excluir todos os livros"', () => {
        Cypress.on('uncaught:exception', (err) => {
            console.log('Erro da aplicação:', err.message);
            return false;
        });

        cy.adicionarLivroAColecao(livroTeste);
        cy.visit('/profile');
        cy.contains('a', livroTeste).should('be.visible');
        cy.contains('button', 'Delete All Books').click();
        cy.get('.modal-content').should('be.visible').within(() => {
            cy.get('#closeSmallModal-ok').click();
        });

        cy.reload();

        cy.contains('a', livroTeste).should('not.exist');
    })
})

