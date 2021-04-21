describe('Sign Up', () => {
  it('', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('button').contains('로그인').click()
    cy.visit("http://127.0.0.1:8000/accounts/google/login/?process=login")
    // cy.get('.socialaccount_provider.google').click()
    cy.get('input[type=email]').type('ajtwlstmdgks@gmail.com')
  })
})