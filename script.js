var backbutton = document.querySelector("#backbutton");
var entrar = document.querySelector("#entrar");
var cadastrar = document.querySelector("#cadastrar");
var nome = document.querySelector("#nome");
var confirm = document.querySelector("#confirm");



entrar.addEventListener("click",()=>{
    backbutton.style.animation = "moveLeft 0.2s linear forwards"
    nome.style.display= "none";
    confirm.style.display = "none"
    entrar.style.color = "#fff";
    cadastrar.style.color = "#000";
})
cadastrar.addEventListener("click",()=>{
    backbutton.style.animation = "moveRight 0.2s linear forwards"
    nome.style.display= "block";
    confirm.style.display = "block"
    cadastrar.style.color = "#fff";
    entrar.style.color = "#000";

})