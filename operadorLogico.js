/* operadores lógicos */

/*
o || O
y && Y
negacion! NO
*/

/* O */ //con que una de las sentencias sea verdadera dara true//
consola.log('1',verdadero || verdadero); //verdadero
consola.log('2',verdadero || falso); //verdadero
consola.log('3',falso || verdadero); //verdadero
consola.log('4',falso || falso); //falso

/* Y */  //todos lso valores deben ser verdaderos para dar true//
consola.log('5',verdadero && verdadero); //verdadero
consola.log('6',verdadero && falso); //falso
consola.log('7',falso && verdadero); //falso
consola.log('8',falso && falso); //falso

/* NO */
consola.log('1',!verdadero || verdadero); //verdadero
consola.log('2',!verdadero || falso); //falso
consola.log('3',!falso || verdadero); //verdadero
consola.log('4',!falso || falso); //verdadero
consola.log('5',!verdadero && verdadero); //falso
consola.log('6',!verdadero && falso); //falso
consola.log('7',!falso && verdadero); //verdadero
consola.log('8',!falso && falso); //falso

/*
0 es tomado como falso
"" es falso
indefinido es un falso
*/


//Cambios para la rama develop

