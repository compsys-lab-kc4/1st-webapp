$(document).ready(function(){
	//Selectタグの変化
	$("#query").change(function() {	

		if(this.value === "Bar") {
            var name = "google.visualization.BarChart";
			$("div#sgvzl_example_table").attr("data-sgvizler-chart", name);
			sgvizler.containerDrawAll();
		} else if(this.value === "Table") {
            var name = "google.visualization.Table";
			$("div#sgvzl_example_table").attr("data-sgvizler-chart", name);
			sgvizler.containerDrawAll();
		}
	});
});