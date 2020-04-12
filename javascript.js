let regexNome = /^.{2,}$/
let regexCpf = /^(([\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2})|([\d]{11}))$/
let regexTel = /^\(?[0-9]{1,3}\)?\s?[0-9]{5}\-?[0-9]{4}$/;
let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})$/;
let regexSenha = /^\S{8,}$/    
let regexEnde = /((\w*)+\s+(\w*)*)/;   

function validar(){
    let campNome = document.getElementById("nome");
    let campCpf = document.getElementById("cpf");
    let campTel = document.getElementById("tel");
    let campEnd = document.getElementById("end");
    let campEmail = document.getElementById("email");
    let campSenha = document.getElementById("senha");

    let textNome = document.getElementById("textNome");
    let textCpf = document.getElementById("textCpf");
    let textTel = document.getElementById("textTel");
    let textEnd = document.getElementById("textEnd");
    let textEmail = document.getElementById("textEmail");
    let textSenha = document.getElementById("textSenha");
    
    let valido = true;
    let confirmCadastro = document.getElementById("positiveAnswer");

    if(campNome.value == null || campNome.value == ""){
        campNome.style.borderColor = "#FF0000";
        textNome.innerHTML = "Por favor, ensira seu nome!";
        textNome.style.color = "#FF0000";
        valido = false;

    }else if(!(regexNome.test(campNome.value))){
        campNome.style.borderColor = "#FF0000";
        textNome.innerHTML = "O nome precisa ter no mínimo 2 caracteres!";
        textNome.style.color = "#FF0000";
        valido = false;

    }else{
        textNome.innerHTML = "";   
        campNome.style.borderColor = "#ED8424"; 
    }

    if(campCpf.value == null || campCpf.value == ""){
        campCpf.style.borderColor = "#FF0000";
        textCpf.innerHTML = "Por favor, ensira seu CPF!";
        textCpf.style.color = "#FF0000";
        valido = false;

    }else if(!(regexCpf.test(campCpf.value))){
        campCpf.style.borderColor = "#FF0000";
        textCpf.innerHTML = "O CPF digitado é inválido!";
        textCpf.style.color = "#FF0000";
        valido = false;

    }else{
        textCpf.innerHTML = "";
        campCpf.style.borderColor = "#ED8424";
    }

    if(campTel.value == null || campTel.value == ""){
        campTel.style.borderColor = "#FF0000";
        textTel.innerHTML = "Por favor, ensira seu número de telefone!";
        textTel.style.color = "#FF0000";
        valido = false;
    
    }else if(!(regexTel.test(campTel.value))){
        campTel.style.borderColor = "#FF0000";
        textTel.innerHTML = "O número precisa ter no mínimo 9 dígitos sem contar com os - e ()";
        textTel.style.color = "#FF0000";
        valido = false;

    }else{
        textTel.innerHTML = "";  
        campTel.style.borderColor = "#ED8424"; 
    }

    if(campEmail.value == null || campEmail.value == ""){
        campEmail.style.borderColor = "#FF0000";
        textEmail.innerHTML = "Por favor, ensira seu email!";
        textEmail.style.color = "#FF0000";
        valido = false;

    }else if(!(regexEmail.test(campEmail.value))){
        campEmail.style.borderColor = "#FF0000";
        textEmail.innerHTML = "O Email digitado é inválido!";
        textEmail.style.color = "#FF0000";
        valido = false;

    }else{
        campEmail.style.borderColor = "#ED8424";
        textEmail.innerHTML = "";
    }

    if(campSenha.value == null || campSenha.value == ""){
        campSenha.style.borderColor = "#FF0000";
        textSenha.innerHTML = "Por favor, ensira uma senha!";
        textSenha.style.color = "#FF0000";
        valido = false;

    }else if(!(regexSenha.test(campSenha.value))){
        campSenha.style.borderColor = "#FF0000";
        textSenha.innerHTML = "A senha deve conter no mínimo 8 caracteres!";
        textSenha.style.color = "#FF0000";
        valido = false;

    }else{
        textSenha.innerHTML = "";
        campSenha.style.borderColor = "#ED8424";
    }

    if(campEnd.value == null || campEnd.value == ""){
        campEnd.style.borderColor = "#FF0000";
        textEnd.innerHTML = "Por favor, ensira seu endereço!";
        textEnd.style.color = "#FF0000";
        valido = false;

    }else if(!(regexEnde.test(campEnd.value))){
        campEnd.style.borderColor = "#FF0000";
        textEnd.innerHTML = "O endereço deve conter no mínimo duas palavras!";
        textEnd.style.color = "#FF0000";
        valido = false;

    }else{
        textEnd.innerHTML = "";
        campEnd.style.borderColor = "#ED8424";
    }

    if (valido){
        confirmCadastro.innerHTML = "Cadastro Concluído!";
        confirmCadastro.style.background = "#14f34c";
    }
}

function valLogin(){
    let campEmail = document.getElementById("email");
    let campSenha = document.getElementById("senha");

    let textEmail = document.getElementById("textEmail");
    let textSenha = document.getElementById("textSenha");

    let valido = true;
    let confirmLogin = document.getElementById("positiveAnswer");

    if(campEmail.value == null || campEmail.value == ""){
        campEmail.style.borderColor = "#FF0000";
        textEmail.innerHTML = "Por favor, ensira seu email!";
        textEmail.style.color = "#FF0000";
        valido = false;

    }else if(!(regexEmail.test(campEmail.value))){
        campEmail.style.borderColor = "#FF0000";
        textEmail.innerHTML = "O Email digitado é inválido!";
        textEmail.style.color = "#FF0000";
        valido = false;

    }else{
        campEmail.style.borderColor = "#ED8424";
        textEmail.innerHTML = "";
    }

    if(campSenha.value == null || campSenha.value == ""){
        campSenha.style.borderColor = "#FF0000";
        textSenha.innerHTML = "Por favor, ensira sua senha!";
        textSenha.style.color = "#FF0000";
        valido = false;

    }else{
        textSenha.innerHTML = "";
        campSenha.style.borderColor = "#ED8424";
    }

    if(valido){
        confirmLogin.innerHTML = "Login Concluído!";
        confirmLogin.style.background = "#14f34c";
    }
}