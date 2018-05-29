var sparql = ""

$(document).ready(function(){

	//Selectタグの変化
	$("select").change(function() {
/*		if(this.value === "サッカー選手") {
			$("div#sgvzl_example_query").attr("data-sgvizler-query", "select distinct ?p (count(?s) AS ?number) where {?pref rdf:type dbpedia-owl:Place.?pref dbpedia-owl:wikiPageWikiLink category-ja:日本の都道府県.?s rdf:type dbpedia-owl:SoccerPlayer;dbpedia-owl:birthPlace ?pref.?pref prop-ja:name ?p.}GROUP BY ?p ORDER BY DESC(?number)");
//	 		data-sgvizler-query="select distinct ?p (count(?s) AS ?number) where {?pref rdf:type dbpedia-owl:Place.?pref dbpedia-owl:wikiPageWikiLink category-ja:日本の都道府県.?s rdf:type dbpedia-owl:SoccerPlayer;dbpedia-owl:birthPlace ?pref.?pref prop-ja:name ?p.}GROUP BY ?p ORDER BY DESC(?number)"data-sgvizler-chart="google.visualization.BarChart"data-sgvizler-loglevel="2"style="width:1600px; height:1600px;"
			sgvizler.containerDrawAll();
			$("#text1").text("サッカー選手の都道府県別出生地ランキング");
			$("#text2").text("■棒グラフ");
//			sparql = "PREFIX dbpedia: <http://ja.dbpedia.org/resource/> PREFIX dbpedia-­owl: <http://dbpedia.org/ontology/> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX prop-ja: <http://ja.dbpedia.org/property/> select distinct ?p (count(?s) AS ?number) where { ?pref rdf:type dbpedia-owl:Place. ?pref dbpedia-owl:wikiPageWikiLink category-ja:日本の都道府県. ?s rdf:type dbpedia-owl:SoccerPlayer; dbpedia-owl:birthPlace ?pref. ?pref prop-ja:name ?p. }GROUP BY ?p ORDER BY DESC(?number)"
//			d3sparql.query("http://ja.dbpedia.org/sparql", sparql, render)
		}else if(this.value === "お笑い芸人"){
			$("div#sgvzl_example_query").attr("data-sgvizler-query", "select distinct ?p (count(?s) AS ?number) where {?pref rdf:type dbpedia-owl:Place.?pref dbpedia-owl:wikiPageWikiLink category-ja:日本の都道府県.?s rdf:type dbpedia-owl:Comedian;dbpedia-owl:birthPlace ?pref.?pref prop-ja:name ?p.}GROUP BY ?p ORDER BY DESC(?number)");
		sgvizler.containerDrawAll();
		}

*/	

		if(this.value !== "選択してください-") {
			var name = "select distinct ?p (count(?s) AS ?number) where {?pref rdf:type dbpedia-owl:Place.?pref dbpedia-owl:wikiPageWikiLink category-ja:日本の都道府県.?s rdf:type dbpedia-owl:" + this.value + ";dbpedia-owl:birthPlace ?pref.?pref prop-ja:name ?p.}GROUP BY ?p ORDER BY DESC(?number)";
			$("div#sgvzl_example_query").attr("data-sgvizler-query", name);
			$("#text1").text($("select#query option:selected").text() + "の都道府県別出生地ランキング");
			$("#text2").text("■棒グラフ");
			sgvizler.containerDrawAll();
		}

	});
});
