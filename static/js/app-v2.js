// from data.js
var tableData = data;

// query select html variables
var search = d3.select("#filter-data");
var reset = d3.select("#reset-data");
var tbody = d3.select("tbody");

// function to populate table
function tableOutput() {
    tableData.forEach((tableData) => {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// reset table using d3.js
reset.on("click", function() {
    d3.event.preventDefault();
    tbody.node().innerHTML = "";
    tableData = data;
    tableOutput();
});

// search filter using d3 and if/else statement
search.on("click", function() {
    d3.event.preventDefault();
    tbody.node().innerHTML = "";
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value").trim().toLowerCase();
    var stateInput = d3.select("#state").property("value").trim().toLowerCase();
    var countryInput = d3.select("#country").property("value").trim().toLowerCase();
    var shapeInput = d3.select("#shape").property("value").trim().toLowerCase();
    console.log(dateInput);
    console.log(cityInput);
    console.log(stateInput);
    console.log(countryInput);
    console.log(shapeInput);

    if (dateInput != "") {
        tableData = data.filter(function(location) {
            return location.datetime === dateInput;
        });
    }
    else{tableData};
    if (cityInput != "") {
        tableData = tableData.filter(function(location) {
            return location.city === cityInput;
        });
    }
    else{tableData};
    if (stateInput != "") {
        tableData = tableData.filter(function(location) {
            return location.state === stateInput;
        });
    }
    else{tableData};
    if (countryInput != "") {
        tableData = tableData.filter(function(location) {
            return location.country === countryInput;
        });
    }
    else{tableData};
    if (shapeInput != "") {
        tableData = tableData.filter(function(location) {
            return location.shape === shapeInput;
        });
    }
    else{tableData};
    tableOutput();
});

// output entire table upon load
tableOutput();