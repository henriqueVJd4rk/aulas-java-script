const adultos = parseFloat(prompt("Quantos adultos vão na festa?"))
const criancas = parseFloat(prompt("Quantas crianças vão na festa?"))

const horasKaraoke = parseFloat(prompt("Quantas horas de karaokê?"))
const horasEspaco = parseFloat(prompt("Quantas horas de espaço?"))

const totalPessoas = adultos + criancas

const salgadosPessoa = 18
const docesPessoa = 6
const refriPessoa = 1
const coposPessoa = 5
const pratosPessoa = 2
const talheresPessoa = 2

const precoSalgado = 48.90
const precoDoce = 42.90
const precoRefri = 8.99
const precoCopo = 12.99
const precoPrato = 4.99
const precoTalher = 7.99

const precoKaraoke = 27.99
const precoEspaco = 239.99


const totalSalgados = totalPessoas * salgadosPessoa
const totalDoces = totalPessoas * docesPessoa
const totalRefri = totalPessoas * refriPessoa
const totalCopos = totalPessoas * coposPessoa
const totalPratos = totalPessoas * pratosPessoa
const totalTalheres = totalPessoas * talheresPessoa

const pacSalgados = totalSalgados / 100
const pacDoces = totalDoces / 20
const pacCopos = totalCopos / 100
const pacPratos = totalPratos / 10
const pacTalheres = totalTalheres / 10

const custoSalgado = pacSalgados * precoSalgado
const custoDoce = pacDoces * precoDoce
const custoRefri = totalRefri * precoRefri
const custoCopos = pacCopos * precoCopo
const custoPratos = pacPratos * precoPrato
const custoTalheres = pacTalheres * precoTalher

const custoMesas = (totalPessoas / 4) * 17.99
const custoKaraoke = horasKaraoke * precoKaraoke
const custoEspaco = horasEspaco * precoEspaco

const totalAluguel = custoMesas + custoKaraoke + custoEspaco

const totalFesta = custoSalgado +custoDoce +custoRefri +custoCopos +custoPratos +custoTalheres +totalAluguel

const valorAdulto = totalAluguel / adultos


alert(`
    Total pessoas: ${totalPessoas}
    Salgados necessários: ${totalSalgados}
    Doces necessárioss: ${totalDoces}
    Refrigerantes necessários: ${totalRefri}
    Copos necessários: ${totalCopos}
    Talheres necessários: ${totalTalheres}
    Pratos necessários: ${totalPratos}
    Total da festa: R$ ${totalFesta.toFixed(2)}
    Valor adultos: R$ ${valorAdulto.toFixed(2)}
`)