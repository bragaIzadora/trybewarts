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
  if (checkbox.checked) {
    botao1.disabled = false;
  } else {
    botao1.disabled = true;
  }
}

checkbox.addEventListener('click', habilitar);

// requisito bonus

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

// Define o valor inicial do contador
const characterLimit = 500;
counter.textContent = characterLimit;

// Função para atualizar o contador
function updateCounter() {
  const currentLength = textarea.value.length;
  const remainingCharacters = characterLimit - currentLength;
  counter.textContent = remainingCharacters;
}

textarea.addEventListener('input', updateCounter);
updateCounter();
