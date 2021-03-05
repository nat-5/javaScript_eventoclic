var titulo_html = document.getElementById('titulo');
var caja_html = document.getElementById ('caja');
var boton_html = document.getElementById('boton');

function sriptTitulo(){
 
    titulo_html.classList.remove("titulo");
    titulo_html.classList.add("titulo2");
};
function sriptCaja(){
  caja_html.classList.add("caja2");
};
boton_html.addEventListener('click', sriptCaja);

boton_html.addEventListener('click', sriptTitulo);