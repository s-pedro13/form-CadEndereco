'use strict'; // Ativa o modo restrito
// Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns na programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar campos preenchidos
const limparFormulario = () => {
    document.getElementById('logradouro').value = ''; // busca o campo rua pelo id
    document.getElementById('bairro').value = ''; // busca o campo bairro pelo id
    document.getElementById('localidade').value = ''; // busca o campo cidade pelo id
    document.getElementById('uf').value = ''; // busca o campo estado pelo id
    document.getElementById('número').value = ''; // busca o campo número pelo id
    document.getElementById('complemento').value = ''; // busca o campo complemento pelo id
}

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Faz com que o usuário possa digitar apenas caracteres de 0 a 9, pegando a expressão regular e jogando dentro do argumento "número"
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // identifica quantos caracteres tem no argumento "cep" e executa a linha anterior "número"

// função para preencher formulário com os dados do endereço
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro; // preenche o campo rua com o valor do logradouro
    document.getElementById('bairro').value = endereco.bairro; // preenche o campo bairro com o valor do logradouro
    document.getElementById('localidade').value = endereco.localidade; // preenche o campo cidade com o valor do logradouro
    document.getElementById('uf').value = endereco.uf; // preenche o campo estado com o valor da unidade federativa (uf)
}