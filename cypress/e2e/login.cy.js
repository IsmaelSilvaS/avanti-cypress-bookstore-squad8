/* 

CENÁRIO 02 - Login
Autor: Leandro Bernardini
Automação: Cypress

Casos automatizados:
1. CT01: Validar o login com todos os campos válidos
2. CT02: Validar o login com o campo usuário inválido
3. CT03: Validar o login com o campo senha inválido
4. CT04: Validar o login com todos os campos inválidos

*/

describe('Login Tests', () => {
    it('Todos os campos válidos', () => {
        const credenciais = Cypress.env('todos_campos_validos')

        cy.visit('https://demoqa.com/login')

        cy.get('#userName').type(credenciais.usuario)
        cy.get('#password').type(credenciais.senha)
        cy.get('#login').click()
    })

    it('Login inválido', () => {
        const credenciais = Cypress.env('usuario_invalido')

        cy.visit('https://demoqa.com/login')

        cy.get('#userName').type(credenciais.usuario)
        cy.get('#password').type(credenciais.senha)
        cy.get('#login').click()
    })

    it('Senha inválida', () => {
        const credenciais = Cypress.env('senha_invalida')

        cy.visit('https://demoqa.com/login')

        cy.get('#userName').type(credenciais.usuario)
        cy.get('#password').type(credenciais.senha)
        cy.get('#login').click()

    })

    it('Todos os campos inválidos', () => {
        const credenciais = Cypress.env('todos_campos_invalidos')

        cy.visit('https://demoqa.com/login')

        cy.get('#userName').type(credenciais.usuario)
        cy.get('#password').type(credenciais.senha)
        cy.get('#login').click()
    })
})