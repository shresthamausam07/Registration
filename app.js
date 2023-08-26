    const registerButton = document.getElementById('registerButton');
    const registrationDialog = document.getElementById('registrationDialog');
    const closeButton = document.getElementById('closeButton');
    const submitButton = document.getElementById('submitButton');

    registerButton.addEventListener('click', () => {
      registrationDialog.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
      registrationDialog.style.display = 'none';
    });

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      registerButton.textContent = "Login";
      registrationDialog.style.display = 'none';
    });

    registrationDialog.addEventListener('click', (event) => {
      if (event.target === registrationDialog) {
        registrationDialog.style.display = 'none';
      }
    });