describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the "Get started" message', () => {
    cy.contains('Get started by editing');
  });

  it('displays the Next.js logo', () => {
    cy.get('img[alt="Next.js Logo"]').should('be.visible');
  });
});
