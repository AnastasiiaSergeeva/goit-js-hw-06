const btnChangeColor = document.querySelector('.change-color');
const spanTextColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function btnClickAction() {
  const getColor = getRandomHexColor
  spanTextColor.textContent = getColor();
  document.body.style.backgroundColor=getColor();
}

btnChangeColor.addEventListener('click',btnClickAction);