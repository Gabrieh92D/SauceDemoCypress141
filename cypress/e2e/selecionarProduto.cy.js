describe('Selecionar Produtos', () =>{
//atributos

beforeEach(() => {
cy.visit('/')          //abre o browser na url informada em cypress.config.js
  })//termina before

  it('Selecionar Sauce Labs Backpack', () =>{
     cy.title() // verifica se o tituçlo da pagina é swag labs
      .should('eq', 'Swag Labs')
     cy.get('input[data-test="username"]') //preenche o usuario
      .type('standard_user')
     cy.get('#password')
      .type('secret_sauce')   //preenche a senha

      cy.get('input[name="login-button"]')
        .click()    ///clica no botão login

        //carregar a pagina interna
      cy.get('span.title')
          .should('have.text', 'Products')
      cy.get('img[alt="Sauce Labs Backpack"]')
        .click()

      cy.xpath('/html/body/div/div/div/div[2]/div[2]/div/button')
        .click('have.text', 'Back to products');
      
      cy.get('div.inventory_details_name.large_size')
        .should('have.text', 'Sauce Labs Backpack')   

      cy.get('div.inventory_details_price')
        .should('have.text', '$29.99')    

      cy.get('#add-to-cart')
        .click() 
      
      cy.get('a.shopping_cart_link')
        .should('have.text', '1')
  })
})//termina desibe