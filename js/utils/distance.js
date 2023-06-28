
const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
}

export const distance = (lat1, lon1, lat2, lon2) => {
    const r = 6371; 
  
    // Convertir las coordenadas a radianes
    const lat1Rad = degToRad(lat1);
    const lon1Rad = degToRad(lon1);
    const lat2Rad = degToRad(lat2);
    const lon2Rad = degToRad(lon2);
  
    const latDiff = lat2Rad - lat1Rad;
    const lonDiff = lon2Rad - lon1Rad;
  
    // Fórmula del haversine
    const a = Math.sin(latDiff / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));
    
    return r * c;
  }
  
  
  