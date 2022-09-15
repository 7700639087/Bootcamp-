/// <reference types="cypress" />
import auth from '../../fixtures/auth.json'

it('[Post] - teste de autenticação', () => {
    cy.request({
        method: 'POST',
            url: 'api/auth',
        body: auth
    }).then((response) =>{
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.empty
        expect(response.body).to.have.property("jwt")
        cy.getCookies('conexaoqa.herokuapp.com').should('exist')
    })
});

it('[Post] - teste de autenticação com senha inválida', () => {
    cy.request({
        method: 'POST',
            url: 'api/auth',
            failOnStatusCode: false,
        body: {
            "email": "neia@via.com",
        "password": "123"
    }
    }).then((response) =>{
        expect(response.status).to.eq(401)
    })
});