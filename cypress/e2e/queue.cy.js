import { defaultColor, changingColor} from '../../src/utils/constants/element-captions';

describe('Queue', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/queue');
  });

  it('should be disabled while input is empty', () => {
    cy.get('input').should('be.empty')
    cy.get('button[type="submit"]').should('be.disabled')
  });

  it('should add elements to queue correctly', () => {

    for(let j = 0; j < 7; j++ ) {
      cy.get('input').type(j);
      cy.get('button[type="submit"]').should('not.be.disabled').click();

      cy.get('[class^="circle_circle"]').as('circles');

      cy.get('@circles').should(($circles) => {
        expect($circles[j]).to.contain(j).to.have.css('border-color', changingColor)
      });
  
      cy.wait(1000);
  
      cy.get('@circles').should(($circles) => {
        expect($circles[j]).to.contain(j).to.have.css('border-color', defaultColor)
      });
    };

    cy.get('[class^="circle_circle"]').as('circles');

    cy.get('li').eq(0).should('contain', 'head')
    cy.get('li').eq(-1).should('contain', 'tail')

  });

  it('should delete elements from queue correctly', () => {
    
    for(let j = 0; j < 4; j++ ) {
      cy.get('input').type(j);
      cy.get('button[type="submit"]').should('not.be.disabled').click();

      cy.get('[class^="circle_circle"]').as('circles');

      cy.get('@circles').should(($circles) => {
        expect($circles[j]).to.contain(j).to.have.css('border-color', changingColor)
      });
  
      cy.wait(1000);
  
      cy.get('@circles').should(($circles) => {
        expect($circles[j]).to.contain(j).to.have.css('border-color', defaultColor)
      });
    };

    cy.get('form').find('button[type="button"]').should('not.be.disabled').click();

    cy.get('[class^="circle_circle"]').as('circles');

    cy.get('@circles').should(($circles) => {
      expect($circles[0]).to.contain('').to.have.css('border-color', changingColor);
    });

    cy.wait(1000);

    cy.get('@circles').should(($circles) => {
      expect($circles[0]).to.have.css('border-color', defaultColor);
    });

    cy.get('li').eq(1).should('contain', 'head')

  });

  it('should reset the queue', () => {
  
    for(let j = 0; j < 4; j++ ) {
      cy.get('input').type(j);
      cy.get('button[type="submit"]').should('not.be.disabled').click();

      cy.get('[class^="circle_circle"]').as('circles');

      cy.get('@circles').should(($circles) => {
        expect($circles[j]).to.contain(j).to.have.css('border-color', changingColor)
      });
  
      cy.wait(1000);
  
      cy.get('@circles').should(($circles) => {
        expect($circles[j]).to.contain(j).to.have.css('border-color', defaultColor)
      });
    };

    cy.get('form').find('button[type="reset"]').should('not.be.disabled').click();

    cy.get('[class^="circle_circle"]').as('circles'); 
    
    cy.get('@circles').should(($circles) => {
      expect($circles).to.contain('');
    });

  });

});