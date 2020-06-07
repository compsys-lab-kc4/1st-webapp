var map;

var sparql = ""

$(document).ready(function(){
	initMap();

	//Selectタグの変化
	$("select").change(function() {
		if (this.value == "all") {
			$("#box1").html("<p><p>");
			$("#box2").html("<p><p>");
			$("#tbox").html("<p><p>");
			initMap();
			sparql = "PREFIX rdf: <http://imi.go.jp/ns/core/rdf#> PREFIX prop: <http://www.coins.tsukuba.ac.jp/~s1611399/lod/ramendata.ttl/property/>	PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> SELECT *WHERE { ?subject rdf:名称 ?namae; rdf:住所 ?address;	rdf:郵便番号 ?post; rdf:電話番号 ?number; prop:開店1 ?open1; prop:閉店1 ?close1;  prop:twitter ?twitter;  prop:食べログ ?tabelog;  prop:GeoNames.jp ?geo;  geo:lat ?lat;  geo:long ?long.	OPTIONAL{ ?subject prop:開店2 ?open2;   prop:閉店2 ?close2. }	OPTIONAL{  ?subject prop:定休日 ?info. }}"
			d3sparql.query("http://enpit.coins.tsukuba.ac.jp:3030/s1611399/query", sparql, render)			
		} else if (this.value == "name") {
			initMap();
			$("#box1").html("<p><p>");
			$("#box2").html("<p><p>");
			$("#tbox").html("<input type=\"text\" id=\"word\" placeholder=\"入力例 : 銀の豚\"> <input id=\"button\" type=\"button\" value=\"検索\" />");
			$("#button").click(function () {
			input = $("#word").val();
			sparql = "PREFIX rdf: <http://imi.go.jp/ns/core/rdf#> PREFIX prop: <http://www.coins.tsukuba.ac.jp/~s1611399/lod/ramendata.ttl/property/> PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> SELECT * WHERE {  ?subject rdf:名称 ?namae;   rdf:住所 ?address;   rdf:郵便番号 ?post;   rdf:電話番号 ?number;   prop:開店1 ?open1;   prop:閉店1 ?close1;   prop:twitter ?twitter;   prop:食べログ ?tabelog;   prop:GeoNames.jp ?geo;   geo:lat ?lat;   geo:long ?long.  FILTER(regex(str(?namae),\"" + input + "\")). OPTIONAL{  ?subject prop:開店2 ?open2;   prop:閉店2 ?close2. } OPTIONAL{ ?subject prop:定休日 ?info. }}"
			d3sparql.query("http://enpit.coins.tsukuba.ac.jp:3030/s1611399/query", sparql, render)
		})
		} else if (this.value == "area") {
			initMap();
			$("#box1").html("<p><p>");
			$("#box2").html("<p><p>");
			$("#tbox").html("<select id=\"tiku\" class=\"form-control\"> <option>-地区を選択-</option>  <option value=\"稲岡\">稲岡</option>  <option value=\"下広岡\">下広岡</option> <option value=\"花室\">花室</option> <option value=\"花畑\">花畑</option> <option value=\"研究学園\">研究学園</option> <option value=\"吾妻\">吾妻</option> <option value=\"桜\">桜</option> <option value=\"柴崎\">柴崎</option> <option value=\"春日\">春日</option> <option value=\"小田\">小田</option> <option value=\"小野崎\">小野崎</option> <option value=\"上横場\">上横場</option> <option value=\"竹園\">竹園</option> <option value=\"筑穂\">筑穂</option> <option value=\"天久保\">天久保</option> <option value=\"二の宮\">二の宮</option> <option value=\"北条\">北条</option> </select>");
			$("#tiku").change(function() {
			input = this.value
			sparql = "PREFIX rdf: <http://imi.go.jp/ns/core/rdf#> PREFIX prop: <http://www.coins.tsukuba.ac.jp/~s1611399/lod/ramendata.ttl/property/> PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> SELECT * WHERE {  ?subject rdf:名称 ?namae;   rdf:住所 ?address;   rdf:郵便番号 ?post;   rdf:電話番号 ?number;   prop:開店1 ?open1;   prop:閉店1 ?close1;   prop:twitter ?twitter;   prop:食べログ ?tabelog;   prop:GeoNames.jp ?geo;   geo:lat ?lat;   geo:long ?long.  FILTER(regex(str(?geo),\"" + input + "\")). OPTIONAL{  ?subject prop:開店2 ?open2;   prop:閉店2 ?close2. } OPTIONAL{ ?subject prop:定休日 ?info. }}"
			d3sparql.query("http://enpit.coins.tsukuba.ac.jp:3030/s1611399/query", sparql, render)
		})
		}
	});
});

//Mapへのマーカー描画
function render(json) {
	initMap();

	var infoWindow = {};
	var marker = {};
	var geocoder = new google.maps.Geocoder();

	$.each(json["results"]["bindings"], function(key, result) {
		var lat = Number(result["lat"]["value"])
		lng = Number(result["long"]["value"])

		marker[result["namae"]["value"]] = new google.maps.Marker({
			map: map,
			position: {
				lat: lat,
				lng: lng
			},
			icon: {
				url: 'iconDownload.cgi.png',
				scaledSize: new google.maps.Size(20, 20)
			}

		});

		infoWindow[result["namae"]["value"]] = new google.maps.InfoWindow({
			content: "<span>" + [result["namae"]["value"]] + "</span>"
		});

		marker[result["namae"]["value"]].addListener('mouseover', function() {
			infoWindow[result["namae"]["value"]].open(map, marker[result["namae"]["value"]]);
		});

		marker[result["namae"]["value"]].addListener('mouseout', function() {
			infoWindow[result["namae"]["value"]].close(map, marker[result["namae"]["value"]]);
		});

		marker[result["namae"]["value"]].addListener('click', function() {
			$("#box1").html("<p>" + result["namae"]["value"] + "<p>");
			$("#box2").html("<p>" + "住所 : 〒" + result["post"]["value"].split("N")[0] + "<br>　　　"
							+ String(result["address"]["value"]) + "<br>"
							+ "電話番号 : " + String(result["number"]["value"]) + "<br>"
							+ "開店時間 : " + String(result["open1"]["value"])
							+ " ~ " + String(result["close1"]["value"]) + "<br>"
							//+ String(result["open2"]["value"])
							//+ " ~ " + String(result["close2"]["value"]) + "<br>"
							+ "定休日 : " + String(result["info"]["value"]) + "<br>"
							+ "その他のリンク : <a href=\"" + String(result["twitter"]["value"]) + "\">公式Twitter</a><br>"
							+ "　　　　　　　　<a href=\"" + String(result["tabelog"]["value"]) + "\">食べログ</a><br>"
							+ "　　　　　　　　<a href=\"" + String(result["geo"]["value"]) + "\">GeoNames</a><br>"
							+ "<p>");
		});
	});

	var config = {
		"selector": "#result"
	}
}

//Mapの初期化
function initMap() {
	map = new google.maps.Map(document.getElementById('gmap'), {
		center: {lat: 36.108824, lng: 140.103652},
		zoom: 13
	});
}
