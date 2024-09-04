function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtdInput = document.getElementById('qtd');
    let qtd = parseInt(document.getElementById('qtd').value);

    //Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comrparInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qdtPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qdtPista) {
        alert('Quantidade indisponível para o tipo pista'); 
    } else {
        qdtPista = qdtPista - qtd;
        document.getElementById('qtd-pista').textContent = qdtPista;
        alert('Compra realizada com sucesso !');
    }
}

function comprarSuperior(qtd) {
    let qdtSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qdtSuperior) {
        alert('Quantidade indisponível para o tipo superior'); 
    } else {
        qdtSuperior = qdtSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qdtSuperior;
        alert('Compra realizada com sucesso !');
    }
}

function comrparInferior(qtd) {
    let qdtInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qdtInferior) {
        alert('Quantidade indisponível para o tipo inferior'); 
    } else {
        qdtInferior = qdtInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qdtInferior;
        alert('Compra realizada com sucesso !');
    }
}