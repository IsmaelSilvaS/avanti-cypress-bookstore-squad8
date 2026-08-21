/* 

CENÁRIO 01 - Registro
Autor: Andrew Eduardo J. Souza Machado
Automação: Cypress

Casos automatizados:
1. CT01: Registro com sucesso
2. CT02: Validação usuario já cadastrado
3. CT03: Validar campos obrigatório
4. CT04: Validar campos inválidos

*/

import { faker } from '@faker-js/faker';
import '../pages/registro-page/registro-page'

describe('Cenario 1 - Registro', () => {


  var user= faker.internet.username();

  beforeEach(() => {
    cy.visit('https://demoqa.com/register');
  });

  it('CT01 - Registro com sucesso', () => {
    cy.prepareAlertStub(); // Registra o monitoramento do alerta
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typeUserName(user);
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
  })

  it('CT02 - Validação usuario já cadastrado', () => {
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typeUserName(user);
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertMessageUserExist();
  })

  it('CT03 - Validar campos obrigatório', () => {

    cy.clickRegister();

    cy.assertFirstNameRequired();
    cy.assertLastNameRequired();
    cy.assertUserNameRequired();
    cy.assertPasswordRequired();
  })

  it('CT04 - Validar campos inválidos', () => {
    cy.prepareAlertStub(); 
    cy.typeFirstName('M1c@_%');
    cy.typeLastName('     ');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
    cy.log("Este teste possui uma validação de cadastro para fins visuais do erro");

    cy.assertFirstNameInvalid();
    cy.assertLastNameInvalid();

    cy.log("Este teste possui uma validação de cadastro para fins visuais do erro");
  })

})