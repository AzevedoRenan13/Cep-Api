'use Strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        document.getElementById('endereco').value = 'CEP inválido';
    }else{
        preencherFormulario(endereco);
    }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
    
    
}

document.getElementById('cep').addEventListener('focusout',pesquisarCep);