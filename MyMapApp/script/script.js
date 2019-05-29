var map;
var sparql = ""

$(document).ready(function() {
  initMap();

  $('select').change(function() {
    if(this.value !== '-選択してください-') {
      sparql = 'SELECT distinct ?itemLabel ?prefLabel WHERE { ?pref wdt:P31 wd:Q50337. SERVICE wikibase:label { bd:serviceParam wikibase:language "ja". } FILTER(NOT EXISTS { ?item wdt:P31 wd:Q19953632. }) ?item wdt:P19 ?pref; wdt:P106 wd:'
      switch(this.value) {
        case 'サッカー選手':
        sparql += 'Q937857'
        break;
        case 'アイドル':
        sparql += 'Q226008'
        break;
        case '歌手':
        sparql += 'Q177220'
        break;
        case '俳優':
        sparql += 'Q33999'
        break;
      }
      sparql += '. }'
    }
    d3sparql.query("https://query.wikidata.org/sparql", sparql, render)
  })
  
});

// Mapへのマーカー描画
function render(json) {
  // initMap();
  var dict = {};
  $.each(json["results"]["bindings"], function(key, value) {
    console.log(value["prefLabel"]["value"], value["itemLabel"]["value"])
    if(dict[value["prefLabel"]["value"]] == undefined) {
      dict[value["prefLabel"]["value"]] = [];
    }
      dict[value["prefLabel"]["value"]].push(value["itemLabel"]["value"])
  });
  $.each(latlnglist["marker"], function(key, value) {
    var pref = value["pref"]
    var lat = value["lat"]
    var lng = value["lng"]
    if (dict[pref] !== undefined) {
      var marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup("<h3>" + pref + "</h3><hr><p>" + dict[pref].join('<br>') + "</p>").openPopup();
    }
  });
}

// Mapの初期化
function initMap() {
  map = L.map('gmap').setView([35.619, 139.751], 8);

  // 地理院地図レイヤー追加
  L.tileLayer(
    // 地理院地図利用
    'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    {
      attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
    }
  ).addTo(map);
}
