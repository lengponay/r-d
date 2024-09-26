function storeEmail(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  // Validate email format (basic example)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Send email to the server
  fetch('/api/store-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(response => {
      if (response.ok) {
        return response.json(); // Get JSON response
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      if (data.success) {
        alert('Email stored successfully.'); // Generic message without sensitive info
        displayUserEmail(email); // Call function to update UI
      } else {
        alert('Error storing email: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
}

// Function to display user email in the UI and log it (conditionally)
function displayUserEmail(email) {
  const displayArea = document.getElementById('emailDisplay');
  displayArea.textContent = `Your email: ${email}`; // Update the content with the email
  
  // Log the email to the console in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`User email: ${email}`); // Log only in development
  }
}
