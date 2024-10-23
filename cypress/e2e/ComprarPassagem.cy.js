describe('Realizar compra da passagem', () => {
  // Atributos
  const dados = require('../fixtures/massaDados.json')
  beforeEach(() => {
    cy.visit('/')

  })// Fim befor

  it('Realizar compra da passagem', () => {

    //Selecionar origem e destino
    cy.title().should('eq', 'BlazeDemo')
    cy.get('select[name="fromPort"]').select('Boston')
    cy.get('select[name="toPort"]').select('New York')
    cy.get('input[value="Find Flights"]').click()

    //Selecionar a reserva
    cy.title().should('eq', 'BlazeDemo - reserve')
    // cy.get('input[class="btn btn-small"]').third().click()
    cy.get('input[type="submit"]').first().click();

    // Informar dados de pagamento
    cy.title().should('eq', 'BlazeDemo Purchase')
    cy.get('input[id="inputName"]').type('Ana Silva') // passando o ID de 2 formas diferentes
    cy.get('#address').type('Rua das Flores, 123');
    cy.get('#city').type('São Paulo');
    cy.get('#state').type('SP');
    cy.get('#zipCode').type('12345-678');
    cy.get('#cardType').select('Visa');
    cy.get('#creditCardNumber').type('4111111111111111');
    cy.get('#creditCardMonth').clear().type('12'); // Limpa o campo antes de digitar
    cy.get('#creditCardYear').clear().type('2025'); // Limpa o campo antes de digitar
    cy.get('#nameOnCard').type('Ana Silva');
    cy.get('#rememberMe').check(); // "Remember Me" (marcação opcional)
    cy.get('input[value="Purchase Flight"]').click();

    // Verificar se a compra foi realizada com sucesso
    cy.title().should('eq', 'BlazeDemo Confirmation')
    cy.contains('Thank you for your purchase today!')
    cy.contains('Id')
    cy.contains('Status')
    cy.contains('Amount')
  }) // Fim  IT

  it('Realizar compra da passagem com massa de dados', () => {
    //Selecionar origem e destino
    cy.title().should('eq', 'BlazeDemo')
    cy.get('select[name="fromPort"]').select('Portland')
    cy.get('select[name="toPort"]').select('Berlin')
    cy.get('input[value="Find Flights"]').click()

    //Selecionar a reserva
    cy.title().should('eq', 'BlazeDemo - reserve')
    // cy.get('input[class="btn btn-small"]').third().click()
    cy.get('input[type="submit"]').first().click();

    // Informar dados de pagamento
    cy.title().should('eq', 'BlazeDemo Purchase');
    cy.get('input[id="inputName"]').type(dados.name);
    cy.get('#address').type(dados.address);
    cy.get('#city').type(dados.city);
    cy.get('#state').type(dados.state);
    cy.get('#zipCode').type(dados.zipCode);
    cy.get('#cardType').select(dados.cardType);
    cy.get('#creditCardNumber').type(dados.creditCardNumber);
    cy.get('#creditCardMonth').clear().type(dados.creditCardMonth);
    cy.get('#creditCardYear').clear().type(dados.creditCardYear);
    cy.get('#nameOnCard').type(dados.nameOnCard);
    cy.get('#rememberMe').check();
    cy.get('input[value="Purchase Flight"]').click();


    // Verificar se a compra foi realizada com sucesso
    cy.title().should('eq', 'BlazeDemo Confirmation')
    cy.contains('Thank you for your purchase today!')
    cy.contains('Id')
    cy.contains('Status')
    cy.contains('Amount')
  }) // Fim  segundo IT
})// Fim  describe