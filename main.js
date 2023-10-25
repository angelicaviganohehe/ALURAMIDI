function tocaSomPom(idElementoAudio){
    const elemento=  document.querySelector(idElementoAudio).play();
    }
    if (elemento === null) {
        alert('Elemento não encontrado');
}
if (elemento && elemento.localName === 'audio')  {
    elemento.play();
}else {
    alert('Elemento não encontrado');
}


const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador=0; contador < listaDeTeclas.length; contador++){
    const tecla =listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space')

        if (evento.code === 'Space'){
    tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}

