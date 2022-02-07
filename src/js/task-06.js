const inputRef = document.querySelector(`#validation-input`);
console.log(inputRef);
inputRef.addEventListener('blur', (evt) => {

    if (+inputRef.dataset.length === inputRef.value.length) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }
    else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
});
