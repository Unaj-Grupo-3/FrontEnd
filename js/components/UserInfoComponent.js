export const UserInfoComponent = (name, mail, description, minAge, maxAge, distance) =>

`
<div class="info__div" id="title__name">
    <h2>¡Hola ${name}!</h2>
</div>

<div class="info__div">
    <h3>Seguridad de la cuenta</h3>
    <p>${mail}</p>
    <button class="btn_general_style" id="btn_psswd">Cambiar Contraseña</button>
</div>

<div class="info__div">
    <h3>Sobre mi...</h3>
    <textarea id="user__input" maxlength="255" rows="4" cols="25">${description}</textarea>
</div>

<div class="info__div">
    <h3>Mi género</h3>
    <input type="radio" id="female" name="gender" value="2">
    <label for="female">Femenino</label>
    <input type="radio" id="male" name="gender" value="1">
    <label for="male">Masculino</label>
    <input type="radio" id="other" name="gender" value="3">
    <label for="other">Otro</label>
</div>

<div class="info__div">
    <h3>Más sobre mi</h3>
    <button class="btn_general_style">Ver/modificar</button>
</div>

<div class="info__div">
    <h3>Que busco</h3>
    <p>Edad mínima</p>
    <input type="range" id="in_min_age" min="18" max="${maxAge}" value="${minAge}" step="1">
    <label for="in_min_age" id="lbl_min_age">${minAge} años</label>
    <p>Edad máxima</p>
    <input type="range" id="in_max_age" min="${minAge}" max="120" value="${maxAge}" step="1">
    <label for="in_max_age" id="lbl_max_age">${maxAge} años</label>
    <p>Distancia</p>
    <input type="range" id="in_distance" min="0" value="${distance}" step="1">
    <label for="in_distance" id="distance">${distance} km</label>
    <p>Género de la persona que busco</p>
    <input type="checkbox" id="female" value="2">
    <label for="female">Femenino</label>
    <input type="checkbox" id="male" value="1">
    <label for="male">Masculino</label>
    <input type="checkbox" id="other" value="3">
    <label for="other">Otro</label>
    <p>Otras caracteristicas</p>
    <button class="btn_general_style">Ver/modificar</button>
</div>

`