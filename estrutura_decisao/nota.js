alert("Seja bem vindo, vamos calcular a média")

const aluno = String(prompt("Qual é o seu nome?"))
const n1 = parseFloat(prompt("Qual a primeira nota?"))
const n2 = parseFloat(prompt("Qual a segunda nota?"))

const media = (n1 + n2) / 2

alert(`A média das notas é ${media}`)

if(media >=7){
    alert(`O aluno ${aluno} Está aprovado`)
} else {
    alert (`O aluno ${aluno} esta reprovado`)
}