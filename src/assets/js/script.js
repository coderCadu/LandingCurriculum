const mensagemSucesso = document.querySelector('[mensagemSucesso]');
const form = document.forms[0];

form.onsubmit = async (e) => {
  e.preventDefault();

  const formDom = e.target;
  const formData = new FormData(formDom);
  const options = {
    method: 'POST',
    body: new URLSearchParams(formData),
  };

  try {
    await fetch(formDom.action, options);
    mensagemSucesso.innerText = 'Formulário enviado com sucesso!! Agora é só esperar o retorno';
  } catch (err) {
    return false;
  }
  return false;
};

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formDom = e.target;
//   const formData = new FormData(formDom);
//   const options = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   };

//   async function enviarDados() {
//     try {
//       await fetch(formDom.action, options);
//       mensagemSucesso.innerText = 'Formulário enviado com sucesso!! Agora é só esperar o retorno';
//     } catch (err) {
//       return false;
//     }
//     return false;
//   }

//   enviarDados();
// });
