const mensagemSucesso = document.querySelector('[mensagemSucesso]')
const form = document.forms[0]

form.onsubmit = async e => {
  e.preventDefault()

  const form = e.target
  const formData = new FormData(form)
  const options = {
    method: 'POST',
    body: new URLSearchParams(formData)
  }

  try {
    await fetch(form.action, options)
    mensagemSucesso.innerText = 'Formulário enviado com sucesso!! Agora é só esperar o retorno'
  } catch (err) {
    console.log(err)
  }

  return  false
}
 
