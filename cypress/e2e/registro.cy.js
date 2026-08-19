import { faker } from '@faker-js/faker';
import '../pages/registro-page/registro-page'

describe('Validar Cadastro', () => {


  var user= faker.internet.username();

  beforeEach(() => {
    cy.visit('https://demoqa.com/register');
  });

  it.only('Cadastro com sucesso', () => {
    cy.prepareAlertStub(); // Registra o monitoramento do alerta
    cy.typeFirstName('Saulo');
    cy.typeLastName('Silva');
    cy.typeUserName(user);
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
  })

  it.only('Validação usuario já cadastrado', () => {
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

  it.only('Validar campos obrigatório', () => {

    cy.clickRegister();

    cy.assertFirstNameRequired();
    cy.assertLastNameRequired();
    cy.assertUserNameRequired();
    cy.assertPasswordRequired();
  })

  it('Validar nome inválido', () => {
    cy.prepareAlertStub();
    cy.typeFirstName('M1c@_%');
    cy.typeLastName('Silva');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
    cy.assertFirstNameInvalid();
  })

  it('Validar sobrenome inválido', () => {
    cy.prepareAlertStub();
    cy.typeFirstName('Mica');
    cy.typeLastName('S0uz@_%');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
    cy.assertLastNameInvalid();
  })

  it.only('Validar campos inválidos', () => {
    cy.prepareAlertStub(); 
    cy.typeFirstName('M1c@_%');
    cy.typeLastName('     ');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
    cy.assertFirstNameInvalid();
    cy.assertLastNameInvalid();
  })

  it('Validar nome apenas com espaço', () => {
    cy.typeFirstName('     ');
    cy.typeLastName('Souza');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
    cy.assertFirstNameRequired();
  })

  it('Validar sobrenome apenas com espaço', () => {
    cy.typeFirstName('Mica');
    cy.typeLastName('    ');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertAccountCreated();
    cy.assertLastNameRequired();
  })

  it('Validar username apenas com espaço', () => {
    cy.typeFirstName('Mica');
    cy.typeLastName('Souza');
    cy.typeUserName("     ");
    cy.typePassword('Senha@1234');
    cy.clickRegister();

    cy.assertUserNameRequired();
  })

  it('Validar senha apenas com espaço', () => {
    cy.typeFirstName('Mica');
    cy.typeLastName('Souza');
    cy.typeUserName(faker.internet.username());
    cy.typePassword('         ');
    cy.clickRegister();

    cy.assertPasswordInvalid();
  })

})