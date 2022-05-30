/* ASIGNACIÓN */
let miMascota = {
    nombre : 'Kanito',
    edad : 8,
    color : 'blanco',
    vive : true
}

/* OPERADORES ARITMÉTICOS */

let precioProducto_1 = "200";
let precioProducto_2 = 300;

let precioProducto_1_Number = Number(precioProducto_1); //parseo un string -> number (ojo!!! deben ser caracteres numéricos!!!!)

precioProducto_1_Number = parseInt(precioProducto_1); //parsea todos los number hasta que encuentre un string

precioProducto_1_Number = parseFloat(precioProducto_1);

precioProducto_1_Number = +precioProducto_1; //que tul! re facil!!!!! (fe de erratas: tienen number!!)

//console.log(+precioProducto_1_Number);

let bono = 50;
let recargo = 0.3;
let cuotas = 12;

let total;
total = precioProducto_1 + precioProducto_2; //500 siempre y cuando los valores sean de tipo number, si no string los concatena
total = precioProducto_1_Number + precioProducto_2;

totalConDescuento = total - bono;
totalPagoConTarjeta = totalConDescuento + (total * recargo);
valorDeCuota = totalPagoConTarjeta / cuotas;
console.log(valorDeCuota);

