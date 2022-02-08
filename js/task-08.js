const formRef= document.querySelector('form.login-form')
function submitForm (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        return alert("Пожалуйста, заполните все поля формы");
    }
    const formData = {email, password};
    console.log(formData);

    formRef.reset();
};

formRef.addEventListener('submit', submitForm);