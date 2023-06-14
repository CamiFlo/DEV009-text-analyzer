import analyzer from './analyzer.js';

//const userText = document.querySelector('li[name="textContent"]')

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//actualizar parametros del texto
const textarea= document.querySelector('textarea[name="user-input"]');

textarea.addEventListener("keyup", function(){
const result= textarea.value;

//contar caracteres
//list list1[0].innerHTML="caracteres"+ analyzer.getCharacterCount(textarea,value);
document.querySelector('.list1').innerHTML= "caracteres"+ analyzer.getCharacterCount(result);

//caracteres sin espacio
list2[1].innerHTML="caracteres sin espacio"+ analyzer.getCharacterCountExcludingSpaces(result);
//contador palabras
list3[2].innerHTML="palabras"+ analyzer.getWordCount(result);
//contador numeros
list4[3].innerHTML="números"+ analyzer.getNumberCount(result);
//contador suma numeros
list5[4].innerHTML="suma números"+ analyzer.getNumberSum(result);
//longitud promedio palabras
list6[5].innerHTML="promedio longitud"+ analyzer.getAverageWordLength(result);
),}

//boton reset
const btnReset= document.getElementById("reset-button");
btnReset.addEventListener("click",function(){
  textBox.value="";
});


