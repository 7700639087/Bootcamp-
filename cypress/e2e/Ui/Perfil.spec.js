/// <reference types="cypress" />

describe('Funcionalidade: Criar perfil', () => {
    beforeEach(() => {
        cy.login('neia@via.com', 'teste@123')
        cy.visit('criar-perfil')
    });
    
    it('Deve criar perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()
        cy.contains('Especialista em QA').click()
        cy.get('[data-test="profile-company"]').type('Via')
        cy.get('[data-test="profile-webSite"]').type('http://www.viahub.com')
        cy.get('[data-test="profile-location"]').type('São Paulo')
        cy.get('[data-test="profile-skills"]').type('Angular, Java, JS, AEM')
        cy.get('[data-test="profile-gitHub"]').type('neia')
        cy.get('[data-test="profile-bio"]').type('Hello')        
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

    it('Deve criar perfil com sucesso - Commands', () => {
        cy.criarPerfil('Via', 'http://www.viahub.com', 'São Paulo', 'Angular, Java, JS, AEM', 'neia', 'Hello')
        cy.get('[data-test="dashboard-editProfile"]').should('exist')
    });

});