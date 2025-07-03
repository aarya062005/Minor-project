document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing

  const passwordFields = document.querySelectorAll('input[type="password"]');
  if (passwordFields[0].value !== passwordFields[1].value) {
   alert("Passwords do not match!");
    return;
  }

  alert("Registration Successful!");
});


