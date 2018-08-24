var arrEquipamentos = [
    { id: 1, nome: 'EPP1', usoSemanal: 120, usoTotal: 0 },
    { id: 2, nome: 'EPP2', usoSemanal: 90, usoTotal: 0 },
    { id: 3, nome: 'EPP3', usoSemanal: 95, usoTotal: 0 },
    { id: 4, nome: 'EPP4', usoSemanal: 105, usoTotal: 0 },
    { id: 5, nome: 'EPP5', usoSemanal: 25, usoTotal: 0 },
    { id: 6, nome: 'EPP6', usoSemanal: 30, usoTotal: 0 },
    { id: 7, nome: 'EPP7', usoSemanal: 80, usoTotal: 0 },
    { id: 8, nome: 'EPP8', usoSemanal: 75, usoTotal: 0 },
    { id: 9, nome: 'EPP9', usoSemanal: 60, usoTotal: 0 },
    { id: 10, nome: 'EPP10', usoSemanal: 65, usoTotal: 0 },
    { id: 11, nome: 'EPP11', usoSemanal: 80, usoTotal: 0 },
    { id: 12, nome: 'EPP12', usoSemanal: 20, usoTotal: 0 },
    { id: 13, nome: 'EPP13', usoSemanal: 50, usoTotal: 0 },
    { id: 14, nome: 'EPP14', usoSemanal: 10, usoTotal: 0 },
    { id: 15, nome: 'EPP15', usoSemanal: 10, usoTotal: 0 },
    { id: 16, nome: 'EPP16', usoSemanal: 35, usoTotal: 0 },
    { id: 17, nome: 'RS1', usoSemanal: 50, usoTotal: 0 }
];

$("#tblManutencao thead tr").append('<th scope="col">Equipamento</th>');

for (let mes = 1; mes <= 12; mes++) {
    $("#tblCabecalho thead tr").append('<th scope="col">Equipamento</th>');
    for (let sem = 1; sem <= 4; sem++) {
        $("#tblManutencao thead tr").append('<th scope="col" style="width: 20px;">' + sem + '</th>');
    }
}

for (let eqp = 0; eqp < arrEquipamentos.length; eqp++) {
    $("#tblManutencao tbody").append('<tr class="thead-dark" id=eqp' + arrEquipamentos[eqp].id + '> <th scope="col">' + arrEquipamentos[eqp].nome + '</th> </tr>');

    var ll = 250;
    var llr = 500;
    for (let semana = 1; semana <= 53; semana++) {
        var add = true;
        arrEquipamentos[eqp].usoTotal += arrEquipamentos[eqp].usoSemanal;

        if (arrEquipamentos[eqp].usoTotal >= ll && !(arrEquipamentos[eqp].usoTotal >= llr)) {
            $("#eqp" + arrEquipamentos[eqp].id).append('<td> <i class="fas fa-tint"></i> </td>');
            ll += 250;
            add = false;
        } else if (arrEquipamentos[eqp].usoTotal >= llr) {
            $("#eqp" + arrEquipamentos[eqp].id).append('<td> <i class="fas fa-oil-can"></i></td>');
            ll += 250;
            llr += 500;
            add = false;
        }
        if (add) {
            $("#eqp" + arrEquipamentos[eqp].id).append('<td></td>');
        }
    }
}