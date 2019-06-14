// from data.js
var filterData = data;

// query select html variables
var search = document.querySelector("#filter-data");
var reset = document.querySelector("#reset-data");
var tbody = document.querySelector("tbody");
// input variables for filtering
var dateInput = document.querySelector("#datetime");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");

// event listener for search button
search.addEventListener("click", tableSearch);
reset.addEventListener("click", tableReset);

// table output function
function tableOutput() {
    tbody.innerHTML = "";
    for (var i = 0; i < filterData.length; i++) {
        var address = filterData[i];
        var fields = Object.keys(address);
        var row = tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
          var field = fields[j];
          var cell = row.insertCell(j);
          cell.innerText = address[field]
        }
    }
}

// filter variable functions
function tableSearch() {
    var filterDate = dateInput.value;
    var filterCity = cityInput.value.trim().toLowerCase();
    var filterState = stateInput.value.trim().toLowerCase();
    var filterCountry = countryInput.value.trim().toLowerCase();
    var filterShape = shapeInput.value.trim().toLowerCase();
    // datetime filter
    if (filterDate != "") {
        filterData = data.filter(function(location) {
            var locationDate = location.datetime;
            return locationDate === filterDate
        });
    }
    else{filterData};
    // city filter
    if (filterCity != "") {
        filterData = filterData.filter(function(location) {
            var locationCity = location.city;
            return locationCity === filterCity
        });
    }
    else {filterData};
    // state filter
    if (filterState != "") {
        filterData = filterData.filter(function(location) {
            var locationState = location.state;
            return locationState === filterState
        });
    }
    else {filterData};
    // country filter
    if (filterCountry != "") {
        filterData = filterData.filter(function(location) {
            var locationCountry = location.country;
            return locationCountry === filterCountry
        });
    }
    else {filterData};
    // shape variable
    if (filterShape != "") {
        filterData = filterData.filter(function(location) {
            var locationShape = location.shape;
            return locationShape === filterShape
        });
    }
    else {filterData};
    tableOutput()
};
// table output on load
tableOutput();

// reset filter search variables
function tableReset() {
    filterData = data;
    dateInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    countryInput.value = "";
    shapeInput.value = "";
    tableOutput()
}