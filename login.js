// Handling Login Form Submission
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For now, just log the login data (in a real app, validate this against your server)
    console.log({
        email,
        password
    });

    // Reset form
    document.getElementById('login-form').reset();

    alert('Login successful!');
}
