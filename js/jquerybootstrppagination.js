class JQueryBootStrpPagination {
  #version = '2024.05.10-1300';
  
  constructor(datasetJSON, areaView, areaPagination, recordsByPage) {
    this.ds = datasetJSON;
    this.areaView = areaView;
    this.areaPagination = areaPagination;
    this.recordsByPage = recordsByPage;
  }
  
  get version(){
    //return this.#version;
    console.log(`Versão do JQueryBootStrpPagination: ${this.#version}.`);
  }

  displayRecords(page) {
    let pageIni = (page - 1) * this.recordsByPage;
    let pageEnd = pageIni + this.recordsByPage;
    let rs = this.ds.slice(pageIni, pageEnd);

    // Limpa a área de exibição antes de adicionar os novos registros
    $(this.areaView).empty();

    // Loop para criar os elementos HTML para cada item
    rs.forEach(function(item) {
      let line = $("<div>").addClass("col-lg-3");
      line.append( 
                   $("<img>").addClass("rounded-circle")
                             .prop('src', ( item.img != 'undefined' && item.img != null && item.img != '' ) ? item.img: 'img/semimagem.png' )
                             .attr({ width:"100", height:"100" })
                 );
      line.append( $("<h2>").addClass("fw-normal").text( item.nome ) );
      line.append( $("<p>").text(item.detalhe) )
          .append( $("<p>").append( $("<a>").addClass("btn btn-secondary viewdetail")
                                            .attr({ href:"#", uid:item.uid })
                                            .html("Detalhes &raquo;") ) );
      $(this.areaView).append(line);
    }.bind(this));

    // Criar os botões de paginação
    let pageNumbers = Math.ceil(this.ds.length / this.recordsByPage);
    let pag = $(this.areaPagination);
    pag.empty();

    // Botão para ir para a primeira página
    let btnFirst = $("<li>").addClass("page-item")
                            .append( $("<a>").addClass("page-link")
                                             .attr({ 'href':'#', 'aria-label':'First' })
                                             .append( $("<span>").attr("aria-hidden", "true")
                                                                 .html("&laquo;") 
                                             ) 
                            );
    btnFirst.click(function() {
      this.displayRecords(1);
    }.bind(this));
    pag.append(btnFirst);

    // Botão "..." para avançar para o próximo grupo de 5 páginas
    if (pageNumbers > 5 && page + 4 < pageNumbers) {
      let btnNextGroupPage = $("<li>").addClass("page-item")
                                      .append( $("<a>").addClass("page-link")
                                                       .attr('href','#')
                                                       .text('...')
                                      );
      btnNextGroupPage.click(function() {
        this.displayRecords(page + 5);
      }.bind(this));
      pag.append(btnNextGroupPage);
    }

    // Criação dos botões de páginação dinamicamente
    for (let i = Math.max(1, page - 2); i <= Math.min(pageNumbers, page + 2); i++) {
      let btnPage = $("<li>").addClass("page-item")
                             .append( $("<a>").addClass("page-link")
                                              .attr('href','#')
                                              .text(i)
                             );
      btnPage.click(function() {
        this.displayRecords(i);
      }.bind(this));
      pag.append(btnPage);
    }
    
    // Botão para ir para a última página
    let btnLast = $("<li>").addClass("page-item")
                           .append( $("<a>").addClass("page-link")
                                            .attr({ 'href':'#', 'aria-label':'Last' })
                                            .append( $("<span>").attr("aria-hidden", "true")
                                                                .html("&raquo;") 
                                            ) 
                           );
    btnLast.click(function() {
      this.displayRecords(pageNumbers);
    }.bind(this));
    pag.append(btnLast);
  }
}

