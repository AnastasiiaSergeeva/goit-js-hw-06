const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);

function onInputChange(event) {
    console.log(outputRef.textContent = event.currentTarget.value ? event.currentTarget.value : "Anonymous");
   
}
inputRef.addEventListener('input', onInputChange);