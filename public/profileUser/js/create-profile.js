let createProfile = document.querySelector('.create-profile-form');
let createUserName = document.querySelector('#user-name');
let createEmail = document.querySelector('#email-adress');

createProfile.addEventListener('submit', function(e) {
    e.preventDefault();

    let data = new FormData();
    data.append('userName', createUserName.value);
    data.append('email', createEmail.value);

    fetch('http://localhost:3000/profiles', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
})
