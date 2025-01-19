// forgot-password.js

document.getElementById('forgot-password-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const notification = document.getElementById('notification');
  
    // Simple validation
    if (!email) {
      notification.style.color = 'red';
      notification.textContent = 'Please enter a valid email address.';
      return;
    }
  
    // Simulate email sent notification
    notification.style.color = 'green';
    notification.textContent = `A password reset link has been sent to ${email}.`;
  });
  