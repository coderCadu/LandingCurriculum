const mensagemSucesso = document.querySelector('[mensagemSucesso]')
const form = document.forms[0]

form.onsubmit = function(e) {
  e.preventDefault()

  mensagemSucesso.innerText = 'Formulário enviado com sucesso!! Agora é só esperar o retorno'

  const form = e.target
  const formData = new FormData(form)
  const options = {
    method: form.method,
    body: new URLSearchParams(formData)
  }

  try {
    const res = await fetch(form.action, options)
  } catch (err) {
    console.log(err)
  }

  return false
}
