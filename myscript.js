const form = document.getElementsByTagName('form')[0];
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname')
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorFirst = document.querySelector('.errorfirst');
const errorLast = document.querySelector('.errorlast');
const errorEmail = document.querySelector('.erroremail');
const errorPassword = document.querySelector('.errorpassword');
const formContainer = document.querySelector('.formcontainer');
const inpt = document.getElementsByTagName('input');
const alertMessage = document.querySelectorAll('input+p');
for (let i = 0; i < inpt.length; i++) {
    inpt[i].addEventListener('input', function (event) {
        if (inpt[i].validity.valid) {
            alertMessage[i].innerHTML = "";
            inpt[i].className = 'valid';
        } else {
            showError();
            formContainer.style.height = '370px';
        };
    });
};
form.addEventListener('submit', function (event) {

    for (i = 0; i < inpt.length; i++) {
        if (!inpt[i].validity.valid) {
            formContainer.style.height = '370px';

            showError();
            event.preventDefault();
        }

    }



});

function showError() {
    if (firstName.validity.valueMissing) {
        errorFirst.innerHTML = "First Name can not be empty";
        firstName.className = 'errorinput';

    }
    if (lastName.validity.valueMissing) {
        errorLast.innerHTML = "Last Name can not be empty";
        lastName.className = 'errorinput';
    }
    if (password.validity.valueMissing) {
        errorPassword.innerHTML = "Password can not be empty";
        password.className = 'errorinput';
    }
    if (email.validity.valueMissing) {
        errorEmail.innerHTML = "Email can not be empty";
        email.className = 'errorinput';
    }
    if (email.validity.typeMismatch) {
        errorEmail.innerHTML = "Entered Value needs to be an email address";
        email.className = 'errorinput';
    }


}
