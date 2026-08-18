// subindo o primeiro caso de teste de Login Válido

describe('Login Tests', () => {
    it('login válido', () => {
        cy.visit('https://demoqa.com/login')

        cy.get('#userName').type('testadorqa')
        cy.get('#password').type('Testador@123')
        cy.get('#login').click()
    })
})