import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import "./style.css"


var map = new L.map("map", {
    center: [18.802808, 98.950170],
    zoom: 13
})

var osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'xx'
});

var Esri_WorldImagery = new L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var maker1 = new L.marker([18.802808, 98.950170]);
var maker2 = new L.marker([18.7827263, 98.9140011]);
var maker3 = new L.marker([18.7970602, 98.9687761]);

Esri_WorldImagery.addTo(map);
maker1.addTo(map);
maker2.addTo(map);
maker3.addTo(map);

var BaseMap = {
    "Esri_WorldImagery": Esri_WorldImagery,
    "osm": osm,
    "OpenStreetMap_HOT": OpenStreetMap_HOT
}
var Overlay = {
    "Maker 1": maker1,
    "Maker 2": maker2,
    "Maker 3": maker3
}
L.control.layers(BaseMap, Overlay).addTo(map)