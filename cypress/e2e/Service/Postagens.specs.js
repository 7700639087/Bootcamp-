/// <reference types="cypress" />

describe('Testes CRUD - API', () => {
    let token

    beforeEach(() => {
        cy.tokenApi().then((auth) =>{
            token = auth
        })
    });
    

    it('[POST] Criar uma Postagem', () => {
    cy.request({
        method: 'POST',
        url: 'api/posts',
        headers: {
            Cookie: token
        },
        body: {
            "text":"Enviado pelo cypress"
        }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
    
    
});

describe('Teste de Consulta', () => {
    let token
    beforeEach(() => {
        cy.tokenApi().then((auth) =>{
            token = auth
        })
    });

    it('[GET] Consulta Postagem', () => {
        cy.request({    
            method: 'GET',
            url: '/api/posts',
            headers: {
                Cookie: token
            }
            }).then((response) => {
                expect(response.status).to.eq(200)
        })
    })
    it('[GET] Consulta Postagem por ID', () => {
        cy.criarPostagem(token, "Bootcamp - Testes").then((response) =>{
            let id = response.body._id
            cy.request({    
                method: 'GET',
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.eq(200)
            })

        })
    })
    
});
describe('Teste de Exclusão', () => {    
    let token
    beforeEach(() => {
        cy.tokenApi().then((auth) =>{
            token = auth
        })
    });

    it('[DELETE] Deletar Postagem', () => {
        cy.criarPostagem(token, "Bootcamp - Testes").then((response) =>{
            let id = response.body._id
            cy.request({    
                method: 'DELETE',
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.msg).to.eq("Post removido")                   
            })

        })
    })
    
    it('[PUT] Curtir uma Postagem', () => {
        cy.criarPostagem(token, "Bootcamp - Testes").then((response) =>{
            let id = response.body._id
            cy.request({
    
                method: 'PUT',
                url: `/api/posts/like/${id}`,
                headers: {
                    Cookie: token
                }
                }).then((response) => {
                    expect(response.status).to.eq(200)
            })

        })
    })
    
 });