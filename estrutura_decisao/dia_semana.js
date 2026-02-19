const numero = prompt("digite um numero de 1 até 7")
const dia = parseInt(numero)

    switch (dia) {
        case 1:
            alert ("Domingo")
            break
        case 2:
            alert ("Segunda")
            break
        case 3:
            alert ("Terça")
            break
        case 4:
            alert ("Quarta")
            break
        case 5:
            alert ("Quinta")
            break
        case 6:
            alert ("Sexta")
            break
        case 7:
            alert ("Sabado")
            break
        default: 
            alert("Número invalido, digite um valor de 1 até 7")
    }
}