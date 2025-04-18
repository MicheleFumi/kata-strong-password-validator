function passwordRetriever() {
  let inputPassword = document.querySelector("#password").value;
  console.log(inputPassword);
  const hasUppercase = /[A-Z]/.test(inputPassword);
  const hasNumber = /[0-9]/.test(inputPassword);
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);
  /* validation fail */
  if (
    inputPassword.length < 9 ||
    !hasUppercase ||
    !hasNumber ||
    !specialChars
  ) {
    const notPassed = document.getElementsByClassName("not-passed");
    for (const element of notPassed) {
      element.classList.remove("d-none");
    }

    const validationText = document.getElementsByClassName("validation-text");
    for (const element of validationText) {
      element.classList.add("text-danger");
    }
  }
  /* validation success*/

  if (inputPassword.length >= 9 || hasUppercase || hasNumber || specialChars) {
    const passed = document.getElementsByClassName("passed");
    for (const element of passed) {
      element.classList.remove("d-none");
    }
    const notPassed = document.getElementsByClassName("not-passed");
    for (const element of notPassed) {
      element.classList.add("d-none");
    }

    const validationText = document.getElementsByClassName("validation-text");
    for (const element of validationText) {
      element.classList.remove("text-danger");
      element.classList.add("text-success");
    }
  }
}
