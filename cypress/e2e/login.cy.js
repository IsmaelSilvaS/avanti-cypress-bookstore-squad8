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