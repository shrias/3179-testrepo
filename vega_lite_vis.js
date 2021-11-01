var vg_1 = "deposit_states.vega";
vegaEmbed("#aus_chart", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "deposit_mineral_type.vega";
vegaEmbed("#mineral_chart", vg_2).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "expenditure_vs_metersdrilled.vega";
vegaEmbed("#exp_meters_chart", vg_3).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "Onshore_Offshore_drilling.vega";
vegaEmbed("#onshore_offshore_chart", vg_4).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);



//Line 1 defines a variable called “vg_1” which contains the location of the Vega-Lite JSON file.
// This file name should be the same as the file you created in Section 3.1 – Method 2 (Figure 3).

// Line 2 embeds the Vega-Lite visualisation stored in “vg_1” in the div container named “bar_chart” (do 
//not forget the “#” key before the div name). 
