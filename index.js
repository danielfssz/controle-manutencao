var arrEquipamentos = [
    { id: 1, nome: 'epp1', usoSemanal: 50, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { id: 2, nome: 'epp2', usoSemanal: 90, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { id: 3, nome: 'epp3', usoSemanal: 95, usoTotal: 0, proxLL: 0, proxLLR: 0 }];

$("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Equipamento</th>');

for (let semana = 1; semana <= 53; semana++) {
    $("#tblManutencao thead tr").append('<th scope="col" style="width: 20px;">' + semana + '</th>');
}

for (let eqp = 0; eqp < arrEquipamentos.length; eqp++) {
    $("#tblManutencao tbody").append('<tr id=eqp' + arrEquipamentos[eqp].id + '> <th scope="col">' + arrEquipamentos[eqp].nome + '</th> </tr>');
    for (let semana = 1; semana <= 53; semana++) {
        var add = true;
        arrEquipamentos[eqp].usoTotal += arrEquipamentos[eqp].usoSemanal;
        arrEquipamentos[eqp].proxLL += arrEquipamentos[eqp].usoSemanal;
        arrEquipamentos[eqp].proxLLR += arrEquipamentos[eqp].usoSemanal;

        if (arrEquipamentos[eqp].proxLL >= 250 && arrEquipamentos[eqp].proxLLR >= 500) {
            $("#eqp" + arrEquipamentos[eqp].id).append('<td>LL LLR</td>');
            arrEquipamentos[eqp].proxLL = 0;
            arrEquipamentos[eqp].proxLLR = 0;
            add = false;
        } else {
            if (arrEquipamentos[eqp].proxLL >= 250) {
                $("#eqp" + arrEquipamentos[eqp].id).append('<td>LL</td>');
                arrEquipamentos[eqp].proxLL = 0;
                add = false;
            } else if (arrEquipamentos[eqp].proxLLR >= 500) {
                $("#eqp" + arrEquipamentos[eqp].id).append('<td>LLR</td>');
                arrEquipamentos[eqp].proxLLR = 0;
                add = false;
            }
            if (add) {
                $("#eqp" + arrEquipamentos[eqp].id).append('<td></td>');
            }
        }
    }
}