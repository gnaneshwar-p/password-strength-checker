// Get the elements from the DOM
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthMessage = document.getElementById('strength-message');

// Add an event listener to the password input field to check the strength on input
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const result = checkPasswordStrength(password);
    updateUI(result);  // Pass the result to the updateUI function
});

// Function to check the password strength based on different criteria
function checkPasswordStrength(password) {
    let score = 0;

    // Criteria for password strength
    if (password.length >= 8) score++; // Length check
    if (/[A-Z]/.test(password)) score++; // Uppercase letter check
    if (/[a-z]/.test(password)) score++; // Lowercase letter check
    if (/\d/.test(password)) score++; // Digit check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++; // Special character check

    return score;
}

// Function to update the UI based on the password strength score
function updateUI(score) {
    if (score === 0) {
        strengthBar.className = 'strength-bar weak';
        strengthMessage.textContent = 'Password is too weak';
    } else if (score === 1) {
        strengthBar.className = 'strength-bar weak';
        strengthMessage.textContent = 'Weak password, try adding more characters or variety.';
    } else if (score === 2) {
        strengthBar.className = 'strength-bar moderate';
        strengthMessage.textContent = 'Moderate strength. Consider adding numbers or special characters.';
    } else if (score === 3) {
        strengthBar.className = 'strength-bar moderate';
        strengthMessage.textContent = 'Good strength, but could be stronger with more variety.';
    } else if (score >= 4) {
        strengthBar.className = 'strength-bar strong';
        strengthMessage.textContent = 'Strong password! Great job!';
    }
}
