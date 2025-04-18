function passwordRetriever() {
  let inputPassword = document.querySelector("#password").value;
  console.log(inputPassword);
  const hasUppercase = /[A-Z]/.test(inputPassword);

  if (inputPassword.length < 9) {
    console.log("testo corto!");
  }
  if (!hasUppercase) {
    console.log("no maiuscole!");
  }
}
