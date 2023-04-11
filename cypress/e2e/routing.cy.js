describe('app works correctly with routes', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('goes on String', () => {
    cy.get('a[href*="recursion"]').click();
    cy.contains('Строка');
  });

  it('goes on Fibonacci', () => {
    cy.get('a[href*="fibonacci"]').click();
    cy.contains('Последовательность Фибоначчи');
  });

  it('goes on Sorting', () => {
    cy.get('a[href*="sorting"]').click();
    cy.contains('Сортировка массива');
  });

  it('goes on Stack', () => {
    cy.get('a[href*="stack"]').click();
    cy.contains('Стек');
  });

  it('goes on Queue', () => {
    cy.get('a[href*="queue"]').click();
    cy.contains('Очередь');
  });

  it('goes on List', () => {
    cy.get('a[href*="list"]').click();
    cy.contains('Связный список');
  });

});