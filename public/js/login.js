let signInForm = document.querySelector('.sign-in-form');
let registerForm = document.querySelector('.register-form');

signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('sign-in-email').value;
    let password = document.getElementById('sign-in-password').value;
    fetch('http://localhost:3000/signinuser/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => resp.text()).then((data) => alert(data));
})

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let rePassword = document.getElementById('register-re-enter-password').value;
    if(password !== rePassword) {
        return;
    }
    fetch('http://localhost:3000/signinuser/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => resp.text()).then((data) => alert(data));
})
