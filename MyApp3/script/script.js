var map;

var sparql = ""

$(document).ready(function(){
	initMap();

	//Selectタグの変化
	$("select").change(function() {
		if (this.value === "Athlete") {
			color = "#2164e0"
		} else if (this.value == "Scientist") {
			color = "#da0a3a"
		} else if (this.value == "Comedian") {
			color = "#21db08"
		} else if (this.value == "Politician") {
			color = "#ec8e21"
		}
		//SPARQLの変更と問合せ
		sparql = "PREFIX dbpedia-owl:  <http://dbpedia.org/ontology/> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX dbpedia-ja: <http://ja.dbpedia.org/resource/> PREFIX category-ja: <http://ja.dbpedia.org/resource/Category:> select distinct ?pref (count(?s) AS ?o) where {  ?pref rdf:type dbpedia-owl:Place. ?pref dbpedia-owl:wikiPageWikiLink category-ja:日本の都道府県. ?s rdf:type dbpedia-owl:" + this.value + "; dbpedia-owl:birthPlace ?pref. }GROUP BY ?pref ORDER BY DESC(?o)"
		d3sparql.query("http://ja.dbpedia.org/sparql", sparql, render)
	});
});


//Mapへのマーカー描画
function render(json) {
	initMap();

	var infoWindow = {};
	var marker = {};
	var geocoder = new google.maps.Geocoder();

	$.each(json["results"]["bindings"], function(key, result) {
		lat = 0
		lng = 0
		r = 0

		$.each(latlnglist["marker"], function(pref, latlng) {
			if(latlng["pref"] === result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]) {
				lat = latlng["lat"]
				lng = latlng["lng"]
				r = result["o"]["value"] / 20
				return false;
			}
		});

		marker[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]] = new google.maps.Marker({
			map: map,
			position: {
				lat: lat,
				lng: lng
			},
			icon: {
				fillColor: color,                //塗り潰し色
				fillOpacity: 0.4,                    //塗り潰し透過率
				path: google.maps.SymbolPath.CIRCLE, //円を指定
				scale: r,         					 //円のサイズ
				strokeColor: color,                     //枠の色
				strokeWeight: 1.0                   //枠の透過率
			}

		});

		infoWindow[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]] = new google.maps.InfoWindow({
			content: "<span>" + [result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]] + " : " + result["o"]["value"] +  "人" + "</span>"
		});

		marker[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]].addListener('mouseover', function() {
			infoWindow[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]].open(map, marker[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]]);
		});

		marker[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]].addListener('mouseout', function() {
			infoWindow[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]].close(map, marker[result["pref"]["value"].split("http://ja.dbpedia.org/resource/")[1]]);
		});
	});

	var config = {
		"selector": "#result"
	}
}

//Mapの初期化
function initMap() {
	map = new google.maps.Map(document.getElementById('gmap'), {
		center: {lat: 38, lng: 139.751},
		zoom: 5
	});
}