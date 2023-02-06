function transformacaoGraus(graus) {
    const grausCelsius = graus.toUpperCase().includes('C')
    const grausFahrenheit = graus.toUpperCase().includes('F')

    if(!grausCelsius && !grausFahrenheit) { 
        throw new Error('Grau não identificado')
    }

    let updatedGraus = Number(graus.toUpperCase().replace("C", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let simboloGrau = 'C'

    if(grausCelsius) {
        updatedGraus = Number(graus.toUpperCase().replace("F", ""))
        formula = celsius => (celsius * 9/5) + 32
        simboloGrau = 'F'

    }

    return formula(updatedGraus) + simboloGrau
}

try {
    console.log(transformacaoGraus('F'))
    console.log(transformacaoGraus('C'))
    
} catch (error) {
    console.log(error.message)
}