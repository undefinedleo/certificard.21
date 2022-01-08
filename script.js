function mudaTema() {
  document.body.classList.toggle("dark");
}

var lista = document.getElementsByTagName("li");

for (var i = 0; i < lista.length; i++) {
  lista[i].setAttribute("onmouseenter", "showImg()");
  lista[i].setAttribute("onmouseleave", "ocultarImagem()");
}

function showImg() {
  var imagem = event.currentTarget.firstChild.lastChild;
  imagem.style.opacity = "1";
}

function ocultarImagem() {
  var imagem = event.currentTarget.firstChild.lastChild;
  imagem.style.opacity = "0";
}