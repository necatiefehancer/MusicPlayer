
var form = document.querySelector(".need-validations");


form.addEventListener("submit", function(event) {
  if(!form.checkValidity()) {
    event.preventDefault();
  }
  form.classList.add("was-validated");
});
