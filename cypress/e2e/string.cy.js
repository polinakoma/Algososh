import { defaultColor, changingColor, modifiedColor } from '../../src/utils/constants/element-captions';

describe('String', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/recursion');
  });

  it('should be disabled while input is empty', () => {
    cy.get('input').should('be.empty')
    cy.get('form').find('button').should('be.disabled')

    cy.get('input').type('hello')
    cy.get('form').find('button').should('not.be.disabled')
  });

  it('should be a correct recursion', () => {
  
    cy.get('input').type('hello')
    cy.get('form').find('button').should('not.be.disabled').click();
    
    cy.get('[class^="circle_circle"]').as('circles');

    cy.get('@circles').should(($circles) => {
      expect($circles).to.have.length(5);

      expect($circles.eq(0)).to.contain('h').to.have.css('border-color', defaultColor)
      expect($circles.eq(1)).to.contain('e').to.have.css('border-color', defaultColor)
      expect($circles.eq(2)).to.contain('l').to.have.css('border-color', defaultColor)
      expect($circles.eq(3)).to.contain('l').to.have.css('border-color', defaultColor)
      expect($circles.eq(4)).to.contain('o').to.have.css('border-color', defaultColor)
    });

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
      expect($circles).to.have.length(5);

      expect($circles.eq(0)).to.contain('h').to.have.css('border-color', changingColor)
      expect($circles.eq(1)).to.contain('e').to.have.css('border-color', defaultColor)
      expect($circles.eq(2)).to.contain('l').to.have.css('border-color', defaultColor)
      expect($circles.eq(3)).to.contain('l').to.have.css('border-color', defaultColor)
      expect($circles.eq(4)).to.contain('o').to.have.css('border-color', changingColor)
    });

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
      expect($circles).to.have.length(5);

        expect($circles.eq(0)).to.contain('o').to.have.css('border-color', modifiedColor)
        expect($circles.eq(1)).to.contain('e').to.have.css('border-color', defaultColor)
        expect($circles.eq(2)).to.contain('l').to.have.css('border-color', defaultColor)
        expect($circles.eq(3)).to.contain('l').to.have.css('border-color', defaultColor)
        expect($circles.eq(4)).to.contain('h').to.have.css('border-color', modifiedColor)
    });

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
        expect($circles).to.have.length(5)
        expect($circles.eq(0)).to.contain('o').to.have.css('border-color', defaultColor)
        expect($circles.eq(1)).to.contain('e').to.have.css('border-color', changingColor)
        expect($circles.eq(2)).to.contain('l').to.have.css('border-color', defaultColor)
        expect($circles.eq(3)).to.contain('l').to.have.css('border-color', changingColor)
        expect($circles.eq(4)).to.contain('h').to.have.css('border-color', defaultColor)
    })

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
      expect($circles).to.have.length(5)
      expect($circles.eq(0)).to.contain('o').to.have.css('border-color', defaultColor)
      expect($circles.eq(1)).to.contain('l').to.have.css('border-color', modifiedColor)
      expect($circles.eq(2)).to.contain('l').to.have.css('border-color', defaultColor)
      expect($circles.eq(3)).to.contain('e').to.have.css('border-color', modifiedColor)
      expect($circles.eq(4)).to.contain('h').to.have.css('border-color', defaultColor)
    });

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
        expect($circles).to.have.length(5)
        expect($circles.eq(0)).to.contain('o').to.have.css('border-color', defaultColor)
        expect($circles.eq(1)).to.contain('l').to.have.css('border-color', defaultColor)
        expect($circles.eq(2)).to.contain('l').to.have.css('border-color', changingColor)
        expect($circles.eq(3)).to.contain('e').to.have.css('border-color', defaultColor)
        expect($circles.eq(4)).to.contain('h').to.have.css('border-color', defaultColor)
    })

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
      expect($circles).to.have.length(5)
      expect($circles.eq(0)).to.contain('o').to.have.css('border-color', defaultColor)
      expect($circles.eq(1)).to.contain('l').to.have.css('border-color', defaultColor)
      expect($circles.eq(2)).to.contain('l').to.have.css('border-color', modifiedColor)
      expect($circles.eq(3)).to.contain('e').to.have.css('border-color', defaultColor)
      expect($circles.eq(4)).to.contain('h').to.have.css('border-color', defaultColor)
  })
  });
});