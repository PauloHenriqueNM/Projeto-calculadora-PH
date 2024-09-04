const form = document.getElementById('form-atividade');
const imagemAprovado = '<img src="./images/aprovado.png" alt="emoji feliz" />'
const imagemReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<spam class="resultado aprovado" >Aprovado</spam>'
const spanReprovado = '<spam class="resultado reprovado" >Reprovado</spam>'
const notaMinima = parseFloat(prompt("Digite a nota miníma:"));


let linhas = ' ';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizarMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotadaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotadaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotadaAtividade.value}</td>`;
        linha += `<td>${inputNotadaAtividade.value >= notaMinima ? imagemAprovado : imagemReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotadaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');3
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length;
}