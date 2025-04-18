function passwordRetriever() {
  let inputPassword = document.querySelector("#password").value;
  console.log(inputPassword);
  const hasUppercase = /[A-Z]/.test(inputPassword);
  const hasNumber = /[0-9]/.test(inputPassword);
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/.test(inputPassword);
  if (inputPassword.length < 9) {
    console.log("testo corto!");
  }
  if (!hasUppercase) {
    console.log("no maiuscole!");
  }
  if (!hasNumber) {
    console.log("no numeri!");
  }
  if (!specialChars) {
    console.log("no caratteri speciali!");
  }
}
