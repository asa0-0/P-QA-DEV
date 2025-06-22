describe('Halaman Login', () => {
    it('harus menampilkan tombol login dengan benar', () => {
      cy.visit('./index.html');
      cy.get('button#main-login-btn').should('be.visible').and('contain', 'Masuk');
    });
  });