var arrEquipamentos = [
    { nome: 'epp1', usoSemanal: 120, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { nome: 'epp2', usoSemanal: 90, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { nome: 'epp3', usoSemanal: 95, usoTotal: 0, proxLL: 0, proxLLR: 0 }];

$("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Equipamento</th>');

for (let semana = 1; semana <= 53; semana++) {
    $("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Semana' + semana + '</th>');
    for (let cEqp = 0; cEqp < arrEquipamentos.length; cEqp++) {
        $("#tblManutencao tbody").append('<tr>');
        $("#tblManutencao tbody").append('<th scope="col" style="width: 50px;">' + arrEquipamentos[cEqp].nome + '</th>');
        $("#tblManutencao tbody").append('<td>Otto</td>');
        $("#tblManutencao tbody").append('</tr>');
    }
}


// for (let cEqp = 0; cEqp < arrEquipamentos.length; cEqp++) {
//     var linhaEqp = '<tr><th scope="row">' + arrEquipamentos[cEqp].nome + '</td>';
//     console.log(arrEquipamentos[cEqp].nome)
//     //cria linha do equipamento
//     $("#tblManutencao tbody").append(linhaEqp);

//     for (let semana = 1; semana <= 53; semana++) {
//         //cria coluna da primeira semana
//         $("#tblManutencao thead").append('<th scope="col" style="width: 50px;"> Semana' + semana + '</th>');
//         arrEquipamentos[cEqp].usoTotal += arrEquipamentos[cEqp].usoSemanal;
//         arrEquipamentos[cEqp].proxLL += arrEquipamentos[cEqp].usoSemanal;
//         arrEquipamentos[cEqp].proxLLR += arrEquipamentos[cEqp].usoSemanal;
//         //$("#tblManutencao thead").append('<th scope="col" style="width: 50px;"> Semana' + semana + '</th>');
//         if (arrEquipamentos[cEqp].proxLL >= 250) {
//             //escreve na celula correspondente se aquele eqp vai pra manutencao
//             //console.log('o equipamento ' + arrEquipamentos[cEqp].nome + ' entrou para lavagem e lubrificação');
//             $("#tblManutencao tbody").append('<td>LL</td>');
//             arrEquipamentos[cEqp].proxLL = 0;
//         } else {
//             $("#tblManutencao tbody").append('<td></td>');
//         }
//         if (arrEquipamentos[cEqp].proxLLR >= 500) {
//             //escreve na celula correspondente se aquele eqp vai pra manutencao
//             //console.log('o equipamento ' + arrEquipamentos[cEqp].nome + ' entrou para lavagem e lubrificação e Revisao');
//             $("#tblManutencao tbody").append('<td>LLR</td>');
//             arrEquipamentos[cEqp].proxLLR = 0;
//         } else {
//             $("#tblManutencao tbody").append('<td></td>');
//         }
//     }
//     $("#tblManutencao thead").append('</tr>');
//     $("#tblManutencao tbody").append('</tr>');
// }

