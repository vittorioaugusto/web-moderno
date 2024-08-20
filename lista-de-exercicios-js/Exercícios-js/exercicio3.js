function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30 / 100
    return `Salário igual a R$ ${salarioLiquido.toFixed(2)}`
}

console.log(calcularSalarioLiquido(180, 60))