$(function() {
  let dataset =
    [
      { "uid": 1, "nome":  "Resultado 01", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 2, "nome":  "Resultado 02", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 3, "nome":  "Resultado 03", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 4, "nome":  "Resultado 04", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 5, "nome":  "Resultado 05", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 6, "nome":  "Resultado 06", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 7, "nome":  "Resultado 07", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 8, "nome":  "Resultado 08", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 9, "nome":  "Resultado 09", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 10, "nome": "Resultado 10", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 11, "nome": "Resultado 11", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 12, "nome": "Resultado 12", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 13, "nome": "Resultado 13", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 14, "nome": "Resultado 14", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 15, "nome": "Resultado 15", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 16, "nome": "Resultado 16", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 17, "nome": "Resultado 17", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 18, "nome": "Resultado 18", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 19, "nome": "Resultado 19", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
      { "uid": 20, "nome": "Resultado 20", "img":"", "detalhe":"teste de detalhes", "cidade":"Natal", "uf":"RN" },
    ];

  $("#btnConsultar").on('click', function(){
    /*
     * JQueryBootStrpPagination
     * - Params
     * dataset: json
     * id: $("#view-result")
     * id: $("#pagination-result")
     * recordByPages: int
     */
    let pag = new JQueryBootStrpPagination(dataset, $("#finder-result"), $("#page-result"), 4);
    pag.displayRecords(1);
  });
  
  $(document).on('click', '.viewdetail', function(e){
    e.preventDefault;

    alert("Cartão selecionado, " + $( this ).attr("uid") );
  });
});
