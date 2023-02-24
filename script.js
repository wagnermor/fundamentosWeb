console.log("Estou conectado!");

const form = document.querySelector("form");

let nomeForm = document.getElementById("nome");
let enviar = document.getElementById("enviar");

//form.addEventListener("submit", (event) => event.preventDefault());

let number = 0;

nomeForm.addEventListener("keyup", valida());

enviar.addEventListener("click",noReload);

function valida() {
  if(nomeForm.value.length < 3)
    console.log("nome inválido")
  
    console.log("Digitado!")
}

function noReload(evt) {
  evt.preventDefault();
  console.log(`Clicado ${++number}\n`)
}
