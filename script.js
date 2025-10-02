document.getElementById("registerForm").onsubmit = function(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
  ;

  const output = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Birthdate:</strong> ${birthdate}</p>
    <p><strong>Interests:</strong> ${interests}</p>
  `;

  document.getElementById("output").innerHTML = output;

 
};