async function logout() {
    const response = await fetch('api/users/logout', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    };
}

const logoutBtn = document.getElementById('logout-btn')
logoutBtn.addEventListener('click',logout);