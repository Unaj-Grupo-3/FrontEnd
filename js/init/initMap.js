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
    zoom: 12,
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
    let container = document.getElementById('result-dates-container');
    if(status == google.maps.places.PlacesServiceStatus.ZERO_RESULTS){
         container = document.getElementById('result-dates-container');
        container.innerHTML = '<div class="flex-center"><h1 class="dateDetail__contentTitle"> No se encontraron resultados </h1></div>'
    }
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        let mapTitle = document.getElementById('map-title');
        container.innerHTML = '<h4 class="dateDetail__contentTitle">Seleccione un lugar</h4><br>';
        mapTitle.textContent = 'Ubicación';
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
    alert(`Usted ha seleccionado ${places[placeId].name} con Latitud: ${places[placeId].geometry.location.lat()} y Longitud: ${places[placeId].geometry.location.lng()} . Dirección: ${places[placeId].formatted_address} `)
    console.log(places[placeId]);
    console.log(places[placeId].geometry.location.lat());
    console.log(places[placeId].geometry.location.lng());
}

