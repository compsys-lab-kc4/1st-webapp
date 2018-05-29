var sparql = ""

$(document).ready(function(){

	//Selectタグの変化
	$('input#button1').on('click', function() {

			var name = "SELECT ?title WHERE {?uri dc:creator \""+ $('input#text1').val() + "\"@ja. ?uri <http://purl.org/dc/elements/1.1/title> ?title.}";


			$("div#sgvzl_example_table").attr("data-sgvizler-query", name);

			sgvizler.containerDrawAll();

	});

		$("input#text2").change(function() {

			var name = "SELECT ?cre ?pub ?des WHERE {?uri dc:title \""+ $('input#text2').val()+ "\"@ja. ?uri dc:creator ?cre. ?uri dc:publisher ?pub. ?uri dc:description ?des}";

			$("div#sgvzl_example_table").attr("data-sgvizler-query", name);

			sgvizler.containerDrawAll();

	});

		$('input#button3').on('click', function() {
			var name = "SELECT ?creator (count(?uri) AS ?noOfUri) WHERE {  ?uri dc:creator ?creator. }GROUP BY ?creator ORDER BY DESC(?noOfUri)";

			$("div#sgvzl_example_table").attr("data-sgvizler-query", name);

			sgvizler.containerDrawAll();
});
		$('input#button4').on('click', function() {
			$('input#text1').val("");
			$('input#text2').val("");

			sgvizler.containerDrawAll();
			});


});
