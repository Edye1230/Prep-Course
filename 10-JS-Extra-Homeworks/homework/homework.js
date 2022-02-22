// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let nuevoArreglox1 = new Array();
  for (let i = 0; i < Object.keys(objeto).length; i++) {
    nuevoArreglox1[i] = new Array(2);
  }
    
  for (let ii = 0; ii < 2; ii++) {
    for (let i = 0; i < nuevoArreglox1.length; i++) {
      nuevoArreglox1[i][0] = Object.keys(objeto)[i];
      nuevoArreglox1[i][1] = Object.values(objeto)[i];
    }
  }
  return nuevoArreglox1;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  let contarLetras = [];
  for (let i = 0; i < string.length; i++) {
    contarLetras = string.split("").filter(letra => string[i] == letra);
    objeto[string[i]] = contarLetras.length;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusAlPrin = "";
  let minusAlFin = "";
  for (let i = 0; i < s.length; i++) {
  // SI ES MAYUSCULA:
    if (s[i] == s[i].toUpperCase()) {
    mayusAlPrin = mayusAlPrin + s[i];
    }
    else {
    minusAlFin = minusAlFin + s[i];
    }
  }
  return mayusAlPrin + minusAlFin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let fraseInvertida = [];
  let fraseFinal = "";
  frase_arreglo = str.split(" ")

  for (let i = 0; i < frase_arreglo.length; i++) {
    fraseInvertida[i] = frase_arreglo[i].split("").reverse();
    fraseFinal = fraseFinal + fraseInvertida[i].join("") + " ";
  }
  fraseFinal = fraseFinal.substring(0, str.length - 0);
  return fraseFinal;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numiString = String(numero);
  numiStringReverse = numiString.split("").reverse().join("");
  
  if (numiString == numiStringReverse) {
    return "Es capicua";
  }
  else if (numiString != numiStringReverse){
    return "No es capicua";
  }
  else {
    return "Error";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let sinABC = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == "a" || cadena[i] == "b" || cadena[i] == "c") {
    }
    else {
    sinABC = sinABC + cadena[i];
    }
  }
  return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arriixNuevo = [];
  let arrixFinal = [];
  
  for (let i = 0; i < arr.length; i++) {
    arriixNuevo.push(arr[i].length);
  }
  arriixNuevo = arriixNuevo.sort(function(a,b){return a - b});
  
  for (let ii = 0; ii < arr.length; ii++) {
    for (let i = 0; i < arr.length; i++) {
      if (arriixNuevo[ii] == arr[i].length && !arrixFinal.includes(arr[i])) {
      arrixFinal[ii] = arr[i];
      break;
      }
      else {}
    }
  }
  return arrixFinal;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo_final = [];

  for (let ii = 0; ii < arreglo1.length; ii++) {
    for (let i = 0; i < arreglo2.length; i++) {
      if (arreglo1[ii] == arreglo2[i] && !arreglo_final.includes(arreglo1[ii])) {
        arreglo_final.push(arreglo1[ii]);
        break;
      }
      else {}
    }
  }
  return arreglo_final;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

