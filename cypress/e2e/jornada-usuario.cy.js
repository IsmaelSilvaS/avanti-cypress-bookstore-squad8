import { faker } from '@faker-js/faker';
import '../pages/registro-page/registro-page'

describe('Cenário 00 - Jornada do Usuario', () => {


    var user = faker.internet.username();
    const livroTeste = 'Designing Evolvable Web APIs with ASP.NET';
    const credenciais = Cypress.env('todos_campos_validos');


    it('Registro - Registro com sucesso', () => {
        cy.visit('https://demoqa.com/register');
        cy.wait(500);
        cy.prepareAlertStub(); // Registra o monitoramento do 
        cy.wait(400);
        cy.typeFirstName('Saulo');
        cy.wait(400)

        cy.typeLastName('Silva');
        cy.typeUserName(user);
        cy.typePassword('Senha@1234');
        cy.clickRegister();

        cy.assertAccountCreated();
        cy.wait(400)
    })

    it('Login -Todos os campos válidos', () => {

        cy.visit('https://demoqa.com/login');

        cy.get('#userName').type(credenciais.usuario)
        cy.get('#password').type(credenciais.senha)
        cy.get('#login').click()
    })

    it('Busca - Busca por título completo', () => {
        cy.visit('https://demoqa.com/books');
        cy.get('#searchBox').type('Git Pocket Guide');
        cy.get('#searchBox').parent().find('button').click();

        cy.contains('Git Pocket Guide').should('be.visible');
    })

    it('Coleção - Deve exibir corretamente o livro adicionado na coleção do usuário', () => {
        cy.login();
        cy.adicionarLivroAColecao(livroTeste);
        cy.visit('/profile');
        cy.contains('a', livroTeste, { timeout: 10000 }).should('be.visible');
    });

})