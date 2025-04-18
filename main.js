function passwordRetriever() {
  let inputPassword = document.querySelector("#password").value;
  console.log(inputPassword);
  const hasUppercase = /[A-Z]/.test(inputPassword);
  const hasNumber = /[0-9]/.test(inputPassword);
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);
  if (inputPassword.length < 9) {
    document.querySelector("#not-passed").classList.remove("d-none");
    document.querySelector("#validation-text").classList.add("text-danger");
  }
  if (!hasUppercase) {
    console.log("no maiuscole!");
    document.querySelector("#not-passed").classList.remove("d-none");
    document.querySelector("#validation-text").classList.add("text-danger");
  }
  if (!hasNumber) {
    console.log("no numeri!");
    document.querySelector("#not-passed").classList.remove("d-none");
    document.querySelector("#validation-text").classList.add("text-danger");
  }
  if (!specialChars) {
    console.log("no caratteri speciali!");
    document.querySelector("#not-passed").classList.remove("d-none");
    document.querySelector("#validation-text").classList.add("text-danger");
  }
}
