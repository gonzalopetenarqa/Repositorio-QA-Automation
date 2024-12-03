const{login} = require('../support/POM/prueba.Page.js')

beforeEach(() => {
  login.loginPage()
});

describe('template spec', () => {
  it('passes', () => {
    login.loginPage()
  })

  it( 'Validar buscar cpu en el buscador',()=>{
    login.searchPage()
    login.validatePage()
  })
})