const add = (numberOne, numberTwo) =>{
    return numberOne + numberTwo
}

const multiply = (numberOne) =>{
    return numberOne * 2
}
const addTwoNumbers = add(2, 2)
const multiplyResult = multiply(addTwoNumbers)

console.log(multiplyResult)
