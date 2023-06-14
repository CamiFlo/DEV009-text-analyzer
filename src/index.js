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
list list2[1].innerHTML="caracteres sin espacio"+ analyzer.getCharacterCountExcludingSpaces(textarea,value);
//contador palabras
list list3[2].innerHTML="palabras"+ analyzer.getWordCount(textarea,value);
//contador numeros
list list4[3].innerHTML="números"+ analyzer.getNumberCount(textarea,value);
//contador suma numeros
list list5[4].innerHTML="suma números"+ analyzer.getNumberSum(textarea,value);
//longitud promedio palabras
list list6[5].innerHTML="promedio longitud"+ analyzer.getAverageWordLength(textarea,value);
),}

//boton reset
const btnReset= document.getElementById("reset-button");
btnReset.addEventListener("click",function(){
  textBox.value="";
});

//deberian borrarse todos los campos de parametros?
