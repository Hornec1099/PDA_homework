describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it ('should display buttons that are pushed', () => {

      cy.get('#number3').click();
      cy.get('#number2').click();
      cy.get('#number1').click();
      cy.get('.display').should('contain','321');
  })

  it ('should update display with results', () => {

    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '30');
    
  })
  it ('should chain operators', () => {

    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '');
    
  })

  it ('should show positive number', () => {

    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '1');
    
  })
  it ('should show negative number', () => {

    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '-1');
    
  })
  it ('should show decimal number', () => {

    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '0.5');
    
  })
  it ('should show large number number', () => {

    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', '845390');
    
  })
  it ('should show message when divide by 0', () => {

    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', 'This is impossible');
    
  })
})