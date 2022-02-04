const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('#button');
const buttonSubmit = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');
const textArea = document.getElementById('textarea');
const allFamily = document.querySelector('.allRadios');
const allChecks = document.querySelector('.allChecks');
const allEvaluations = document.querySelector('.allEvaluations');

function checkEmail() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', checkEmail);

function enableButton() {
  const classSelected = buttonSubmit.classList.toggle('selected');

  if (classSelected) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}
checkBox.addEventListener('click', enableButton);

function counter() {
  const result = (500 - textArea.value.length);
  const counterr = document.getElementById('counter');
  counterr.innerText = result;
}
textArea.addEventListener('keyup', counter);

function createNames(event) {
  event.preventDefault();
  const name = document.getElementById('input-name');
  const blank = ' ';
  const createLastName = document.createElement('p');
  const lastName = document.getElementById('input-lastname');
  createLastName.innerText = `Nome: ${name.value} ${lastName.value}`;
  name.replaceWith(blank);
  lastName.replaceWith(createLastName);
}
buttonSubmit.addEventListener('click', createNames);

function createEmailHouse(event) {
  event.preventDefault();
  const createEmail = document.createElement('p');
  const email = document.getElementById('input-email');
  createEmail.innerText = `Email: ${email.value}`;
  email.replaceWith(createEmail);

  const createHouse = document.createElement('p');
  const house = document.getElementById('house');
  createHouse.innerText = `Casa: ${house.value}`;
  house.replaceWith(createHouse);
}
buttonSubmit.addEventListener('click', createEmailHouse);

function createFamilys(event) {
  event.preventDefault();
  const createFamily = document.createElement('p');
  const family = document.querySelectorAll('.radio');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      createFamily.innerText = `Família: ${family[i].value}`;
      allFamily.replaceWith(createFamily);
    }
  }
}
buttonSubmit.addEventListener('click', createFamilys);

function createMatters(event) {
  event.preventDefault();
  const createMatter = document.createElement('p');
  const matter = document.querySelectorAll('.subject');
  const array = [];
  for (let i = 0; i < matter.length; i += 1) {
    if (matter[i].checked) {
      array.push(matter[i].value);
    }
  } createMatter.innerText = `Matérias: ${array.join(', ')}`;
  allChecks.replaceWith(createMatter);
}
buttonSubmit.addEventListener('click', createMatters);

function createEvaluation(event) {
  event.preventDefault();
  const createEvalu = document.createElement('p');
  const radios = document.querySelectorAll('.radios');
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      createEvalu.innerText = `Avaliação: ${radios[i].value}`;
      allEvaluations.replaceWith(createEvalu);
    }
  }
}
buttonSubmit.addEventListener('click', createEvaluation);

function createeText(event) {
  event.preventDefault();
  const createTextArea = document.createElement('p');
  createTextArea.innerText = `Observações: ${textArea.value}`;
  textArea.replaceWith(createTextArea);
}
buttonSubmit.addEventListener('click', createeText);