document.addEventListener('DOMContentLoaded', async function() {
    let users = await getUsers();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    users.forEach((user) => {
        let userHTML = `
                <div class="col-4">
                    <div class="card">
                        <img src="${user.imageURL}" class="image" alt="user-photo">
                        <div class="user-info">
                            <h5 class="name">${user.name}</h5>
                            <p class="gender">${user.gender}</p>
                            <p class="bthday">${user.birthday}</p>
                            <p class="city">${user.city}</p>
                            <button type="button" class="btn btn-outline-success">Edit</button>
                            <button type="button" class="btn btn-outline-danger red">Delete</button>
                            <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#createProfileModal">Create profile</button>
                        </div>
                    </div>
                </div>`;
            articles.insertAdjacentHTML('beforeend', userHTML);
    })
});
