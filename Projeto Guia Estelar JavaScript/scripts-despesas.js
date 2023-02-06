let familia ={
    receitas: [],
    despesas: []
}

function soma (array) {
    let total =0;

    for(let valor of array) {
        total += valor
    }

    return total
}

function calculoBalanco () {
    const calculoReceitas = soma(familia.receitas)
    const calculoDespesas = soma(familia.despesas)

    const total = calculoReceitas - calculoDespesas

    const ok = total >= 0

    let mensagemBalanco = "negativo"

    if (ok) {
        mensagemBalanco = "positivo"
    }

    console.log(`Seu saldo é ${mensagemBalanco}: R$ ${total.toFixed(2)}`)
}

calculoBalanco ()

