import { RenderSuggestionDate } from "../components/dates/SuggestionDateCard.js";

let map;
let service;
let infowindow;
let places;
let tipoLugar = "";
let localidad = "";

function initMap() {    
  const unaj = new google.maps.LatLng(-34.77455963753452, -58.26768668220235);
  tipoLugar = document.getElementById("inputText").value;
  localidad = document.getElementById("inputLocalidad").value;
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: unaj,
    zoom: 10,
  });

  const request = {
    query: tipoLugar + '%20in%' + localidad,
    fields: ["name", "geometry"],
    // location: unaj,
    // radius: 5000
  };

  service = new google.maps.places.PlacesService(map);
  
  service.textSearch(request, (results, status) => {
    places = results;
    console.log(places)
    if(status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS){
        let container = document.getElementById('result-dates-container');
        container.innerHTML = '<h1> No se encontraron resultados </h1>'
    }
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        let container = document.getElementById('result-dates-container');
        container.innerHTML = '<h3>Sugerencia citas</h3><br>';
        for (let i = 0; i < results.length; i++) {
            createMarker(results[i], i);
            renderDateResult(results[i], i);
        }
        onCardItemClick(document.querySelectorAll(".card-date"));
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
    let photo = '../../img/notfound.png'
    if (place.photos && place.photos.length > 0){
        photo = place.photos[0].getUrl({ maxWidth: 64, minWidth: 64, maxHeight: 50, minHeight: 50 });
    }
    let container = document.getElementById('result-dates-container');
    container.innerHTML += RenderSuggestionDate(place.name, place.formatted_address, photo, index);
}

function renderizarPlaces(){
    var scriptGoogleMaps = document.createElement('script');
    scriptGoogleMaps.setAttribute('src','https://maps.googleapis.com/maps/api/js?key=AIzaSyDpwWJzl2lrtKx7JyvzHRnaotvrYijX-HU&callback=initMap&libraries=places&v=weekly');
    document.head.appendChild(scriptGoogleMaps);
    window.initMap = initMap;    
}

let buttonNewDatePlaces = document.getElementById('btn-new-date');
buttonNewDatePlaces.addEventListener('click', () =>{
    renderizarPlaces();
})

function onCardItemClick(elements){
    elements.forEach((element) => {
        element.addEventListener('click', () =>{
            seleccionarSugerencia(element.id);
        })
    });
}

function seleccionarSugerencia(id){
    let placeId = id.split('_')[1];
    console.log(places[placeId]);
}

