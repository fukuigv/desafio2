const prompt = require('prompt-sync')();

function calculadora(vit, der)
{
    let saldo = vit - der
    let resposta = ""
    switch(true)
    {
        case saldo < 10:
            resposta = "ferro"
            break
        case saldo > 10 && saldo < 21:
            resposta = "bronze"
            break
        case saldo > 10 && saldo < 21:
            resposta = "prata"
            break
        case saldo > 10 && saldo < 21:
            resposta = "ouro"
            break
        case saldo > 10 && saldo < 21:
            resposta = "diamante"
            break
        case saldo > 10 && saldo < 21:
            resposta = "lendario"
            break
        case saldo > 10 && saldo < 21:
            resposta = "imortal"
            break
    }
    return ("o heroi tem saldo de " + saldo + " e esta no nivel de " + resposta)
}

let vit = parseInt(prompt("insira a quantidade de vitorias:"))
let der = parseInt(prompt("insira a quantidade de derrotas:"))
console.log(calculadora(vit, der))