async function getProfiles() {
    return await fetch('http://localhost:3000/profiles')
            .then((response) => response.json())
            .then((data) => data);
}
