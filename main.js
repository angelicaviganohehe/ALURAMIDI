function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    }
    document.querySelectorAll('.tecla');
const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom('#som_tecla_toim');
    contador = contador + 1;
    console.log(contador);
    listaDeTeclas[contador]= tocaSomPom;}
    function tocaSom(idElementoAudio){
        document.querySelector(idElementoAudio).play();

    }
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_splash');
    };

