const passwordBox = document.querySelector('#password');
const confirmPasswordBox = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('.error')
const btn = document.querySelector('button');

btn.addEventListener ('click', () => {
    if (passwordBox.value !== confirmPasswordBox.value){
        errorMessage.innerHTML = "* Passwords don't match";
    } else {
        errorMessage.innerHTML = ''
    };
});