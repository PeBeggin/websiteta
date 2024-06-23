var randomScalingFactor = function() {
    return Math.round(Math.random() * 300);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.7') + ')';
};

var config1 = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [{
            backgroundColor: "rgba(255, 189, 21, 0.9)",
            borderColor: "#ff9f00",
            borderWidth: 2,
            label: "Performance", 
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
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
                    labelString: "Value"
                },
                ticks: {
                    suggestedMin: -10,
                    suggestedMax: 250
                },
            }]
        }
    }
};

var config2 = {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [{
            backgroundColor: "rgba(151,187,205,0.3)",
            borderColor: "rgba(151,187,205,1)",
            borderWidth: 2,
            label: "London",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        }, {
            backgroundColor: "rgba(60,205,53,0.3)",
            borderColor: "rgba(60,205,53,1)",
            borderWidth: 2,
            label: "New York",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
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
                    labelString: "Value"
                },
                ticks: {
                    suggestedMin: -10,
                    suggestedMax: 250
                },
            }]
        }
    }
};

var config3 = {
    type: "line",
    data: {
        labels: ["2018", "2019", "2020"],
        datasets: [{
            backgroundColor: randomColor(),
            borderColor: randomColor(),
            borderWidth: 1,
            label: "Performance",
            data: [ randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
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
                    labelString: "Year"
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Value"
                },
                ticks: {
                    suggestedMin: -10,
                    suggestedMax: 250
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById("line1").getContext("2d");
    window.line1 = new Chart(ctx, config1);
    
    var ctx = document.getElementById("line2").getContext("2d");
    window.line2 = new Chart(ctx, config2);
    
    var ctx = document.getElementById("line3").getContext("2d");
    window.line3 = new Chart(ctx, config3);
};

$("#random-data").click(function() {
    $.each(config3.data.datasets, function(i, dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });

    window.line3.update();
});