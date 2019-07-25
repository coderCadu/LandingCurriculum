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

// eslint-disable-next-line func-names
$('nav a').click(function (e) {
  e.preventDefault();
  const id = $(this).attr('href');
  const menuHeight = $('nav').innerHeight();
  const targetOffset = $(id).offset().top - menuHeight;

  $('html, body').animate({
    scrollTop: targetOffset,
  }, 1000);
});

// async function enviarDados(formData) {
//   fetch('https://submit-form.com/agYqUrcY_08g8cTowKwVH', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => {
//       console.log(response);
//       mensagemSucesso.innerText = 'Formulário enviado com sucesso!! Agora é só esperar o retorno';
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   return false;
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formDom = e.target;
//   const formData = new FormData(formDom);
//   console.log(new URLSearchParams(formData))

  
//   // enviarDados(formData);
// });
