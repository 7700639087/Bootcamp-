class AcademicoPage{

    adicionarAcademico(escola, grau, curso, dataInicio, dataFim, descricao){
        cy.get('[href="/adicionar-formacao"]').click()
        cy.get('[data-test="education-school"] > .MuiInputBase-root > .MuiInputBase-input').type(escola)
        cy.get('[data-test="education-degree"] > .MuiInputBase-root > .MuiInputBase-input').type(grau)
        cy.get('[data-test="education-fieldOfStudy"] > .MuiInputBase-root > .MuiInputBase-input').type(curso)
        cy.get('#from').type(dataInicio)
        cy.get('#to').type(dataFim)
        cy.get('[data-test="education-description"] > .MuiInputBase-root').type(descricao)
        cy.get('[data-test="education-submit"]').click()
    }

    excluirAcademico(){
        cy.get('[data-test="education-delete"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Formação Acadêmica Removida')
    }
}

export default new AcademicoPage()