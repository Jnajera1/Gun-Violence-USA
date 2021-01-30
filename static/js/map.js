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
        date: '1/31/2018',
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
        date: '1/31/2018',
        population: 29000000,
        state: 'New York' 
      }
  },
  {
    coordinates: [29.5404, -98.639],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence||Kidnapping/abductions/hostage",
        date: '1/31/2018',
        population: 29000000,
        state: 'Texas' 
      }
  },
  {
    coordinates: [36.1808, -115.148],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence",
        date: '1/31/2018',
        population: 29000000,
        state: 'Nevada' 
      }
  },
  {
    coordinates: [36.1808, -115.148],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence",
        date: '1/31/2018',
        population: 29000000,
        state: 'Nevada' 
      }
  },
  {
    coordinates: [42.8794, -85.0712],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence",
        date: '1/31/2018',
        population: 29000000,
        state: 'Michigan' 
      }
  },
  {
    coordinates: [31.6369, -89.5493],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Suicide^||Institution/Group/Business||Officer Involved Incident||Officer Involved Incident - Weapon involved but no shots fired||Officer Involved Shooting - subject/suspect/perpetrator suicide at standoff||Workplace shooting (disgruntled employee)",
        date: '1/22/2018',
        population: 29000000,
        state: 'Mississippi' 
      }
  },
  {
    coordinates: [41.6916, -87.6412],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Shootout (where VENN diagram of shooters and victims overlap)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Illinois' 
      }
  },
  {
    coordinates: [47.3869, -122.197],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Washington' 
      }
  },
  {
    coordinates: [38.67, -90.2402],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Missouri' 
      }
  },
  {
    coordinates: [38.672, -87.6539],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Illinois' 
      }
  },
  {
    coordinates: [31.1188, -97.3268],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Texas' 
      }
  },
  {
    coordinates: [29.9454, -90.0459],
      state: {
        name: "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Louisiana' 
      }
  },
  {
    coordinates: [42.9259, -88.8395],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide||Domestic Violence",
        date: '1/31/2018',
        population: 29000000,
        state: 'Wisconsin' 
      }
  },
  {
    coordinates: [40.0395, -75.3961],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Suicide^||Murder/Suicide",
        date: '1/31/2018',
        population: 29000000,
        state: 'Pennsylvania' 
      }
  },
  {
    coordinates: [43.9811, -96.6276],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Officer Involved Incident||Officer Involved Shooting - subject/suspect/perpetrator killed",
        date: '1/31/2018',
        population: 29000000,
        state: 'Minnesota' 
      }
  },
  {
    coordinates: [39.8487, -105.078],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Officer Involved Incident||Officer Involved Shooting - subject/suspect/perpetrator killed",
        date: '1/31/2018',
        population: 29000000,
        state: 'Colorado' 
      }
  },
  {
    coordinates: [40.0431, -75.0448],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Institution/Group/Business||School Incident||School Shooting - elementary/secondary school",
        date: '1/31/2018',
        population: 29000000,
        state: 'Pennsylvania' 
      }
  },
  {
    coordinates: [34.871, -82.464],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Home Invasion||Home Invasion - subject/suspect/perpetrator killed||Defensive Use||Defensive Use - Victim stops crime||Defensive Use - Crime occurs, victim shoots subject/suspect/perpetrator||Defensive Use - Stand Your Ground/Castle Doctrine established||Possession of gun by felon or prohibited person||Brandishing/flourishing/open carry/lost/found",
        date: '1/31/2018',
        population: 29000000,
        state: 'South Carolina' 
      }
  },
  {
    coordinates: [36.1439, -115.276],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Drug involvement||Possession of gun by felon or prohibited person",
        date: '1/31/2018',
        population: 29000000,
        state: 'Nevada' 
      }
  },
  {
    coordinates: [44.9568, -93.0583],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Domestic Violence",
        date: '1/31/2018',
        population: 29000000,
        state: 'Minnesota' 
      }
  },
  {
    coordinates: [46.1228, -123.929],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Accidental Shooting||Accidental Shooting - Death||Accidental/Negligent Discharge",
        date: '1/31/2018',
        population: 29000000,
        state: 'Oregon' 
      }
  },
  {
    coordinates: [29.8372, -95.2622],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Texas' 
      }
  },
  {
    coordinates: [30.3518, -97.5238],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Texas' 
      }
  },
  {
    coordinates: [33.5204, -90.126],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Mississippi' 
      }
  },
  {
    coordinates: [30.3518, -97.5238],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Texas' 
      }
  },
  {
    coordinates: [45.5259, -122.679],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Oregon' 
      }
  },
  {
    coordinates: [41.8696, -87.7424],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Illinois' 
      }
  },
  {
    coordinates: [41.2695, -72.6697],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Connecticut' 
      }
  },
  {
    coordinates: [33.4743, -87.0391],
      state: {
        name: 'Shot - Dead || Non-Aggression Incident||Accidental Shooting||Accidental Shooting - Death||Accidental/Negligent Discharge||Self-Inflicted (not suicide or suicide attempt - NO PERP)||Playing with gun||Child Involved Incident||Child killed self"Shot - Dead (murder, accidental, suicide)',
        date: '1/31/2018',
        population: 29000000,
        state: 'Alabama' 
      }
  },
  {
    coordinates: [40.2951, -78.9095],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Pennsylvania' 
      }
  },
  {
    coordinates: [41.9734, -117.715],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Nevada' 
      }
  },
  {
    coordinates: [42.3208, -71.0725],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Massachusetts' 
      }
  },
  {
    coordinates: [41.9734, -117.715],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'Nevada' 
      }
  },
  {
    coordinates: [37.8345, -122.273],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)",
        date: '1/31/2018',
        population: 29000000,
        state: 'California' 
      }
  },
  {
    coordinates: [37.9582, -87.55],
      state: {
        name: "Shot - Dead (murder, accidental, suicide)||Drug involvement||ATF/LE Confiscation/Raid/Arrest",
        date: '1/31/2018',
        population: 29000000,
        state: 'Indiana' 
      }
  },
  ];
  
  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(city.coordinates)
      .bindPopup("<h1>" + city.state.date + "</h1> <hr> <h3>Characteristics: " + city.state.name + "</h3>")
      .addTo(myMap);
  }
  