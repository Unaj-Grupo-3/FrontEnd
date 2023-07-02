export const SuggestionData = (name, age, gender, location, preferences, description) =>
`   
    <div class="logo-data flex-center">
        <img src="../img/globo-blanco.png" alt="Foto Match" id="match-photo" class="img-logo-data"/>
    </div>
    <div class="info-data flex-center">
        <p>Nombre: <strong id="name-match">${name}</strong></p>
        <p>Edad: <strong id="date-match">${age}</strong></p>
        <p>Género: <strong id="gender-match">${gender}</strong></p>
        <p>Ubicación: <strong id="location-match">${location}</strong></p>
        <p>Descripción: <strong id="description-match">${description}</strong></p>
        <p>Intereses: <strong id="preference-match">${preferences}</strong></p>
    </div>
`