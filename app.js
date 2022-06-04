function ResetarFiltro(){
    var element = document.getElementById("imgID");
    element.classList.remove("imgPretoBranco");
    element.classList.remove("imgInverter");
}

function AplicarEfeitoColorido() {
    ResetarFiltro();
}

function AplicarEfeitoPretoBranco() {
    ResetarFiltro();

    var element = document.getElementById("imgID");
    element.classList.add("imgPretoBranco");


    var img    = element.toDataURL("image/png");
    document.write('<img src="'+img+'"/>');
}

function AplicarEfeitoInverter() {
    ResetarFiltro();

    var element = document.getElementById("imgID");
    element.classList.add("imgInverter");
}