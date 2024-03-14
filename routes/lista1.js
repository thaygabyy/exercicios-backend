const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)
    
    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado' 

    res.json({media, mensagem})

})
router.post('/ex2', function(req, res){

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

        const soma = brancos + nulos + validos
        
        if(soma > total){

            retorno = {
                codigo: 'SOMA_ELEITORES',
                mensagem: "A soma dos votos não pode passar o total de eleitores"
            }
            
            res.status(400).json(retorno)

        } else {
            const percBranco = brancos / total * 100
            const percNulos = nulos / total * 100
            const percValidos = validos / total * 100
    
            retorno = {percBranco, percNulos, percValidos}

    res.status(200).json(retorno)
        }
        })

 router.post('/ex3', function(req, res) {
    const salarioAtual = Number(req.body.salarioAtual)
    const percentualReajuste = Number(req.body.percentualReajuste)
        
    const novoSalario = salarioAtual * (1 + percentualReajuste / 100)
        
    res.json({ novoSalario })
})

router.post('/ex4', function(req, res) {
    const custoFabrica = Number(req.body.custoFabrica)

    const percentualDistribuidor = 0.28
    const impostos = 0.45

    const custoConsumidor = custoFabrica * (1 + percentualDistribuidor + impostos)

    res.json({ custoConsumidor })
})

router.post('/ex5', function(req, res) {
    const custoFabrica = Number(req.body.custoFabrica)
    const percentualDistribuidor = Number(req.body.percentualDistribuidor)
    const impostos = Number(req.body.impostos)

    const custoConsumidor = custoFabrica * (1 + percentualDistribuidor / 100 + impostos / 100)

    res.json({ custoConsumidor })
})

router.post('/ex6', function(req, res) {
    const numCarrosVendidos = Number(req.body.numCarrosVendidos)
    const valorTotalVendas = Number(req.body.valorTotalVendas)
    const salarioFixo = Number(req.body.salarioFixo)
    const valorPorCarro = Number(req.body.valorPorCarro)

    const comissaoPorCarro = numCarrosVendidos * valorPorCarro
    const comissaoTotal = valorTotalVendas * 0.05

    const salarioFinal = salarioFixo + comissaoPorCarro + comissaoTotal

    res.json({ salarioFinal })
})

router.post('/ex7', function(req, res) {
    const nota1 = Number(req.body.nota1)
    const nota2 = Number(req.body.nota2)

    const mediaFinal = (nota1 * 4 + nota2 * 6) / 10

    res.json({ mediaFinal })
})

router.post('/ex8', function(req, res) {
    const raio = Number(req.body.raio)
    const altura = Number(req.body.altura)

    const volume = Math.PI * raio ** 2 * altura

    res.json({ volume })
})

router.post('/ex9', function(req, res) {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)

    const soma = num1 + num2
    const resultado = soma * num1

    res.json({ resultado })
})

module.exports = router