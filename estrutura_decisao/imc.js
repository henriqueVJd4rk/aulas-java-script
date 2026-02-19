alert("Ola, vamos calcular seu IMC")

const nome = String(prompt("Qual é o seu nome?"))
const altura = parseFloat(prompt("Qual é sua altura?"))
const peso = parseInt(prompt("Qual é sua peso?"))

if (altura <= 0 || peso <= 0){
    alert("Informações inválidas")
} else {
    const resultado = peso / (altura * altura)
    alert(` ${nome} o seu valor do IMC é ${resultado}`)

    if (resultado < 18.5){
        alert("Classificação: Abaixo do peso")
    } else if(resultado >= 18.5 && resultado < 24.9){
        alert("Classificação: peso normal")
    } else if (resultado >= 24.9 && resultado <29.9){
        alert("Classificação: sobrepeso")
    } else if (resultado >= 29.9 && resultado <34.9){
        alert("Classificação: Obsidade Grau 1")
    } else if (resultado >= 34.9 && resultado <39.9){
        alert("Classificação: Obsidade Grau 2")
    } else {
        alert("Classificação: Obsidade Grau 3")
    }
}