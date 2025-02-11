function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('strength-feedback');
    const suggestions = document.getElementById('password-suggestions');

    const result = zxcvbn(password); // Returns a result object

    // Display password strength feedback
    feedback.innerText = `Strength: ${result.score}/4`;
    
    // Provide suggestions if password is weak
    if (result.score < 3) {
        suggestions.innerHTML = `<strong>Suggestions:</strong> ${result.feedback.suggestions.join(', ')}`;
    } else {
        suggestions.innerHTML = 'Great! Your password is strong.';
    }
}

function generatePasswordSuggestions(password) {
    let suggestions = [];

    if (password.length < 8) {
        suggestions.push('Password should be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
        suggestions.push('Add an uppercase letter');
    }
    if (!/[0-9]/.test(password)) {
        suggestions.push('Include at least one number');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        suggestions.push('Add at least one special character');
    }

    return suggestions;
}


