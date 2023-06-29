let map;
let service;
let infowindow;

function initMap() {    
  const unaj = new google.maps.LatLng(-34.77455963753452, -58.26768668220235);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: unaj,
    zoom: 10,
  });

  const request = {
    query: "cine%20in%20quilmes",
    fields: ["name", "geometry"],
    location: unaj,
    radius: 5000
  };

  service = new google.maps.places.PlacesService(map);
  
  service.textSearch(request, (results, status) => {
    console.log(status)
    console.log(results)
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i], i);
        renderDateResult(results[i], i);
      }

      //map.setCenter(results[0].geometry.location);
    }
  });


//   service.findPlaceFromQuery(request, (results, status) => {
//     console.log(status)
//     console.log(results)
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }

//       map.setCenter(results[0].geometry.location);
//     }
//   });
}

function createMarker(place, id) {
  if (!place.geometry || !place.geometry.location) return;
    let index = (id + 1).toString();
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    label: {color: '#FFF', fontSize: '12px', fontWeight: '600',
    text: index}
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

function createMarkerFull(place){
    if (!place.geometry || !place.geometry.location) return;

    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: place.photos[0].getUrl({maxWidth: 35, maxHeight: 35})
    });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

function renderDateResult(place, index){
    let container = document.getElementById('result-dates-container');
    container.innerHTML += `<div class="card-date"><img src='${place.photos[0].getUrl({maxWidth: 64, maxHeight: 50, minHeight: 50})}'> <strong style="color: crimson;">${index+1}</strong> - ${place.name} (${place.formatted_address})<p></date>`;
}


window.initMap = initMap;