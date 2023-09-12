const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.querySelector('#agreement');
const botao1 = document.getElementById('submit-btn');
function habilitar() {
  botao1.disabled = false;
}

checkbox.addEventListener('click', habilitar);
