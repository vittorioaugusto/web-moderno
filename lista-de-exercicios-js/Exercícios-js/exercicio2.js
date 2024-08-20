function converterIdadeEmAnosParaDias(idadeEmAnos) {
  const diasDoAno = 365
  const idadeEmDias = diasDoAno * idadeEmAnos
  return `Idade: ${idadeEmAnos} anos. Idade convertida: ${idadeEmDias} dias.`
}

// Exemplo de uso
const idade = 25
const idade2 = 70
console.log(converterIdadeEmAnosParaDias(idade))
console.log(converterIdadeEmAnosParaDias(idade2))
