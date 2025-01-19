// register.js

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const notification = document.getElementById('notification');
  
    // Simple validation
    if (!name || !email || !password) {
      notification.style.color = 'red';
      notification.textContent = 'All fields are required.';
      return;
    }
  
    // Simulate successful registration
    notification.style.color = 'green';
    notification.textContent = `Account created successfully for ${name}.`;
  });
  