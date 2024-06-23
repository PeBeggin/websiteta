// Countdown
jQuery(function ($) {
    "use strict";
    var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
    var $counters = $(".counter-down");

    /* Start counting, do this on DOM ready or with Waypoints. */
    $counters.each(function (ignore, counter) {
        counterUp(counter, {
            duration: 2000,
            delay: 50
        });
    });

});


// Sells chart
var randomScalingFactor = function() {
    return Math.round(Math.floor(Math.random() * 300) + 2000);
};
var config3 = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
            backgroundColor: "rgba(20, 185, 214, 0.1)",
            borderColor: "rgb(20, 185, 214)",
            borderWidth: 2,
            label: "Income Chart", 
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        title:{
            display:true
        },
        hover: {
            mode: "nearest",
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Month"
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Income"
                },
                ticks: {
                    suggestedMin: 500
                },
            }]
        }
    }
};


// Pie Chart 1
var config1 = {
    type: "pie",
    data: {
        labels: ["Evening", "Morning"],
        datasets: [{
            backgroundColor: [
                "#ffbd15", 
                "#14B9D6"
            ],
            borderWidth: 3,
            label: "Time Chart",
            data: [45, 55]
        }]
    },
    options: {
        responsive: true
    }
};

// Pie Chart 2
var config2 = {
    type: "pie",
    data: {
        labels: ["Firefox", "Chrome", "Safari", "Other"],
        datasets: [{
            backgroundColor: [
                "#ffbd15", 
                "#f55145", 
                "#4bb9d6", 
                "#9c27b0"
            ],
            borderWidth: 3,
            label: "Browser Chart",
            data: [40, 30, 20, 10]
        }]
    },
    options: {
        responsive: true
    }
};



window.onload = function() {
    var ctx1 = document.getElementById("pie").getContext("2d");
    window.pie1 = new Chart(ctx1, config1);
    
    var ctx2 = document.getElementById("pie2").getContext("2d");
    window.pie2 = new Chart(ctx2, config2);
    
    var ctx = document.getElementById("line").getContext("2d");
    window.line1 = new Chart(ctx, config3);
};



// Map
var map;
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.imagesSettings = {
        rollOverColor: "#ffbd15",
        rollOverScale: 3,
        selectedScale: 5,
        selectedColor: "#575757"
    };
    map.areasSettings = {
        autoZoom: true,
        rollOverBrightness: 10,
        selectedBrightness: 100,
        unlistedAreasColor: "#14b9d6"
    };
    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        images: [
            {svgPath:targetSVG, zoomLevel:5, scale:0.5, title:"Hungary: 6,200,000 $", latitude:46.90, longitude:19.48},
            {svgPath:targetSVG, zoomLevel:5, scale:0.5, title:"Germany: 20,750,000 $", latitude:50.73, longitude:9.76},
            {svgPath:targetSVG, zoomLevel:5, scale:0.5, title:"China: 18,200,000 $", latitude:33.24, longitude: 104.37},
            {svgPath:targetSVG, zoomLevel:5, scale:0.5, title:"Egypt: 8,500,000 $", latitude:26.02, longitude:29.90},
            {svgPath:targetSVG, zoomLevel:5, scale:0.5, title:"Canada: 19,100,000 $", latitude:62.65, longitude:-114.33},
            {svgPath:targetSVG, zoomLevel:5, scale:0.5, title:"Uruguay: 6,100,000 $", latitude:-32.19, longitude:-56.09},
        ]
    };
    map.dataProvider = dataProvider;
    map.write("map");
});