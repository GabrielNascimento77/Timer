const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
let segundos = 0;
let timer;

document.addEventListener('click', function(e) {
  const elemento = e.target;

  if(elemento.classList.contains('iniciar')) {
      timer = setInterval(() => {
      relogio.classList.remove('pausado');
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
      }, 1000);
      iniciar.classList.add('iniciado');
  }

  if(elemento.classList.contains('pausar')) {
    iniciar.classList.remove('iniciado');
    relogio.classList.add('pausado');
    clearInterval(timer);
  }

  if(elemento.classList.contains('zerar')) {
    iniciar.classList.remove('iniciado');
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }

});

function getTimeFromSeconds(segundos = 0) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
};