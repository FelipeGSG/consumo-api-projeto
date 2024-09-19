function buscar(){
    // Função que carrega o JSON para consumir a API e processa os dados JSON
fetch('https://raw.githubusercontent.com/FelipeGSG/json-consumo-api/refs/heads/main/dadosCPF.json').then(resposta => resposta.json()).then(corpo =>{
        var identificar = document.getElementById('input').value
        var encontrado = false;

        corpo.forEach(pessoa => {
            if(identificar == pessoa.cpf){
                encontrado = true
                document.getElementById('img').innerHTML = pessoa.imagem
                document.getElementById('cpf').innerHTML = "CPF: "+ pessoa.cpf
                document.getElementById('nome').innerHTML = "Nome: "+ pessoa.nome
                document.getElementById('idade').innerHTML = "Idade: "+ pessoa.idade
                document.getElementById('cargo').innerHTML = "Cargo: "+ pessoa.cargo
                document.getElementById("aguardando").innerHTML = ""
                // document.getElementById('erro').innerHTML = " "
            }
            
        })
    })
}