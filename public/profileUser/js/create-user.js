let createUser = document.querySelector('.create-acc-form');
let createName = document.querySelector('#name');
let createGender = document.querySelector('#gender');
let createBirthdate = document.querySelector('#birthdate');
let createCity = document.querySelector('#city');
let createLoadImage = document.querySelector('#loadImage');


createUser.addEventListener('submit', function(e) {
    // For the event 'submit' the browser as a default event handler
    (e).preventDefault();

    let data = new FormData(); //Create an object of the type form data
    data.append('name', createName.value);
    data.append('gender', createGender.value);
    data.append('birthday', createBirthdate.value);
    data.append('city', createCity.value);
    data.append('imgFile', createLoadImage.files[0]);

    fetch('http://localhost:3000/users', {
        method: 'POST',
        body: data
        // headers: {
        //     'Content-type': 'application/json'
        // },
        // body: JSON.stringify({
        //     name: createName.value,
        //     gender: createGender.value,
        //     birthday: createBirthdate.value,
        //     city: createCity.value
        // })
    }).then((response) => response.text()).then((data) => window.history.go());    
});