document.addEventListener('DOMContentLoaded', function () {
  // Form Elements
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const forgotPasswordLink = document.querySelector('.forgot-password');
  const submitButton = loginForm.querySelector('button');
  const registerLink = document.querySelector('.register-link');

  // Email and password validation pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  // Fade-in effect for the form
  const formContainer = document.querySelector('.form-container');
  formContainer.style.opacity = 0;
  setTimeout(function () {
    formContainer.style.transition = 'opacity 1s ease-in';
    formContainer.style.opacity = 1;
  }, 100);

  // Input focus effect
  function handleFocus(input) {
    input.style.borderColor = '#3498db';
    input.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
  }

  function handleBlur(input) {
    input.style.borderColor = '#ccc';
    input.style.backgroundColor = 'transparent';
  }

  // Add event listeners to inputs for focus and blur
  emailInput.addEventListener('focus', function () {
    handleFocus(emailInput);
  });

  passwordInput.addEventListener('focus', function () {
    handleFocus(passwordInput);
  });

  emailInput.addEventListener('blur', function () {
    handleBlur(emailInput);
  });

  passwordInput.addEventListener('blur', function () {
    handleBlur(passwordInput);
  });

  // Form validation
  function validateForm() {
    let valid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Email validation
    if (!email.match(emailPattern)) {
      showError('Please enter a valid email address.');
      valid = false;
    }

    // Password validation
    if (password === '') {
      showError('Password cannot be empty.');
      valid = false;
    }

    return valid;
  }

  // Show error message
  function showError(message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    loginForm.insertBefore(errorMessage, loginForm.firstChild);
    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  }

  // Form submission handler
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate a successful login (for demo purposes)
      loginForm.reset(); // Clear form fields
      showSuccess('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = 'home.html'; // Redirect to home page
      }, 1500);
    }
  });

  // Show success message
  function showSuccess(message) {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = message;
    loginForm.insertBefore(successMessage, loginForm.firstChild);
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  }

  // Social login redirect (simulate redirect)
  document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', function () {
      const buttonText = this.innerText.toLowerCase();
      showSuccess(`${buttonText} login in progress...`);
      setTimeout(() => {
        window.location.href = `${buttonText}-login.html`; // Simulated social login redirection
      }, 1500);
    });
  });

  // "Forgot Password" and "Register Here" link animations
  forgotPasswordLink.addEventListener('mouseenter', function () {
    this.style.textDecoration = 'underline';
  });

  forgotPasswordLink.addEventListener('mouseleave', function () {
    this.style.textDecoration = 'none';
  });

  registerLink.addEventListener('mouseenter', function () {
    this.style.fontWeight = 'bold';
  });

  registerLink.addEventListener('mouseleave', function () {
    this.style.fontWeight = 'normal';
  });
  function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    //validation
    if (email === "user@example.com" && password === "password123") {
        // Redirect to the landing page
        window.location.href = "landing.html";
        return false;  // Prevent form submission
    } else {
        alert("Invalid login credentials.");
        return false;  // Prevent form submission
    }
}
});
