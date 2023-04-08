const form = document.getElementById('form-contato');
const nomes = [];
const numeros = [];
const imgCheck = '<img src="./img/check.png" alt= "Número salvo com sucesso"/>';
let linhas = '';

form.addEventListener( 'submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    
    if (nomes.includes(inputNomeContato.value )){
        alert(`O contato: ${inputNomeContato.value} será repetido`)
    } else{
        nomes.push(inputNomeContato.value);
        numeros.push(parseInt(inputNumeroContato.value));
    }
        
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${imgCheck}`
    linha += '</tr>';
    linhas += linha;

inputNomeContato.value = '';
inputNumeroContato.value = '';
}

function atualizaTabela(){
const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;
}