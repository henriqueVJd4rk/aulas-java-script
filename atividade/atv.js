const salgado = prompt("Qual será o seu salgado?")
const valorS = parseFloat(prompt("Quantos salgados?"))
const refrigerante = prompt("Qual será o refri?")
const valorR = parseFloat(prompt("Quantos refris?"))

const precoSalgado = 6
const precoRefri = 7
const taxaEntrega = 8

const totalS = valorS * precoSalgado
const totalR = valorR * precoRefri
const total = totalS + totalR + taxaEntrega

alert(`Pedido:
${salgado}: R$ ${totalS}
${refrigerante}: R$ ${totalR}
Taxa de entrega: R$ ${taxaEntrega}

Total final: R$ ${total}`)
