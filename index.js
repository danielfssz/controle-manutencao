var arrEquipamentos = [
    { nome: 'epp1', usoSemanal: 120, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { nome: 'epp1', usoSemanal: 90, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { nome: 'epp1', usoSemanal: 95, usoTotal: 0, proxLL: 0, proxLLR: 0 }];




for (let semana = 1; semana <= 53; semana++) {
    for (let cEqp = 0; cEqp < arrEquipamentos.length; cEqp++) {
        arrEquipamentos[cEqp].usoTotal += arrEquipamentos[cEqp].usoSemanal;
        arrEquipamentos[cEqp].proxLL += arrEquipamentos[cEqp].usoSemanal;
        arrEquipamentos[cEqp].proxLLR += arrEquipamentos[cEqp].usoSemanal;
        if (arrEquipamentos[cEqp].usoTotal >= 250) {
            console.log('o equipamento ' + arrEquipamentos[cEqp] + ' entrou para lavagem e lubrificação')
        }
    }
}


for (let cEqp = 0; cEqp < arrEquipamentos.length; cEqp++) {
    console.log('o uso total foi ' + arrEquipamentos[cEqp].usoTotal);
}