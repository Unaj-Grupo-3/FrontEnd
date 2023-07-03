export const drawMap = async (element) => {
    let latitud = element.location.split(',')[0];
    let longitud = element.location.split(', ')[1];

    var mapCenter = new google.maps.LatLng(latitud, longitud);

    return mapCenter;
  }