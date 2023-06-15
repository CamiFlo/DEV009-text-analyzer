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
    return matches = matches.length;

  },

  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //return text.split(" ");  esta fue mi primera opción
  getWordCount: (text) => {
    const words = text.split(" ");
    return words.length;

  },

  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

  getNumberCount: (text) => {
    const regex = /\d+/g;
    const matches = text.match(regex);
    if (matches) {
      return matches.length;
    } else {
      return 0;
    }
  },

  //return text.replace[]
  // isNaN o .replace ? expresión regular para buscarr numeros? No sirve para numeros negativos?

  getNumberSum: (text) => {
    let sum = 0;
    const digitsAddUp = (text).split(""); // entrega un array
    for(let i=0; i< digitsAddUp.length; i++) { //recorre el arreglo buscando un numero y lo cuenta
      const char = digitsAddUp[i];
      if(!isNaN(char[i])) {
        sum += parseInt(char[i]);
      }
    }
    return sum;
  },
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //Sacar promedio dividiendo el total de caracteres sin espacios/total de palabras
  getAverageWordLength: (text) => {
    const words = text.split(" ");
    const totalLength = words.reduce(function (acc, word) {    //length TH TH TH!!!
      return acc + word.length;
    }, 0)
    const averageLength = totalLength / words.length;
    return parseFloat(averageLength).toFixed(2);
    //number(averageLength).toFixed(2);
  }


};

export default analyzer;
