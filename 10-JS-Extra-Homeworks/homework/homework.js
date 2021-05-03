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
  var array = []
  for(let clase in objeto){
    array.push([clase,objeto[clase]]);
  } return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var object = {};
  for(var j = 0; j < string.length; j++){
    if(!object.hasOwnProperty(string.charAt(j))){
      var k = 0;
    for( var i = j; i < string.length; i++){
      if(string.charAt(j)===string.charAt(i)){
        k = k + 1
      } 
    }
     object[string.charAt(j)] = k;
  } 
} return object;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var lowercase = '';
  var capital = '';
  for(var i = 0; i < s.length; i++){
    if(s.charAt(i)===s.charAt(i).toUpperCase()){
      capital = capital + s.charAt(i);
    } else { lowercase = lowercase + s.charAt(i);
      } 
  } return  capital + lowercase;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var reverseString = function(s){
    return s.split('').reverse().join('');
  };
  var array = str.split(' ');
  var result = array.map(reverseString).join(' ');
  return result;
};


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString()===numero.toString().split('').reverse().join('')){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  };
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var string = '';
  for(var i = 0; i < cadena.length; i++){
    if(cadena.charAt(i)!=='a'&& cadena.charAt(i)!=='b'&& cadena.charAt(i)!=='c'){
      string = string + cadena.charAt(i);
    }
  } return string;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var mapped = arr.map(function(element,index){return{value:element.length, ind:index}});;
  
  mapped.sort(function(a,b){
    return a.value -  b.value
  });
  var result = mapped.map(function(el){
    return arr[el.ind]
  });
  return result;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var intersection = [];

  for(var j = 0; j < arreglo1.length; j++){
    for( var i = 0; i < arreglo2.length; i ++){
      if(arreglo1[j]===arreglo2[i])
      intersection.push(arreglo2[i]);
    }
  } return intersection;
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


