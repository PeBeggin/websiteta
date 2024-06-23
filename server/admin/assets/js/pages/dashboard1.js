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
    

    // Knob with swing animation
    $('.knob-animate').each(function() {
        var $this = $(this);
        var val = $this.val();

        $this.knob();
        $({
            value: 0
        }).animate({
            value: val
        }, {
            duration: 2000,
            easing: "swing",
            step: function() {
                $this.val(Math.ceil(this.value)).trigger("change");
            }
        });
    });

    // Donut chart
    Morris.Donut({
        element: 'donut',
        data: [
            {value: 256, label: 'Morning', formatted: '256 times'},
            {value: 512, label: 'Noon', formatted: '512 times'},
            {value: 1024, label: 'Evening', formatted: '1024 times'},
            {value: 2048, label: 'Night', formatted: '2048 times'}
        ],
            colors: [
            '#ffbd15',
            '#f55145',
            '#13a2a6',
            '#14B9D6'
        ],
        formatter: function (x, data) { return data.formatted; },
        resize: true
    });

    // Realtime moris chart
    var ret = [];
    inititializeData();
    function inititializeData() {
        for (var x = 15; x > 0; x--) {
            currentDate = new Date();
            currentDate.setSeconds(currentDate.getSeconds()-x);
            var usefulTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            ret.push({
                x: usefulTime,
                y: Math.floor(Math.random()*50+25)
            });
        }
        return ret;
    }
    function data() { 
        var currentDate = new Date();
        var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        ret.push({
            x: currentTime,
            y: Math.floor(Math.random()*50+25)
        });
        ret.shift();
        return ret;
    }
    var graph = Morris.Line({
        element: 'realtime',
        data: data(0),
        xkey: 'x',
        ykeys: ['y'],
        labels: ['Click Counts'],
        parseTime: false,
        ymin: 0,
        ymax: 100,
        hideHover: true,
        lineColors: ['#14B9D6']
    });
    function update() {
        graph.setData(data());
    }
    setInterval(update, 1000);


    // Todo list
    var sorts = $("#sortable-todo").sortable();

    function handleTodoCheckboxes(){
        $("#sortable-todo input").on("click", function() {
            var checked = $(this).is(":checked");
            if(checked){
                $(this).closest("li").addClass("checked");
            }else{
                $(this).closest("li").removeClass("checked");
            }
        });
    }
    handleTodoCheckboxes();

    $(".btn-todo-all").on("click", function() {
        if($(this).hasClass("checked")){
            $("#sortable-todo input").prop("checked", false);
            $("#sortable-todo li").removeClass("checked");
            $(this).removeClass("checked");

        }else{
            $("#sortable-todo input").prop("checked", true);
            $("#sortable-todo li").addClass("checked");
            $(this).addClass("checked");
        }
    });

    $(document).on("click", "#sortable-todo .btn-remove", function(e){
        e.preventDefault();
        $(this).closest("li").hide();
    });

    $(document).on("click", ".btn-add-task", function(){
        var task = $("#txt-task").val();
        if(task){        
            $("#txt-task").val("");

            var dt = new Date();
            var currentDay = dt.getDate();
            var monthNames = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
            currentMonth = monthNames[dt.getMonth()];
            newId = dt.getTime();

            item = '<li>' +
                        '<label> <div class="custom-control custom-checkbox"> <input type="checkbox" id="custom-checkbox' + newId + '" class="custom-control-input normal"> <label for="custom-checkbox' + newId + '" class="custom-control-label">' + task + '</label></div></label>' +
                        '<span class="date">' + currentMonth + " " + currentDay + '</span>' +
                        '<a href="#" class="btn-remove"></a>' +
                    '</li>';
            $("#sortable-todo").append(item);

            // Reinit sortable
            sorts.sortable();
            handleTodoCheckboxes();
        }
    });




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