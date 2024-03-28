const express = require('express')
const router = express.Router()

router.post('/ex1', (req, res) => {
    const { salario } = req.body
    let salarioReajustado
    if (salario <= 2000) {
      salarioReajustado = salario * 1.5; // Reajuste de 50%
    } else {
      salarioReajustado = salario * 1.3; // Reajuste de 30%
    }
    res.json({ salarioReajustado })
  })

router.post('/ex2', (req, res) => {
    const { num1, num2, num3 } = req.body
    const maior = Math.max(num1, num2, num3)
    res.json({ maior })
  })

router.post('/ex3', (req, res) => {
    const { numTulipas, numPizzas, numCoberturas, numPessoas } = req.body
    const custoTulipa = 4.8
    const custoPizza = 17 + 1.5 * numCoberturas
    const totalConta = numTulipas * custoTulipa + numPizzas * custoPizza
    const contaComGarcom = totalConta * 1.1
    const valorPorPessoa = contaComGarcom / numPessoas
    res.json({ valorPorPessoa })
  })

router.post('/ex4', function(req, res){

    const {salarioMinimo, horasTrabalhadas, dependentes, horasExtras} = req.body
     
    const valorHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valorHoraTrabalhada * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto > 2000){
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1
    }

    const salarioLiquido = salarioBruto - imposto

    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

    res.json({salarioBruto, imposto, gratificacao, salarioReceber})
})
router.post('/ex5', (req, res) => {
        const { idAluno, nota1, nota2, nota3, mediaExercicios } = req.body
        const mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7
        let conceito
        if (mediaAproveitamento >= 9) {
          conceito = 'A'
        } else if (mediaAproveitamento >= 7.5) {
          conceito = 'B'
        } else if (mediaAproveitamento >= 6) {
          conceito = 'C'
        } else if (mediaAproveitamento >= 4.5) {
          conceito = 'D'
        } else {
          conceito = 'E'
        }
        const mensagem = conceito === 'A' || conceito === 'B' || conceito === 'C' ? 'APROVADO' : 'REPROVADO'
        res.json({ idAluno, nota1, nota2, nota3, mediaExercicios, mediaAproveitamento, conceito, mensagem })
      })

router.post('/ex6', (req, res) => {
        const { altura, sexo } = req.body
        let pesoIdeal
        if (sexo === 'M') {
          pesoIdeal = 72.7 * altura - 58
        } else {
          pesoIdeal = 62.1 * altura - 44.7
        }
        res.json({ pesoIdeal })
      })

router.post('/ex7', (req, res) => {
        const { num1, num2, num3 } = req.body
        const numeros = [num1, num2, num3]
        numeros.sort((a, b) => b - a)
        const somaDosMaiores = numeros[0] + numeros[1]
        res.json({ somaDosMaiores })
      })

router.post('/ex8', (req, res) => {
        const { salarioAtual, codigoCargo } = req.body
        let percentualAumento
        switch (codigoCargo) {
          case 101:
            percentualAumento = 0.05
            break
          case 102:
            percentualAumento = 0.075
            break
          case 103:
            percentualAumento = 0.1
            break
          default:
            percentualAumento = 0.15
        }
        const aumento = salarioAtual * percentualAumento
        const novoSalario = salarioAtual + aumento
        const diferenca = novoSalario - salarioAtual
        res.json({ salarioAtual, novoSalario, diferenca })
})

module.exports = router