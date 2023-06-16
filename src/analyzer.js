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
  //return text.split(" ");  esta fue mi primera opción
  getWordCount: (text) => {
    let words = text.split(" ");
    let count = 0;

    for(let i = 0; i< words.length; i++){
      const word = words[i];
      if (!/\d/.test(word)) {
        count++;
   
      }
    
    return count;

    }
  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
    
// isNaN o .replace ? expresión regular para buscarr numeros? No sirve para numeros negativos?
getNumberCount: (text) => {
  const words = text.match(/\b\w+\b/g);
  if (words) {
    return words.length;
  } else {
    return 0;
  }
},




getNumberSum: (text) => {
  let suma = 0;
  const digitsAddUp = (text).split(" "); // entrega un array
  for(let i=0; i< digitsAddUp.length; i++) { //recorre el arreglo buscando un numero y lo cuenta
    const char = digitsAddUp[i];
    if(!isNaN(char[i])) {
      suma += parseFloat(char[i]).toFixed(2);
    }
  }
  return suma;
},
//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

//TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
//Sacar promedio dividiendo el total de caracteres sin espacios/total de palabras

getAverageWordLength: (text) =>  {

  const words = text.split(" ");
  const totalLength = words.reduce(function (acc, word) {    //length TH TH TH!!!
    return acc + word.length;
  }, 0)
  const averageLength = totalLength / words.length;
  return Number(averageLength).toFixed(2);
  //number(averageLength).toFixed(2);
},

}
export default analyzer;
