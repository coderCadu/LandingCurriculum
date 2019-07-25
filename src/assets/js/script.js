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

function debounce(func, wait, immediate) {
  let timeout;
  // eslint-disable-next-line func-names
  return function () {
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    // eslint-disable-next-line func-names
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// eslint-disable-next-line func-names
(function () {
  const $target = $('.anime');
  const animationClass = 'anime-start';
  const offset = $(window).height() * 3 / 4;

  function animeScroll() {
    const documentTop = $(document).scrollTop();
    // eslint-disable-next-line func-names
    $target.each(function () { 
      const itemTop = $(this).offset().top;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      }
    });
  }

  // eslint-disable-next-line func-names
  $(document).scroll(debounce(() => {
    animeScroll();
  }, 200));
}());

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
