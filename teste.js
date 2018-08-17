var arrEquipamentos = [
    { id: 1, nome: 'epp1', usoSemanal: 120, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { id: 2, nome: 'epp2', usoSemanal: 90, usoTotal: 0, proxLL: 0, proxLLR: 0 },
    { id: 3, nome: 'epp3', usoSemanal: 95, usoTotal: 0, proxLL: 0, proxLLR: 0 }];

$("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Equipamento</th>');

// for (let semana = 1; semana <= 53; semana++) {
//     $("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Semana ' + semana + '</th>');
//     for (let eqp = 0; eqp < arrEquipamentos.length; eqp++) {
//         if (eqp == 0) {
//             $("#tblManutencao tbody").append('<tr> <th scope="col">' + arrEquipamentos[eqp].nome + '</th> </tr>');
//         }
//         $("#tblManutencao tbody tr").append('<td></td>');
//     }
// }

for (let semana = 1; semana <= 53; semana++) {
    $("#tblManutencao thead tr").append('<th scope="col" style="width: 50px;">Semana' + semana + '</th>');
}

for (let eqp = 0; eqp < arrEquipamentos.length; eqp++) {
    $("#tblManutencao tbody").append('<tr> <th scope="col">' + arrEquipamentos[eqp].nome + '</th> </tr>');
    for (let semana = 1; semana <= 53; semana++) {
        $("#tblManutencao tbody tr").append('<td>' + semana + '</td>');
    }
}



// function criarTabela(conteudo) {
//     var tabela = document.createElement("table");
//     var thead = document.createElement("thead");
//     var tbody = document.createElement("tbody");

//     var thd = function (i) { return (i == 0) ? "th" : "td"; };

//     for (var i = 0; i < conteudo.length; i++) {
//         var tr = document.createElement("tr");
//         for (var o = 0; o < conteudo[i].length; o++) {
//             var t = document.createElement(thd(i));
//             var texto = document.createTextNode(conteudo[i][o]);
//             t.appendChild(texto);
//             tr.appendChild(t);
//         }
//         (i == 0) ? thead.appendChild(tr) : tbody.appendChild(tr);
//     }
//     tabela.appendChild(thead);
//     tabela.appendChild(tbody);
//     return tabela;
// }
// document.getElementById("tblManutencao").appendChild(criarTabela([
//     ["id", "nome", "idade"],
//     [1, "matheus", 16],
//     [2, "cristian", 16],
//     [3, "pedro", 10],
//     [4, "henrique", 10]
// ]));