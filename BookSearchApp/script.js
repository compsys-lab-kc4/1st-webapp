function onButtonClick() {
  var word = document.getElementById("search")
  if (word !== "") {
    var sparql = "";
    sparql = sparql + " " + "PREFIX dcterms: <http://purl.org/dc/terms/>"
    sparql = sparql + " " + "PREFIX xl: <http://www.w3.org/2008/05/skos-xl#>"
    sparql = sparql + " " + "SELECT * WHERE {"
    sparql = sparql + " " + "?uri dcterms:source ?book."
    sparql = sparql + " " + "?uri xl:prefLabel [xl:literalForm ?heading]."
    sparql = sparql + " " + "FILTER REGEX (str(?book), !&quot奥付&quot)"
    sparql = sparql + " " + "FILTER REGEX (str(?book), &quot" + word + "&quot)"
    sparql = sparql + " " + "FILTER REGEX (str(?heading), !&quot所^&quot)"
    sparql = sparql + " " + "FILTER REGEX (str(?heading), !&quot会^&quot)"
    sparql = sparql + " " + "FILTER REGEX (str(?heading), !&quot大学^&quot)"
    sparql = sparql + " " + "FILTER REGEX (str(?heading), !&quot社^&quot)}"
    d3sparql.query("http://id.ndl.go.jp/auth/ndla", sparql, render)
  }
}

function render(json) {
  var config = {
    "margin": {"top": 10, "right": 10, "bottom": 10, "left": 10},
    "selector": "#result"
  }
  d3sparql.htmltable(json, config)
}
