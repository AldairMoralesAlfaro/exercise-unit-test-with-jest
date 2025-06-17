// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js

const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = (valueInDollar / 1.07 ) * 156.5;
    
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen / 156.5 * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}
module.exports = {  fromDollarToYen, fromEuroToDollar, fromYenToPound }