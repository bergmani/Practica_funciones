// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.*/

//1. Calcular el cuadrado de un número.
function cuadradoNormal(numeroNormal) {
    return "(Normal) El cuadrado de " + numeroNormal + " es igual a " + numeroNormal * numeroNormal;
}
console.log (cuadradoNormal(5))

const cuadradoFlecha = numeroFlecha => "(Flecha) El cuadrado de " + numeroFlecha + " es igual a " + numeroFlecha * numeroFlecha;
console.log (cuadradoFlecha(5))


//2. Escribir un código que convierta de grados celsius a grados farenheit
function farenheitNormal(celsiusNormal) {
    var convertirAFarenheitN = celsiusNormal*1.8 + 32
    return '(Normal) ' + celsiusNormal + ' grados celsius es igual a ' + convertirAFarenheitN + ' grados farenheit';
}
console.log (farenheitNormal(40));

const farenheitFlecha = celsiusF => {
    var convertirAFarenheitF = celsiusF*1.8 + 32
    return '(Flecha) ' + celsiusF + ' grados celsius es igual a ' + convertirAFarenheitF + ' grados farenheit';
}
console.log (farenheitFlecha(40));


//3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.
function voltajeNormal(corriente, resistencia){
    return '(Normal) El voltaje es igual a ' + corriente * resistencia;
}
console.log(voltajeNormal(5,8));

const voltajeFlecha = (corrienteF, resistenciaF) => '(Flecha) El voltaje es igual a ' + corrienteF * resistenciaF;
console.log(voltajeFlecha(5,8));


//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
function volumenCuboNormal(ladoCuboN){
    let calcularVolumenCuboN = ladoCuboN * ladoCuboN * ladoCuboN; 
    return '(Normal) El volumen del cubo es de ' + calcularVolumenCuboN;
}
console.log(volumenCuboNormal(2));

const volumenCuboFlecha = ladoCuboF => {
let calcularVolumenCuboF = ladoCuboF * ladoCuboF * ladoCuboF; 
    return '(Normal) El volumen del cubo es de ' + calcularVolumenCuboF;
}
console.log(volumenCuboFlecha(2));


//5. Calcular el área de un triángulo
function areaTrianguloNormal(baseN, alturaN){
    calcularAreaTrianguloN = baseN * alturaN / 2;
    return '(Normal) El área del triángulo es de ' + calcularAreaTrianguloN;
}
console.log(areaTrianguloNormal(5,3));

const areaTrianguloFlecha = (baseF, alturaF) => {
    calcularAreaTrianguloF = baseF * alturaF / 2;
    return '(Flecha) El área del triángulo es de ' + calcularAreaTrianguloF;
}
console.log(areaTrianguloFlecha(5,3));


//6. Calcular el volumen de una esfera
function volumenEsferaNormal(radioN){
    let calcularVolumenEsferaN = 4 / 3  * 3.1416 * (radioN * radioN * radioN);
    return '(Normal) El volumen de la esfera es de ' + calcularVolumenEsferaN;
}
console.log(volumenEsferaNormal(6))

const volumenEsferaFlecha = radioF =>{
    let calcularVolumenEsferaF = 4 / 3  * 3.1416 * (radioF * radioF * radioF);
    return '(Flecha) El volumen de la esfera es de ' + calcularVolumenEsferaF;
}
console.log(volumenEsferaFlecha(6))


//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
function toUpperCaseNormal(textoMinusculaN){
    return '(Normal) Texto normal: ' + textoMinusculaN + ' Texto mayúscula: ' +  textoMinusculaN.toUpperCase();
}
console.log(toUpperCaseNormal('hola'))

const toUpperCaseFlecha = textoMinusculaF => '(Normal) Texto normal: ' + textoMinusculaF + ' Texto mayúscula: ' + textoMinusculaF.toUpperCase();
console.log(toUpperCaseFlecha('hola'))