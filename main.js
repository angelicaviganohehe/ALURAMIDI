function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    }

const listaDeTeclas = document.querySelectorAll('.tecla');

//Estrutura de repetição - Enquanto
for(let contador=0;contador < listaDeTeclas.length;contador++){
    const tecla =listaDeTeclas [contador];
    const instrumento=tecla.classList[1];
    const idAudio = '#som_ ${instrumento}';
    

    listaDeTeclas[contador].onclick = tocaSom('#som_tecla_toim');
    listaDeTeclas[contador]= tocaSomPom;}
    

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_splash');
    };
    listaDeTeclas[2].classList.add('ativa')

