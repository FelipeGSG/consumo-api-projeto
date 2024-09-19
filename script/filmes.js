function buscar(id){
    // Função que carrega o JSON para consumir a API e processa os dados JSON
fetch('https://raw.githubusercontent.com/FelipeGSG/json-consumo-api/refs/heads/main/dadosFilmes.json').then(resposta => resposta.json()).then(corpo =>{
        var identificar = id
        var encontrado = false;

        corpo.forEach(pessoa => {
            if(identificar == pessoa.id){
                console.log(pessoa)
                encontrado = true
                document.getElementById('img').innerHTML = pessoa.imagem
                document.getElementById('nome').innerHTML = "Nome: " +pessoa.nome
                document.getElementById('duracao').innerHTML = "Duração: "+ pessoa.duracao
                document.getElementById('lancamento').innerHTML = "Lançamento: "+ pessoa.lancamento
                document.getElementById('avaliacao').innerHTML = "Avaliação: "+pessoa.avaliacao
                document.getElementById('aguardando').innerHTML = ""
                // document.getElementById('erro').innerHTML = " "
            }
            
        })
    })
}
