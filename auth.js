// Handling Sign Up Form Submission
function handleSignUp(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // For now, just log the user data (in a real app, send it to the server)
    console.log({
        fullName,
        email,
        password
    });

    // Reset form
    document.getElementById('signup-form').reset();

    alert('Sign-up successful! You can now log in.');
}
