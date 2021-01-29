// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  coordinates: [31.1541, -94.3815],
    state: {
      name: "Shot - Dead (suicide) - Officer Involved Incident - Officer Involved Shooting - subject/suspect/perpetrator killed - Officer Involved Shooting - subject/suspect/perpetrator suicide at standoff - Domestic Violence",
      date: '1/8/2018',
      population: 29000000,
      state: 'Texas' 
    },
},
{
  coordinates: [30.001, -95.4647],
    state: {
      name: "Shot - Wounded/Injured & Shot - Dead (suicide) - Officer Involved Incident - Officer Involved Shooting - Officer shot - Officer Involved Shooting - subject/suspect/perpetrator killed - Officer Involved Shooting - subject/suspect/perpetrator suicide at standoff - Officer Involved Shooting - Bystander shot - Police Targeted- Kidnapping/abductions/hostage||Possession of gun by felon or prohibited person",
      date: '1/31/2018',
      population: 29000000,
      state: 'Texas' 
    }
},
{
  coordinates: [41.7146, -74.3921],
    state: {
      name: "Shot - Wounded/Injured & Shot - Dead (murder & suicide) - Murder/Suicide - Domestic Violence - LOCKDOWN/ALERT ONLY: No GV Incident Occurred Onsite",
      date: '1/11/2018',
      population: 29000000,
      state: 'New York' 
    }
},
{
  coordinates: [29.5404, -98.639],
    state: {
      name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence||Kidnapping/abductions/hostage",
      date: '1/21/2018',
      population: 29000000,
      state: 'Texas' 
    }
},
{
  coordinates: [36.1808, -115.148],
    state: {
      name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence",
      date: '1/20/2018',
      population: 29000000,
      state: 'Nevada' 
    }
},
{
  coordinates: [36.1808, -115.148],
    state: {
      name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence",
      date: '1/20/2018',
      population: 29000000,
      state: 'Nevada' 
    }
},
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.coordinates)
    .bindPopup("<h1>" + city.state.date + "</h1> <hr> <h3>Incident " + city.state.name + "</h3>")
    .addTo(myMap);
}
