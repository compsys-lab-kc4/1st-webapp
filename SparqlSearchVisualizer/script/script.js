var map;
var sparql = "";
var title;
var runnerCount = 0;



$(document).ready(function() {
    title = "Google";
    search_articles();
    // Selectタグの変化
    $("select").change(function() {
        if (this.value !== "-選択してください-") {
            title = this.value;
            //sparql = "PREFIX dbpedia: <http://ja.dbpedia.org/resource/> PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX prop-ja: <http://ja.dbpedia.org/property/> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT distinct ?name, ?label WHERE { ?pref rdf:type dbo:Place; dbo:wikiPageWikiLink category-ja:日本の都道府県; prop-ja:都道府県名 ?name; prop-ja:" + this.value + " ?o . ?o rdfs:label ?label. }"
            search_articles();
        }
    });
    $("#freewordSearch").click(function() {
        $("#searchForm").removeClass("hide");
    });
    $("#freewordSearchClose").click(function() {
        $("#searchForm").addClass("hide");
    });
    $("#freewordSearchExec").click(function() {
        $("#searchForm").addClass("hide");
        title = $("#freewordSearchText").val();
        search_articles();
    });
});


function search_articles() {
    sparql = (function() {
        /*

            PREFIX dbpedia-ja: <http://ja.dbpedia.org/resource/>
            PREFIX owl: <http://dbpedia.org/ontology/>
            select *
            where { 
                dbpedia-ja:{title} ?p ?o . 
                FILTER(?p = owl:wikiPageWikiLink) .
            }
            LIMIT 15
            */
    }).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "").replaceAll("{title}", title);


    d3sparql.query("https://sparql.metadata.moe/dbpedia-ja/query", sparql, render)
}

// Mapへのマーカー描画
function render(json) {
    // initMap();
    var dict = {};
    var arr = [];
    // console.log(json);
    runnerCount += 1;
    $('#query > option').remove();
    $('#query').append($('<option>').html("選択してください(" + runnerCount + "回目)").val("-選択してください-"));
    json["results"]["bindings"].forEach(element => {
        // console.log(element);
        /**
         * o: {type: "uri", value: "http://ja.dbpedia.org/resource/スクウェア・エニックス"}
         * p: {type: "uri", value: "http://dbpedia.org/ontology/wikiPageWikiLink"}
         */
        let val = element["o"]["value"].replaceAll("http://ja.dbpedia.org/resource/", "");
        $('#query').append($('<option>').html(runnerCount + ":" + val).val(val));
        // console.log(val);
        arr.push({
            "name": val,
            "value": val.length * 2 > 10 ? val.length * 2 : 10,
        })
    });



    networkSeries.data = [{
            "name": title,
            "value": fontSize,
            "children": arr
        },

    ];



}