function init() 
{ 
    var map = new OpenLayers.Map("rcp1_map"); 
    var osm = new OpenLayers.Layer.OSM(); 
    map.addLayer(osm); 
    map.zoomToMaxExtent();   

} 
     