var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

var formulario=document.getElementById("formulario");

formulario.addEventListener("submit",recibirDatos);

function recibirDatos(e){
    e.preventDefault();
    var nombre=document.getElementById("nombre").value;
    var celular=document.getElementById("celular").value;
    var correo=document.getElementById("correo").value;
    var mensajeNom=document.getElementsByClassName("errorNom")[0];
    var xmarkErrorNom=document.getElementsByClassName("xmarkErrorNom")[0];

    var mensajeCel=document.getElementsByClassName("errorCel")[0];
    var xmarkErrorCel=document.getElementsByClassName("xmarkErrorCel")[0];

    var mensajeCo=document.getElementsByClassName("errorCo")[0];
    var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];

    var checkMarkNom=document.getElementsByClassName("checkMarkNom")[0];
    var checkMarkCel=document.getElementsByClassName("checkMarkCel")[0];
    var checkMarkCorreo=document.getElementsByClassName("checkMarkCorreo")[0];

    if (!regexNombre.test(nombre)) {
        mensajeNom.classList.remove("ocultar");
        document.getElementById("nombre").classList.add("errorInput");
        xmarkErrorNom.classList.remove("ocultar");
        checkMarkNom.classList.add("ocultar");
    }else{
        mensajeNom.classList.add("ocultar");
        document.getElementById("nombre").classList.add("correctInput");
        xmarkErrorNom.classList.add("ocultar");
        checkMarkNom.classList.remove("ocultar");
        enviarDatos++;
    }
    if (!regexTelefonoNacional.test(celular)) {
        mensajeCel.classList.remove("ocultar");
        document.getElementById("celular").classList.add("errorInput");
        xmarkErrorCel.classList.remove("ocultar");
        checkMarkCel.classList.add("ocultar");
    }else{
        mensajeCel.classList.add("ocultar");
        document.getElementById("celular").classList.add("correctInput");
        xmarkErrorCel.classList.add("ocultar");
        checkMarkCel.classList.remove("ocultar");
        enviarDatos++;
    }
    if (!regexCorreo.test(correo)) {
        mensajeCo.classList.remove("ocultar");
        document.getElementById("correo").classList.add("errorInput");
        xmarkErrorCorreo.classList.remove("ocultar");
        checkMarkCorreo.classList.add("ocultar");
    }else{
        mensajeCo.classList.add("ocultar");
        document.getElementById("correo").classList.add("correctInput");
        xmarkErrorCorreo.classList.add("ocultar");
        checkMarkCorreo.classList.remove("ocultar");
        enviarDatos++;
    }
    if(enviarDatos==3){
        formulario.submit();
    }else{
        enviarDatos=0;
    }
}
