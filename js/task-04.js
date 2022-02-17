const counterValRef = document.querySelector(`#value`);
console.log(counterValRef);
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
let counterValue = 0;

function increment(){
    counterValRef.textContent = counterValue += 1;
}
function decrement(){
    counterValRef.textContent = counterValue -= 1;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
console.log(btnIncrement);
