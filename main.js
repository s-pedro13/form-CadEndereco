'use strict'; // Ativa o modo estrito
// Este modo faz com que o JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns na programação
/* Consumo de API - https://viacep.com.br/ */ // API que será utilizada para obter os dados de endereço através do CEP.

// Função para limpar campos preenchidos
const limparFormulario = () => {
    document.getElementById('logradouro').value = ''; // Limpa o campo logradouro (rua).
    document.getElementById('bairro').value = ''; // Limpa o campo bairro.
    document.getElementById('localidade').value = ''; // Limpa o campo localidade (cidade).
    document.getElementById('uf').value = ''; // Limpa o campo uf (estado).
    document.getElementById('numero').value = ''; // Limpa o campo número.
    document.getElementById('complemento').value = ''; // Limpa o campo complemento.
}
// Função que verifica se a entrada contém apenas números
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Verifica se o valor contém apenas números de 0 a 9 usando expressão regular.
// Função que verifica se o CEP é válido
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // Verifica se o CEP contém 8 dígitos e se é composto apenas por números.
// Função para preencher o formulário com os dados do endereço retornados pela API
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro; // Preenche o campo logradouro com o valor retornado pela API.
    document.getElementById('bairro').value = endereco.bairro; // Preenche o campo bairro com o valor retornado pela API.
    document.getElementById('localidade').value = endereco.localidade; // Preenche o campo localidade (cidade) com o valor retornado pela API.
    document.getElementById('uf').value = endereco.uf; // Preenche o campo uf (estado) com o valor retornado pela API.
}
// Função assíncrona para consumir a API ViaCEP e buscar os dados do endereço baseado no CEP informado
const pesquisarCep = async() => {
    limparFormulario(); // Limpa o formulário antes de preencher com os novos dados.
    const url = `https://viacep.com.br/ws/${cep.value}/json/`; // Monta a URL de consulta à API, inserindo o valor do CEP informado.
    // Verifica se o CEP é válido antes de fazer a requisição
    if(cepValido(cep.value)){
        const dados = await fetch(url); // Faz a requisição para a API ViaCEP e aguarda a resposta.
        const address = await dados.json(); // Converte a resposta da API em um objeto JSON.
        // Verifica se o CEP não foi encontrado (propriedade 'erro' na resposta da API)
        if(address.hasOwnProperty('erro')){
            alert('CEP não encontrado'); // Exibe uma mensagem de alerta caso o CEP não seja encontrado.
        }else{
            preencherFormulario(address); // Preenche o formulário com os dados retornados se o CEP for válido.
        }  
    }else{
        alert('CEP incorreto'); // Exibe uma mensagem de alerta caso o CEP não seja válido (menos de 8 dígitos ou caracteres inválidos).
    }
}
// Adiciona um evento "focusout" (quando o campo perde o foco) ao campo de CEP, chamando a função 'pesquisarCep' assim que o usuário termina de digitar o CEP.
document.getElementById('cep').addEventListener('focusout', pesquisarCep);