function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
    }
    document.querySelectorAll('.tecla');
const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick = tocaSomPom;
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador <9){
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);

}