import { faker } from '@faker-js/faker';
import '../pages/registro-page/registro-page'

describe('Validar Cadastro', () => {


  var user= faker.internet.username();

  beforeEach(() => {
    cy.visit('https://demoqa.com/register');
  });

  it('Cadastro com sucesso', () => {
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typeUserName(user);
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
  })

  it('Validação usuario já cadastrado', () => {
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typeUserName(user);
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertMessageUserExist();
  })

  it('Validar nome obrigatório', () => {
    cy.typeLastName('Silva');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertFirstNameRequired();
  })

  it('Validar sobrenome obrigatório', () => {
    cy.typeFirstName('Saulo');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertLastNameRequired();
  })

  it('Validar username obrigatório', () => {
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertUserNameRequired();
  })

  it('Validar senha obrigatório', () => {
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typeUserName(faker.internet.username());
    cy.clickRegister();

    cy.assertPasswordRequired();
  })
})