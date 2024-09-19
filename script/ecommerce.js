

function buscar(id, produto, imagem, preco, estoque){
    // Função que carrega o JSON para consumir a API e processa os dados JSON
fetch('https://raw.githubusercontent.com/FelipeGSG/json-consumo-api/refs/heads/main/dadosEcommerce.json').then(resposta => resposta.json()).then(corpo =>{
        var identificar = id
        var encontrado = false;
        corpo.forEach(pessoa => {
            if(identificar == pessoa.id){
                encontrado = true
                document.getElementById(produto).innerHTML = pessoa.produto
                document.getElementById(imagem).innerHTML = pessoa.imagem
                document.getElementById(preco).innerHTML = "Preço: R$" + pessoa.preco
                document.getElementById(estoque).innerHTML = "Estoque: " + pessoa.estoque
                // document.getElementById('erro').innerHTML = " "
            }
            
        })
    })
}
buscar(1,"produto1", "imagem1", "preco1", "estoque1")
buscar(2,"produto2", "imagem2", "preco2", "estoque2")
buscar(3,"produto3", "imagem3", "preco3", "estoque3")
buscar(4,"produto4", "imagem4", "preco4", "estoque4")
buscar(5,"produto5", "imagem5", "preco5", "estoque5")
buscar(6,"produto6", "imagem6", "preco6", "estoque6")




function compra(){
    Swal.fire({
        title: 'Compra Efetuada!',
        text: 'Em alguns segundos você receberá seu recibo (ou não)',
        icon: 'success',
        confirmButtonText: 'Confirmar'
      })
}

