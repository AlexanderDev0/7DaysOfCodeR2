let nome = prompt("Digite seu nome")


let idade = prompt("Dite a sua idade")

let linguagem = prompt(" qual lilnguagem de programação voce está estudando?")

alert(`Olá ${nome}, você tem ${idade} anos e ja esta aprendendo ${linguagem}`)

let Pergunte = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (Pergunte == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}