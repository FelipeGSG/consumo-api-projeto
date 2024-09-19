fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia =>{
    document.getElementById('valorDoDolar').innerHTML = "R$"+economia.USDBRL.bid;
    document.getElementById('maiorValor').innerHTML = "R$"+economia.USDBRL.high;
    document.getElementById('menorValor').innerHTML = "R$"+economia.USDBRL.low;
    console.log(economia)
})