const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

function chineses(f) {
    return f.pais === 'China';
}

function mulheres(f) {
    return f.genero === 'F';
}

function menorSalario(func, funcAtual) {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})