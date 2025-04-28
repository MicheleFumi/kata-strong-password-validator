function passwordRetriever() {
  let inputPassword = document.querySelector("#password").value;

  const hasUppercase = /[A-Z]/.test(inputPassword);
  const hasNumber = /[0-9]/.test(inputPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

  const validationBlocks = document.querySelectorAll(".validation-block");
  const strengthBar = document.querySelector(".progress-bar");

  let strength = 0;

  // Controlli e aggiornamenti
  if (inputPassword.length >= 9) {
    strength++;
    updateValidationBlock(validationBlocks[0], true);
  } else {
    updateValidationBlock(validationBlocks[0], false);
  }

  if (hasUppercase) {
    strength++;
    updateValidationBlock(validationBlocks[1], true);
  } else {
    updateValidationBlock(validationBlocks[1], false);
  }

  if (hasNumber) {
    strength++;
    updateValidationBlock(validationBlocks[2], true);
  } else {
    updateValidationBlock(validationBlocks[2], false);
  }

  if (hasSpecialChar) {
    strength++;
    updateValidationBlock(validationBlocks[3], true);
  } else {
    updateValidationBlock(validationBlocks[3], false);
  }

  // Gestione barra della forza
  if (strength === 0) {
    strengthBar.style.width = "0%";
    strengthBar.className = "progress-bar";
  } else if (strength === 1) {
    strengthBar.style.width = "25%";
    strengthBar.className = "progress-bar bg-danger";
  } else if (strength === 2) {
    strengthBar.style.width = "50%";
    strengthBar.className = "progress-bar bg-warning";
  } else if (strength === 3) {
    strengthBar.style.width = "75%";
    strengthBar.className = "progress-bar bg-warning";
  } else if (strength === 4) {
    strengthBar.style.width = "100%";
    strengthBar.className = "progress-bar bg-success";
  }
}

// Funzione di supporto per non ripetere codice
function updateValidationBlock(block, isValid) {
  const passedIcon = block.querySelector(".passed");
  const notPassedIcon = block.querySelector(".not-passed");
  const text = block.querySelector(".validation-text");

  if (isValid) {
    passedIcon.classList.remove("d-none");
    notPassedIcon.classList.add("d-none");
    text.classList.add("text-success");
    text.classList.remove("text-danger");
  } else {
    passedIcon.classList.add("d-none");
    notPassedIcon.classList.remove("d-none");
    text.classList.add("text-danger");
    text.classList.remove("text-success");
  }
}
