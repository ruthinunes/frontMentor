const emailInput = document.querySelector('#emainInput');
const allInputs = document.querySelectorAll('.form_email');
const smallError = document.querySelector('#smallError');
const formBtn = document.querySelector('#form');

formBtn.addEventListener('submit', function (e) {
    e.preventDefault();

    if (emailInput.value == "") {
        smallError.classList.add('error');
        emailInput.classList.add('error');
        smallError.innerHTML = 'Whoops! It looks like you forgot to add your email'

    } else if (!emailValidation(emailInput.value)) {
        smallError.classList.add('error');
        emailInput.classList.add('error');
        smallError.innerHTML = 'Please provide a valid email address'
    } else {
        smallError.classList.remove('error');
        emailInput.classList.remove('error');
        alert('Verified email');
    }
});

function emailValidation(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}