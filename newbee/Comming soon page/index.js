const emailInput = document.querySelector('#emainInput');
const smallError = document.querySelector('#smallError');

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (emailInput.value == "") {
        smallError.classList.add('error');
        emailInput.classList.add('error');
    } else {
        smallError.classList.remove('error');
        emailInput.classList.remove('error');
        alert('Verified email');
    }
});