const wrapper = document.querySelector('.wrapper');
const signupLink = document.querySelector('.signup-link');
const loginLink = document.querySelector('.login-link');

loginLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signup');
    wrapper.classList.remove('animate-login');
});

signupLink.addEventListener('click', () => {
    wrapper.classList.add('animate-login');
    wrapper.classList.remove('animate-signup');
});

document.getElementById('enter-button').addEventListener('click', function() {
    window.location.href = 'your-target-url.html'; // Replace with your desired URL
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Here you can add any additional validation if needed
    if (this.checkValidity()) {
        // If valid, redirect to the desired URL
        window.location.href = 'profile.html'; // Change to your desired URL
    } else {
        // If not valid, show some error message if needed
        this.reportValidity();
    }
});

document.getElementById('log-in-form').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Check if the form is valid
    if (this.checkValidity()) {
        // Redirect to the desired URL upon successful validation
        window.location.href = 'dashboard.html'; // Change to your desired URL
    } else {
        // Show validation messages if the form is invalid
        this.reportValidity();
    }
});