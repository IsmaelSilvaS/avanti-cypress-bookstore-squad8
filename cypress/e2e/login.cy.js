// subindo o primeiro caso de teste de Login Válido

describe('Login Tests', () => {
    it('login válido', () => {
        cy.visit('https://demoqa.com/login')

        cy.get('#userName').type(Cypress.env('usuario_teste'))
        cy.get('#password').type(Cypress.env('senha_teste'))
        cy.get('#login').click()
    })
})