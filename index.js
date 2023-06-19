import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//actualizar parametros del texto
const textarea = document.querySelector('textarea[name="user-input"]');
const lista = document.querySelectorAll('li')
textarea.addEventListener('keyup', function () {
  
 

  //contar caracteres
  //list list1[0].innerHTML="caracteres"+ analyzer.getCharacterCount(textarea,value);
  //document.querySelector('.list1').innerHTML = "caracteres" + analyzer.getCharacterCount(result);
  //const wordCountElement = document.querySelector('.parrafo');

  lista[0].innerHTML="caracteres "+ analyzer.getCharacterCount(textarea.value);
  //caracteres sin espacio
  lista[1].innerHTML = "caracteres sin espacio " + analyzer.getCharacterCountExcludingSpaces(textarea.value);
  //contador palabras
  lista[2].innerHTML = "palabras " + analyzer.getWordCount(textarea.value);
  //contador numeros
  lista[3].innerHTML = "números " + analyzer.getNumberCount(textarea.value);
  //contador suma numeros
  lista[4].innerHTML = "suma números " + analyzer.getNumberSum(textarea.value);
  //longitud promedio palabras
  lista[5].innerHTML = "promedio longitud " + analyzer.getAverageWordLength(textarea.value);
});

//boton reset
const btnReset = document.getElementById('reset-button');
btnReset.addEventListener('click', () => {
    
  textarea.value = '';
 
});


