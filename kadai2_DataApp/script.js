function onButtonClick() {
  var word = document.getElementById("search").value;
  if (word !== "") {
    var sparql = "";
    sparql = sparql + " " + "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>"
    sparql = sparql + " " + "PREFIX sdmx-dimension: <http://purl.org/linked-data/sdmx/2009/dimension#>"
    sparql = sparql + " " + "PREFIX estat-measure: <http://data.e-stat.go.jp/lod/ontology/measure/>"
    sparql = sparql + " " + "PREFIX cd-dimension: <http://data.e-stat.go.jp/lod/ontology/crossDomain/dimension/>"
    sparql = sparql + " " + "PREFIX cd-code: <http://data.e-stat.go.jp/lod/ontology/crossDomain/code/>"
    sparql = sparql + " " + "PREFIX g00200521-dimension-2010:<http://data.e-stat.go.jp/lod/ontology/g00200521/dimension/2010/>"
    sparql = sparql + " " + "PREFIX g00200521-code-2010:<http://data.e-stat.go.jp/lod/ontology/g00200521/code/2010/>"
    sparql = sparql + " " + "SELECT ?year ?population WHERE {"
    sparql = sparql + " " + "?s estat-measure:population ?population;"
    sparql = sparql + " " + "sdmx-dimension:refArea / rdfs:label \"" + word + "\"@ja ;"
    sparql = sparql + " " + "cd-dimension:timePeriod ?year ;"
    sparql = sparql + " " + "cd-dimension:sex cd-code:sex-all ;"
    sparql = sparql + " " + "cd-dimension:nationality cd-code:nationality-all ;"
    sparql = sparql + " " + "g00200521-dimension-2010:area g00200521-code-2010:area-all ;"
    sparql = sparql + " " + "cd-dimension:age cd-code:age-all ."
    sparql = sparql + " " + "}"
    d3sparql.query("http://data.e-stat.go.jp/lod/sparql/alldata/query", sparql, render)
  }
}

function render(json) {
  var config = {
    "selector": "#result"
  }
  d3sparql.htmltable(json, config)
}
