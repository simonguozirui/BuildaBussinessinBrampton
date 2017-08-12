require([
  "esri/Map",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapView){
  var map = new Map({
    basemap: "streets"
  });
  var view = new MapView({
    container: "viewDiv",  // Reference to the scene div created in step 5
    map: map,  // Reference to the map object created before the scene
    zoom: 10,  // Sets zoom level based on level of detail (LOD)
    center: [-79.76, 43.68]  // Sets center point of view using longitude,latitude
  });
});
