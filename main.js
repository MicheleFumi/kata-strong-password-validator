function passwordRetriever() {
  let inputPassword = document.querySelector("#password").value;

  const hasUppercase = /[A-Z]/.test(inputPassword);
  const hasNumber = /[0-9]/.test(inputPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);

  const validationBlocks = document.querySelectorAll(".validation-block");

  // Requisito 1: almeno 9 caratteri
  if (inputPassword.length >= 9) {
    validationBlocks[0].querySelector(".passed").classList.remove("d-none");
    validationBlocks[0].querySelector(".not-passed").classList.add("d-none");
    validationBlocks[0]
      .querySelector(".validation-text")
      .classList.remove("text-danger");
    validationBlocks[0]
      .querySelector(".validation-text")
      .classList.add("text-success");
  } else {
    validationBlocks[0].querySelector(".passed").classList.add("d-none");
    validationBlocks[0].querySelector(".not-passed").classList.remove("d-none");
    validationBlocks[0]
      .querySelector(".validation-text")
      .classList.add("text-danger");
    validationBlocks[0]
      .querySelector(".validation-text")
      .classList.remove("text-success");
  }

  // Requisito 2: almeno una maiuscola
  if (hasUppercase) {
    validationBlocks[1].querySelector(".passed").classList.remove("d-none");
    validationBlocks[1].querySelector(".not-passed").classList.add("d-none");
    validationBlocks[1]
      .querySelector(".validation-text")
      .classList.remove("text-danger");
    validationBlocks[1]
      .querySelector(".validation-text")
      .classList.add("text-success");
  } else {
    validationBlocks[1].querySelector(".passed").classList.add("d-none");
    validationBlocks[1].querySelector(".not-passed").classList.remove("d-none");
    validationBlocks[1]
      .querySelector(".validation-text")
      .classList.add("text-danger");
    validationBlocks[1]
      .querySelector(".validation-text")
      .classList.remove("text-success");
  }

  // Requisito 3: almeno un numero
  if (hasNumber) {
    validationBlocks[2].querySelector(".passed").classList.remove("d-none");
    validationBlocks[2].querySelector(".not-passed").classList.add("d-none");
    validationBlocks[2]
      .querySelector(".validation-text")
      .classList.remove("text-danger");
    validationBlocks[2]
      .querySelector(".validation-text")
      .classList.add("text-success");
  } else {
    validationBlocks[2].querySelector(".passed").classList.add("d-none");
    validationBlocks[2].querySelector(".not-passed").classList.remove("d-none");
    validationBlocks[2]
      .querySelector(".validation-text")
      .classList.add("text-danger");
    validationBlocks[2]
      .querySelector(".validation-text")
      .classList.remove("text-success");
  }

  // Requisito 4: almeno un carattere speciale
  if (hasSpecialChar) {
    validationBlocks[3].querySelector(".passed").classList.remove("d-none");
    validationBlocks[3].querySelector(".not-passed").classList.add("d-none");
    validationBlocks[3]
      .querySelector(".validation-text")
      .classList.remove("text-danger");
    validationBlocks[3]
      .querySelector(".validation-text")
      .classList.add("text-success");
  } else {
    validationBlocks[3].querySelector(".passed").classList.add("d-none");
    validationBlocks[3].querySelector(".not-passed").classList.remove("d-none");
    validationBlocks[3]
      .querySelector(".validation-text")
      .classList.add("text-danger");
    validationBlocks[3]
      .querySelector(".validation-text")
      .classList.remove("text-success");
  }
}
