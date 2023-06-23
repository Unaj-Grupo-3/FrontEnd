export const SuggestionData = (name, age, gender, location, preferences) =>
`
    <p>Nombre: <strong id="name-match">${name}</strong></p>
    <p>Edad: <strong id="date-match">${age}</strong></p>
    <p>Género: <strong id="gender-match">${gender}</strong></p>
    <p>Ubicación: <strong id="location-match">${location}</strong></p>
    <p>Intereses: <strong id="preference-match">${preferences}</strong></p>
`