const analyzer = {
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    return text.length;
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    /*const text= (text);
    const specialChar = [".",",",";",":","«","»","[","[","]","{","}","(",")","¿","?","¡","!","-"];
    const ExcludingSpecialChar = text - specialChar;
    return ExcludingSpecialChar.trim().length;*/
    const regex = /[^\s.,;:«»[\]{}()¿?¡!-]/g;
    const matches = text.match(regex);
    return matches.length;

  },

  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  getWordCount: (text) => {
    const words = text.trim().split(" ");
    let count = 0;

    for(let i = 0; i< words.length; i++){
      
      if (words[i] !== "") {
        count++;

      }


    }

    return count;
  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
    
  // isNaN o .replace ? expresión regular para buscarr numeros? No sirve para numeros negativos?
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(?:\.\d+)?\b/g); // Expresión regular para encontrar números
    if (numbers) {
      return numbers.length;
    }else{
      return 0;
    }
      

  },


  getNumberSum: (text) => {

    const count = analyzer.getNumberCount(text); // Llamada a la función getNumberCount() con su resultado
    let suma = 0;
    for (let i = 0; i < count; i++) {
      const number = parseInt(text.match(/-?\d+(\.\d+)?/g)[i]); // misma Exreg para encontrar numeros
      suma += number;
    }   
    return suma.toFixed(2);
  
  },
  /*let suma = 0;
  const digitsAddUp = (text).split(" "); // entrega un array
  for(let i=0; i< digitsAddUp.length; i++) { //recorre el arreglo buscando un numero y lo cuenta
    const char = digitsAddUp[i];
    if(!isNaN(char)) {
      suma += parseFloat(char);
    }
  }
  return suma.toFixed(2);*/

  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //Sacar promedio dividiendo el total de caracteres sin espacios/total de palabras

  getAverageWordLength: (text) =>  {

    const words = text.split(" "); // Divide el texto en un array de palabras separadas por espacios
    const totalLength = words.reduce(function (acc, word) { // Utilizar el método reduce para sumar las longitudes de todas las palabras
      return acc + word.length;
    }, 0);
    const averageLength = totalLength / words.length; // sacar promedio dividiendo la suma de las longitudes por la cantidad de palabras
    return Number(averageLength).toFixed(2); // Convierte el promedio en un número y lo redondea a 2 decimales utilizando toFixed()
  },

}
export default analyzer;
