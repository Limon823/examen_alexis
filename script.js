let boton = document.getElementById("botonhabilidades");
let habilidades = document.getElementById("habilidades");

function ocultarMostrar() {
if (habilidades.style.display=="none") {
habilidades.style.display="block";
} else {
habilidades.style.display="none";
}
}

function cambiarColor(evento) {
if (evento.key=="b") {
document.body.style.backgroundColor="lightblue";
}
if (evento.key=="r") {
document.body.style.backgroundColor="lightcoral";
}
if (evento.key=="n") {
document.body.style.backgroundColor="white";
}
}

boton.addEventListener("click", ocultarMostrar);
document.addEventListener("keydown", cambiarColor);