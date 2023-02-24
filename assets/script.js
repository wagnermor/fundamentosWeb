console.log("Estou conectado!");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const caracteres = document.querySelector("#countChar");

let enviar = document.getElementById("enviar");

let nomeOk = false;
let emailOk= false;
let assuntoOk = false;

//form.addEventListener("submit", (event) => event.preventDefault());

nome.style.width='100%';
email.style.width='100%';
assunto.style.width='100%';
assunto.style.height='10rem';
caracteres.innerHTML=`${200}`;

let number = 0;
let numberTow = 0;

enviar.addEventListener("click",enviaForm);
nome.addEventListener("keyup",validaNome);
email.addEventListener("keyup",validaEmail);
assunto.addEventListener("keyup",validaAssunto);

function validaNome() {
  if(nome.value.length < 3) {
    nome.style.background='salmon';
    nomeOk = false;
  } else {
    nome.style.background='#282';
    nomeOk= true;
  }
}

function validaEmail() {
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    email.style.background='salmon';
    emailOk = false;
  } else {
    email.style.background='#282';
    emailOk= true;
  }
}

function validaAssunto() {
  if(assunto.value.length < 10 || assunto.value.length > 200) {
    assunto.style.background='salmon';
    assuntoOk = false;
  } else {
    assunto.style.background='#282';
    assuntoOk= true;
  }
  let numeroCaracteres = 200;
  numeroCaracteres += (assunto.value.length * -1);
  caracteres.innerHTML=`${numeroCaracteres}`;
}

function enviaForm(evt) {
  evt.preventDefault();
  if(nomeOk && emailOk && assuntoOk)
    alert(`${nome.value}, obrigado pelo contato, em breve retornaremos.`);
  else
    alert(`Por favor, preencha todos os campos corretamente`);
}

fetch(`https://api.chucknorris.io/jokes/random`).then(response=>{
  return response.json()
}).then(joke=>{
  console.log(joke.value)
})