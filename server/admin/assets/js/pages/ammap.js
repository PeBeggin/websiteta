
AmCharts.ready(function() {
    // Create global AmMap object
    var map = new AmCharts.AmMap();
    var dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        getAreasFromMap: true
    };
    map.dataProvider = dataProvider;
    map.areasSettings = {
        autoZoom: true,
        rollOverBrightness: 10,
        selectedBrightness: 20
    };
    map.smallMap = new AmCharts.SmallMap();
    map.write("global-map");
});