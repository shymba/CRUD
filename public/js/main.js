document.addEventListener('DOMContentLoaded', async function() {
    let profiles = await getProfiles();
    let profileDashboard = document.querySelector('.profile-dashboard');
    profileDashboard.innerHTML = '';
    profiles.forEach((profile) => {
        let profileHTML = `
                <div class="col-4">
                    <div class="card">
                        <div class="user-info">
                            <p class="userName">User name: ${profile.userName}</p>
                            <p class="email">Email: ${profile.email}</p>
                        </div>
                    </div>
                </div>
            `;
            profileDashboard.insertAdjacentHTML('beforeend', profileHTML);
    })
});
