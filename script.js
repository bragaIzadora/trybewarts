const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.querySelector('#agreement');
function desabilitado() {
  checkbox.disabled = true;
}
desabilitado();
