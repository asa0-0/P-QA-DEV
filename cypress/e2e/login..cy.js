describe('Halaman Login', () => {
    it('harus menampilkan halaman dan tombol login dengan benar', () => {
      cy.visit('./index.html');
      cy.get('input#input-email').should('be.visible'); // Tes tambahan dari QA
      cy.get('button#main-login-btn').should('be.visible').and('contain', 'Masuk');
    });
  });
  