class ExperienciaPage{

    adicionarExperiencia(posicao, empresa, local, dataInicio, dataFim, descricao){
        cy.get('[data-test="dashboard-addExperience"]').click()
        cy.get('[data-test="experience-title"] > .MuiInputBase-root > .MuiInputBase-input').type(posicao)
        cy.get('[data-test="experience-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
        cy.get('[data-test="experience-location"] > .MuiInputBase-root > .MuiInputBase-input').type(local)
        cy.get('#from').type(dataInicio)
        cy.get('#to').type(dataFim)
        cy.get('[data-test="experience-description"] > .MuiInputBase-root').type(descricao)
        cy.get('[data-test="experience-submit"]').click()
    }

    excluirExperiencia(){
        cy.get('[data-test="experience-delete"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Experiência Removida')
    }
}

export default new ExperienciaPage()