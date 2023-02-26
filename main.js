const form = document.getElementById('form-validação')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (
    document.querySelector('#b_campo').value >
    document.querySelector('#a_campo').value
  ) {
    console.log('form valido')
    document.querySelector('.sucess-message').innerHTML =
      '<p>O Formulário está válido</p>'
    document.querySelector('.sucess-message').style.display = 'block'

    document.querySelector('#a_campo').value = ''
    document.querySelector('#b_campo').value = ''
  } else {
    console.log('form não valido')
    document.querySelector('.error-message').innerHTML =
      '<p>O Formulário Não está válido</p>'
    document.querySelector('.error-message').style.display = 'block'

    document.querySelector('#a_campo').value = ''
    document.querySelector('#b_campo').value = ''
  }
})
