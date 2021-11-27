/** 
* @param {number} algarismo1 Valor para somar.
* @param {number} algarismo2 Valor para somar.
*/
function Somar(algarismo1, algarismo2) {
    algarismo1 = Number(algarismo1)
    algarismo2 = Number(algarismo2)
    if (isNaN(algarismo1) || isNaN(algarismo2)) throw "Error: Valor informado não é um numero";
    return algarismo1 + algarismo2
}
/** 
* @param {number} algarismo1 Valor que será subtraído.
* @param {number} algarismo2 Valor que irá subtrair.
*/
function Subtrair(algarismo1, algarismo2) {
    algarismo1 = Number(algarismo1)
    algarismo2 = Number(algarismo2)
    if (isNaN(algarismo1) || isNaN(algarismo2)) throw "Error: Valor informado não é um numero";
    return algarismo1 - algarismo2
}
/** 
* @param {number} algarismo1 Valor para multiplicar.
* @param {number} algarismo2 Valor para multiplicar.
*/
function Multiplicar(algarismo1, algarismo2) {
    algarismo1 = Number(algarismo1)
    algarismo2 = Number(algarismo2)
    if (isNaN(algarismo1) || isNaN(algarismo2)) throw "Error: Valor informado não é um numero";
    return algarismo1 * algarismo2
}
/** 
* @param {number} algarismo1 Que será dividido.
* @param {number} algarismo2 Valor que irá dividir.
*/
function Dividir(algarismo1, algarismo2) {
    algarismo1 = Number(algarismo1)
    algarismo2 = Number(algarismo2)
    if (isNaN(algarismo1) || isNaN(algarismo2)) throw "Error: Valor informado não é um numero";
    return algarismo1 / algarismo2
}


module.exports = { Somar, Subtrair, Multiplicar, Dividir }