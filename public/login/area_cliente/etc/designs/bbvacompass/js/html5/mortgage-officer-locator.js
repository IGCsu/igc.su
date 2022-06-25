$(document).ready(function() {

    var stateAndCountyData = {};

    $.ajax("/bin/bbvacompass/state-and-county.json").success(function(data) {
        if (typeof data === "object") {
            stateAndCountyData = data;
        } else {
            stateAndCountyData = JSON.parse(data);
        }
    });

    var countySelector = $("#mortgage-officer-county-selector");
    var mboSubmit = $("#mortgage-officer-locator-submit");

    $("#mortgage-officer-state-selector").change(function() {

        mboSubmit.addClass("disabled");
        mboSubmit.attr("disabled","disabled");

        $(this).attr("value", this.value);
        var countyData = stateAndCountyData[this.value].counties;
        var sortedCounties = countyData.sort(function(a,b){ return a.title.localeCompare(b.title) });

        var counties = new Array();
        counties.push("<option>Select a County</option>");

        for (county in sortedCounties) {
            counties.push("<option value=" + sortedCounties[county].id + ">" + sortedCounties[county].title + "</option>");
        }

        countySelector.html(counties.join(" "));
    });

    countySelector.change(function() {
        if (this.value) {
            mboSubmit.removeClass("disabled");
            mboSubmit.removeAttr("disabled");
            $(this).attr("value", this.value);
        }
    });
});