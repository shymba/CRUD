//This event happens when the object document is completely loaded

document.addEventListener('DOMContentLoaded', async function() {
    addUsers();
    addProfiles();
});

async function addUsers() {
    let users = await getUsers();
    let articles = document.querySelector('.articles');
    articles.innerHTML = '';
    users.forEach((user) => {
        let userHTML = `
            <article class="d-flex justify-content-between align-items-center article-inline">
                <div class="id w5">${user.id}</div>
                <div class="name w30">${user.name}</div>
                <div class="gender w10">${user.gender}</div>
                <div class="birthday w25">${user.birthday}</div>
                <div class="city w15">${user.city}</div>
                <div class="edit w10"><button class="btn btn-link">edit</button></div>
                <div class="delete w5"><button class="btn btn-link">X</button></div>
            </article>`;
            articles.insertAdjacentHTML('beforeend', userHTML);
    })
};

async function addProfiles() {
    let profiles = await getProfiles();
    let profileDashboard = document.querySelector('.profile-dashboard');
    profileDashboard.innerHTML = '';
    profiles.forEach((profile) => {
        let profileHTML = `
            <div class="profile-dashboard d-flex justify-content-between align-items-center article-inline">
                <div class="id w10">${profile.id}</div>
                <div class="user-name w45">${profile.userName}</div>
                <div class="email-adress w45">${profile.email}</div>
            </div>
            `;
            profileDashboard.insertAdjacentHTML('beforeend', profileHTML);
    })
}
