const btnChangeColor = document.querySelector('.change-color');
const spanTextColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function btnClickAction() {
  spanTextColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor=getRandomHexColor();
}

btnChangeColor.addEventListener('click',btnClickAction);