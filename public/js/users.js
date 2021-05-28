async function getUsers() {
    return await fetch('http://localhost:3000/users')
            .then((response) => response.json())
            .then((data) => data);
}