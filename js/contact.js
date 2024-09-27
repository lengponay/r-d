document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the form data
  const fullName = document.getElementById('full_name').value;
  const phoneNumber = document.getElementById('phone_number').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Store the data in localStorage
  localStorage.setItem('contactData', JSON.stringify({
    fullName: fullName,
    phoneNumber: phoneNumber,
    email: email,
    message: message
  }));

  // Retrieve and log the stored data
  const storedData = localStorage.getItem('contactData');
  if (storedData) {
    console.log('Stored Contact Data:', JSON.parse(storedData));
  }
  
  // Alert the user that the form was submitted
  alert('Your data has been saved locally.');
});
