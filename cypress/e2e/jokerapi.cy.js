const endpoint = Cypress.env("endpoint")
describe('Validando atributos da API', () => {
  it('Validando a API está retornando todos os atributos', () => {
    cy.request(endpoint).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('type')
      expect(response.body).to.have.property('setup')
      expect(response.body).to.have.property('punchline')
      expect(response.body).to.have.property('id')
    })
  })
  it('Validando se a API retorna um corpo no formato JSON válido', () => {
    cy.request(endpoint).then((resposta) => {
      expect(resposta.headers['content-type']).to.include('application/json');
      expect(() => JSON.parse(JSON.stringify(resposta.body))).not.to.throw();
    });
  });

  it(`Validando se a API está retornando IDs únicos, se os atributos não estão vindo vazios e se as piadas são diferentes em 100 requisições`, () => {
    let idList = []
    let typeList = []
    let setupList = []
    let punchlineList = []
    for (Range = 0; Range < 5; Range++) {
    
      cy.request(endpoint).then((response) => {
      expect(idList).not.to.include(response.body.id)
      expect(setupList).not.to.include(response.body.setup)
      expect(punchlineList).not.to.include(response.body.punchline)
      idList.push(response.body.id)
      typeList.push(response.body.type)
      setupList.push(response.body.setup)
      punchlineList.push(response.body.punchline)
      
      expect(response.body.type).to.not.be.empty
      expect(response.body.setup).to.not.be.empty
      expect(response.body.punchline).to.not.be.empty
      expect(response.body.id).to.be.a('number')
      })
    }
  })
})

