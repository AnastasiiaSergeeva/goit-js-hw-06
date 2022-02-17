const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);

function onInputChange(event) {
    const value = event.currentTarget.value;
    outputRef.textContent = value ? value : "Anonymous";
   
}
inputRef.addEventListener('input', onInputChange);