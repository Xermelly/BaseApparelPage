const btnSubmit = document.querySelector("#btn-submit");

function verifyEmail(event) {
  const inputEmail = document.querySelector("#email");

  function invalidSub(event) {
    this.classList.add("invalid");
    document.querySelector(".invalid-alert").classList.add("invalid");
    event.preventDefault();
  }
  inputEmail.addEventListener("invalid", invalidSub);
}
btnSubmit.addEventListener("click", verifyEmail);
