let numberOne
let numberTwo

numberOne = Number(prompt('Digite o Primeiro numero'))
numberTwo = Number(prompt('Digite o Segundo numero'))

function soma(numberOne, numberTwo) {
  return (numberOne + numberTwo)
}

function sub(numberOne, numberTwo) {
  return numberOne - numberTwo
}

function mult(numberOne, numberTwo) {
  return numberOne * numberTwo
}

function div(numberOne, numberTwo) {
  return numberOne / numberTwo
}

function mod(numberOne, numberTwo) {
  return numberOne % numberTwo
}

function parImpar(number) {
  return number % 2
}

function compara(numberOne, numberTwo) {
  return numberOne === numberTwo
}

function numberPar(numberOne, numberTwo) {
  let total = soma(numberOne, numberTwo)
  let isPar = parImpar(total)

  if (isPar == 0) {
    return `${total} é PAR`
  } else {
    return `${total} é IMPAR`
  }
}

function comparaNumber(numberOne, numberTwo) {
  let isIgual = compara(numberOne, numberTwo)
  if (isIgual === true) {
    return `(${numberOne} e ${numberTwo}) 2Os numeros são Iguais `
  } else
    return `(${numberOne} e ${numberTwo}) Os numeros são Diferentes `

}

alert(`soma dos dois números: ${soma(numberOne, numberTwo)}`)
alert(`A subtração dos dois números: ${sub(numberOne, numberTwo)}`)
alert(`A multiplicação dos dois números: ${mult(numberOne, numberTwo)}`)
alert(`A divisão dos dois números: ${div(numberOne, numberTwo)}`)
alert(`O resto da divisão dos dois números: ${mod(numberOne, numberTwo)}`)
alert(`Verifique se a soma dos dois números é par (ou ímpar): ${numberPar(numberOne, numberTwo)}`)
alert(`Verifique se os dois números inseridos são iguais (ou diferentes): ${comparaNumber(numberOne, numberTwo)}`)

