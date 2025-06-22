describe('Pengujian Halaman Login v2', () => {
    it('harus menampilkan semua field (email, password, dan tombol)', () => {
      cy.visit('./index.html');
      cy.get('input#input-email').should('be.visible');
      cy.get('input#input-password').should('be.visible'); // Tes untuk fitur baru
      cy.get('button#main-login-btn').should('be.visible');
    });
  });