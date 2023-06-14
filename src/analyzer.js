const analyzer = {  
  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    return text.length;
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    return text.trim().length;
    
  },

  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //return text.split(" ");  esta fue mi primera opción
  getWordCount: (text) =>{
    let words= text.split(" ");
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
    let digitsAddUp = (text).split(""); // entrega un array
    for(i=0; i< digitsAddUp.length; i++){ //recorre el arreglo buscando un numero y lo cuenta
    const char = digitsAddUp[i];
    if (!isNan(char)){
      sum += parseInt(char);
       }
    }
  return sum;
},
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //Sacar promedio dividiendo el total de caracteres sin espacios/total de palabras
  getAverageWordLength: (text) => {    
    const words = text.split(" ");
    let totalLength = words.reduce(function (acc, word){    //length TH TH TH!!!
    return acc + word.length;
    }, 0)
    const averageLength = totalLength / words.length;
    return number(averageLength).toFixed(2);
  }

    
};

export default analyzer;
