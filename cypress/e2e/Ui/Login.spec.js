/// <reference types="cypress" />

import usuarios from "../../fixtures/usuarios.json"

describe('US001 - Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.login('neia@via.com', 'teste@123')
     });

     it('validar mensagem de erro quando inserir usuario invalido', () => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('neia@hotmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('[data-test="login-submit"]').click() 
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
     });

     it('deve fazer login com sucesso -usando importação', () => {
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')

     });
        
     it('deve fazer login com sucesso - usando fixture', () => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.title().should('eq', 'ConexaoQA')

     });

 })


/*
    Funcionalidade: Login
    Eu como usuário das Conexao QA
    Quero Fazer o login
    Para editar meu perfil

    Cenário: login com sucesso  
    Arrange - Dado - Pre-requisito -> Dado que eu esteja na tela de login
    Action - Quando - Ação do usuario 0 Quando eu inseri usuario e senha
    Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard

*/