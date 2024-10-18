

const http = require('http')

const { addNumber, subtractNumber, divideNumber, multiplyNumber } = require('./local')

console.log(addNumber(10, 11))
console.log(subtractNumber(10, 5))
console.log(divideNumber(10, 2))
console.log(multiplyNumber(10, 5))