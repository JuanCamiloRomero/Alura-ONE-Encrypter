var input = document.querySelector(".text-input");
var output = document.querySelector("#msg");

input.addEventListener("click", function() {
  input.select()
});

var botonEncryptar = document.querySelector("#btn-encriptar");
botonEncryptar.addEventListener("click", function(event) {
  event.preventDefault();
  validate();
});

var botonDesencryptar = document.querySelector("#btn-desencriptar");
botonDesencryptar.addEventListener("click", function(event) {
  event.preventDefault();
  decrypt();
});

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", function(event) {
  event.preventDefault();
  copy();
});