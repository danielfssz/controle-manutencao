var arrEquipamentos = [
    { id: 1, nome: 'epp1', usoSemanal: 120, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { id: 2, nome: 'epp2', usoSemanal: 90, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { id: 3, nome: 'epp3', usoSemanal: 95, usoTotal: 0, proxLL: 0, proxLLR: 0 }];

$("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Equipamento</th>');


for (let semana = 1; semana <= 53; semana++) {
    $("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;" id="semana' + semana + '">Semana' + semana + '</th>');
}

for (let cEqp = 0; cEqp < arrEquipamentos.length; cEqp++) {
    $("#tblManutencao tbody").append('<tr><th scope="col" style="width: 50px;">' + arrEquipamentos[cEqp].nome + '</th>');
}

// Captura a referência da tabela com id “minhaTabela”
var tabela = document.getElementById("tblManutencao");
// Captura a quantidade de linhas já existentes na tabela
var linha = tabela.rows.length;
// Captura a quantidade de colunas da última linha da tabela
var coluna = tabela.rows[linha - 1].cells.length;
// CONTADOR DE LINHAS
var aux = 1;

// Insere uma linha no fim da tabela.
var novaLinha = tabela.insertRow(linha);
tabela.rows[2].insertCell(2) = 'oi');

// Faz um loop para criar as colunas
for (var j = 0; j < coluna; j++) {
    // Insere uma coluna na nova linha 
    novaColuna = novaLinha.insertCell(j);
    // Insere um conteúdo na coluna
    if (j === 0) {
        novaColuna.innerHTML = linha;
    }
    if (j === 1) {
        novaColuna.innerHTML = '<?php echo $produtos?>';
    }
    if (j === 2) {
        novaColuna.innerHTML = '<input class="form-control" name="qtde" id="qtde" required="">';
    }
}





// for (let cEqp = 0; cEqp < arrEquipamentos.length; cEqp++) {
//     var linhaEqp = '<tr><th scope="row">' + arrEquipamentos[cEqp].nome + '</td>';

//     //cria linha do equipamento
//     $("#tblManutencao tbody").append(linhaEqp);

//     for (let semana = 1; semana <= 53; semana++) {
//         //cria coluna da primeira semana
//         $("#tblManutencao thead").append('<th scope="col" style="width: 50px;"> Semana' + semana + '</th>');
//         arrEquipamentos[cEqp].usoTotal += arrEquipamentos[cEqp].usoSemanal;
//                  arrEquipamentos[cEqp].proxLL += arrEquipamentos[cEqp].usoSemanal;
//         arrEquipamentos[cEqp].proxLLR += arrEquipamentos[cEqp].usoSemanal;
//         //$("#tblManutencao thead").append('<th scope="col" style="width: 50px;"> Semana' + semana + '</th>');
//         if (arrEquipamentos[cEqp].proxLL >= 250) {
//             //escreve na celula correspondente se aquele eqp vai pra manutencao
//             //console.log('o equipamento ' + arrEquipamentos[cEqp].nome + ' entrou para lavagem e lubrificação');
//             $("#tblManutencao tbody tr").append('<td>LL</td>');
//             arrEquipamentos[cEqp].proxLL = 0;
//                            } else {
//             $("#tblManutencao tbody tr").append('<td></td>');
//         }
//         if (arrEquipamentos[cEqp].proxLLR >= 500) {
//             //escreve na celula correspondente se aquele eqp vai pra manutencao
//             //console.log('o equipamento ' + arrEquipamentos[cEqp].nome + ' entrou para lavagem e lubrificação e Revisao');
//             $("#tblManutencao tbody tr").append('<td>LLR</td>');
//             arrEquipamentos[cEqp].proxLLR = 0;
//         } else {
//             $("#tblManutencao tbody tr").append('<td></td>');
//         }
//     }
//     $("#tblManutencao thead").append('</tr>');
//     $("#tblManutencao tbody").append('</tr>');
// }

