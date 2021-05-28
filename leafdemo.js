
import L, { circleMarker, drawLocal, DrawMap, drawVersion, polygon } from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import $ from 'jquery';



var markers = [
  {
    "name": "Chandigarh",
    "lat": 30.734636236553076,
    "lng": 76.75325121693032

  },
  {
    "name": "Mr.Raj",
    "lat": 25.734636236553076,
    "lng": 75.75325121693032
  },
  {
    "name": "Mr.Ram",
    "lat": 30.734636236553076,
    "lng": 77.75325121693032
  },
  {
    "name": "Mr.Tarun",
    "lat": 30.934636236553076,
    "lng": 76.75325121693032
  },
  {
    "name": "Mr.Kumar",
    "lat": 30.734636236553076,
    "lng": 76.75325121693032
  },
  {
   "name": "Mr.Steave",
   "lat": 30.734636236553076,
   "lng": 75.75325121693032
  },
  {
   "name": "Mr.John",
   "lat": 28.734636236553076,
   "lng": 73.75325121693032
  }
 
];

var markers_center = [
   {
     "name": "Saluja Moters",
     "lat": 30.734636236553076,
     "lng": 75.75325121693032

   },
   {
     "name": "Harmony Honda",
     "lat": 27.734636236553076,
     "lng": 78.75325121693032
   }
];
var markers_absent_ambassador = [
   {
     "name": "Mr.Kumar",
     "lat": 25.734636236553076,
     "lng": 74.75325121693032

   },
   {
     "name": "Mr.Vinay",
     "lat": 25.734636236553076,
     "lng": 72.75325121693032
   },
   {
       "name": "Mr.Bob",
       "lat": 25.744636236553076,
       "lng": 75.79325121693032
      },
      {
       "name": "Mr.John",
       "lat": 28.794636236553076,
       "lng": 73.79325121693032
      }
];




var map = L.map( 'map', {
  center: [30.734636236553076, 76.75325121693032],
  minZoom: 2,
  zoom: 4
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
  maxZoom: 18
}).addTo( map )



/*var map = L.map('map').setView([12.9716, 77.5946], 13);
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map); 
   */


var myURL = $( 'script[src$="leafdemo.js"]' ).attr( 'src' ).replace( 'leafdemo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/active_amb.png',
  iconRetinaUrl: myURL + 'images/active_amb.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

var removeIcon = L.icon({
  iconUrl: myURL + 'images/service_center.png',
  iconRetinaUrl: myURL + 'images/service_center.png',
  iconSize: [0, 0],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
})

var myIcon_center = L.icon({
  iconUrl: myURL + 'images/service_center.png',
  iconRetinaUrl: myURL + 'images/service_center.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})
var myIcon_absent_ambassador = L.icon({
  iconUrl: myURL + 'images/absent_amb.png',
  iconRetinaUrl: myURL + 'images/absent_amb.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})
var dam_flag = false;
var mark = new Array();
//Present Ambassador Details
function display_active_ambassador(){
  if(dam_flag==false){
    for ( var i=0; i < markers.length; ++i ){
      var mp = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
        .bindPopup( markers[i].name  )
        .openPopup()
        .addTo( map );
        mark.push(mp);
    }
    dam_flag=true;
  }else{
    for(i=0;i<mark.length;i++) {
      map.removeLayer(mark[i]);
      }  
      dam_flag = false;
  }
}
//End Present Ambassador Details
//Service Center Details
var dam_flag_center = false;
var mark_center = new Array();
function display_center(){
  if(dam_flag_center==false){
    for ( var i=0; i < markers_center.length; ++i ){
      var mp = L.marker( [markers_center[i].lat, markers_center[i].lng], {icon:myIcon_center} )
        .bindPopup( markers_center[i].name)
        .openPopup()
        .addTo( map );
        mark_center.push(mp);
    }
    dam_flag_center=true;
  }else{
    for(i=0;i<mark_center.length;i++) {
      map.removeLayer(mark_center[i]);
      }  
      dam_flag_center= false;
  }
}
//Aend Service Center Details
//Absent Ambassador Details
var dam_flag_absent = false;
var mark_absent = new Array();
function display_absent_ambassador(){
  if(dam_flag_absent==false){
    for ( var i=0; i < markers_absent_ambassador.length; ++i ){
      var mp = L.marker( [markers_absent_ambassador[i].lat, markers_absent_ambassador[i].lng], {icon:myIcon_absent_ambassador} )
        .bindPopup( markers_absent_ambassador[i].name)
        .openPopup()
        .addTo( map );
        mark_absent.push(mp);
    }
    dam_flag_absent=true;
  }else{
    for(i=0;i<mark_absent.length;i++) {
      map.removeLayer(mark_absent[i]);
      }  
      dam_flag_absent= false;
  }
}
//End Absent Ambassador Details

function mapprint()
{
  window.print()
}





