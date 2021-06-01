let createProfile = document.querySelector('.create-profile-form');
let createUserName = document.querySelector('#user-name');
let createEmail = document.querySelector('#email-adress');

createProfile.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch('http://localhost:3000/profiles', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            userName: createUserName.value,
            email: createEmail.value
        })
    }).then((response) => response.text()).then((data) => window.history.go());
})
