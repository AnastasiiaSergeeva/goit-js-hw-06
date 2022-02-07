const inputRef = document.querySelector(`#font-size-control`);
console.log(inputRef);
const textRef = document.querySelector(`#text`);
console.log(textRef);
inputRef.addEventListener('input', (evt) => {
    textRef.style.fontSize = inputRef.value + "px";
});