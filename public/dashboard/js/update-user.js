{
    let articlesBlock = document.querySelector('.articles');
    let updateForm = document.querySelector('.update-acc-form');
    let nameInp = document.querySelector('#update-name');
    let genderInp = document.querySelector('#update-gender');
    let birthdateInp = document.querySelector('#update-birthdate');
    let cityInp = document.querySelector('#update-city');
    let id;

    articlesBlock.addEventListener('click', async function(e) {
        if(e.target.classList.contains('btn-edit')) {
            id = e.target.parentNode.parentNode.querySelector('.id').value;
            let userInfo = await fetch('http://localhost:3000/users/' + id)
                    .then((resp) => resp.json())
                    .then((data) => data)

            nameInp.value = userInfo.name;

            genderInp.value = userInfo.gender;

            birthdateInp.value = userInfo.birthday;

            cityInp.value = userInfo.city
        }
    })

    updateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        fetch('http://localhost:3000/users/' + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInp.value,
                gender: genderInp.value,
                birthday: birthdateInp.value,
                city: cityInp.value
            })
        }).then((resp) => resp.text())
        .then(() => window.history.go());
    })
}
