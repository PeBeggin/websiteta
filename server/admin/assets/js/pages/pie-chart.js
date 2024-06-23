var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return "rgba(" + randomColorFactor() + "," + randomColorFactor() + "," + randomColorFactor() + "," + (opacity || ".3") + ")";
};

var config1 = {
    type: "pie",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [{
                backgroundColor: [
                    "#14B9D6",
                    "#ec4e45",
                    "#13a2a6",
                    "#53a96b",
                    "#ffbd15",
                    "#9e49b0"
                ],
                borderWidth: 3,
                data: [35, 30, 25, 40, 25, 50]
            }]
    },
    options: {
        responsive: true
    }
};

var config2 = {
    type: "pie",
    data: {
        labels: ["July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
                backgroundColor: [
                    "#14B9D6",
                    "#ec4e45",
                    "#13a2a6",
                    "#53a96b",
                    "#ffbd15",
                    "#9e49b0"
                ],
                borderWidth: 3,
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]
    },
    options: {
        responsive: true
    }
};
$("#random-data").click(function() {
    $.each(config2.data.datasets, function(i, piece) {
        $.each(piece.data, function(j) {
            config2.data.datasets[i].data[j] = randomScalingFactor();
            config2.data.datasets[i].backgroundColor[j] = randomColor(0.9);
        });
    });
    window.pie2.update();
});




var data = {
    labels: [
        "Online",
        "Phone",
        "Store"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#fABD18"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#fABD18"
            ]
        }]
};

Chart.pluginService.register({
    beforeDraw: function(chart) {
        var ctx3 = chart.chart.ctx;

        ctx3.restore();
        ctx3.save();
    }
});

var chart = new Chart(document.getElementById("pie3"), {
    type: "doughnut",
    data: data,
    options: {
        responsive: true,
        legend: {
            display: false
        }
    }
});



var config4 = {
    type: "pie",
    data: {
        labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4"],
        datasets: [{
            backgroundColor: [
                "#14B9D6", 
                "#ec4e45", 
                "#53a96b", 
                "#ffbd15"
            ],
            data: [10, 35, 35, 20],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true
    }
};


window.onload = function() {
    var ctx1 = document.getElementById("pie1").getContext("2d");
    window.pie1 = new Chart(ctx1, config1);

    var ctx2 = document.getElementById("pie2").getContext("2d");
    window.pie2 = new Chart(ctx2, config2);

    var ctx4 = document.getElementById("pie4").getContext("2d");
    window.pie4 = new Chart(ctx4, config4);
};