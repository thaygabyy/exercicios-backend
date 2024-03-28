const express = require('express')
const router = express.Router()

router.post('/ex1', (req, res) => {
    const { quantidadeMinima, quantidadeMaxima } = req.body;
    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2
    res.json({ estoqueMedio })
  })

router.post('/ex2', function(req, res){

    const {nome, horasTrabalhadas, valorHora, filhos} = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.json({salarioBruto, bonificacaoFilhos, salarioFinal
     })

router.post('/ex3', (req, res) => {
        const { anos, meses, dias } = req.body
        const idadeEmDias = anos * 365 + meses * 30 + dias
        res.json({ idadeEmDias })
      })

router.post('/ex4', (req, res) => {
        const { dias } = req.body
        const anos = Math.floor(dias / 365)
        const meses = Math.floor((dias % 365) / 30)
        const diasRestantes = (dias % 365) % 30
        res.json({ anos, meses, dias: diasRestantes })
      })

router.post('/ex5', (req, res) => {
        const { nota1, nota2, nota3 } = req.body
        const mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
        res.json({ mediaFinal })
      })

router.post('/ex6', (req, res) => {
        const { segundos } = req.body
        const horas = Math.floor(segundos / 3600)
        const minutos = Math.floor((segundos % 3600) / 60)
        const segundosRestantes = segundos % 60
        res.json({ horas, minutos, segundos: segundosRestantes })
      })

      router.post('/ex7', (req, res) => {
        const { nome, salarioFixo, totalVendas, percentualComissao } = req.body
        const salarioTotal = salarioFixo + (totalVendas * percentualComissao / 100)
        res.json({ nome, salarioTotal })
      })

router.post('/ex8', (req, res) => {
        const { nomePiloto, distanciaPercorrida, tempoHoras } = req.body
        const velocidadeMedia = distanciaPercorrida / tempoHoras
        res.json({ nomePiloto, velocidadeMedia })
      })

router.post('/ex9', (req, res) => {
        const { salario } = req.body
        const salarioReajustado = salario < 1000 ? salario * 1.3 : null
        res.json({ salarioReajustado })
      })
})

module.exports = router