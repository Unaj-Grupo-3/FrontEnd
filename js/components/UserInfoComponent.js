export const UserInfoComponent = (name, mail, description) =>

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
    <input type="radio" id="female" name="gender">
    <label for="female">Femenino</label>
    <input type="radio" id="male" name="gender">
    <label for="male">Masculino</label>
    <input type="radio" id="others" name="gender">
    <label for="others">Otros</label>
</div>

<div class="info__div">
    <h3>Más sobre mi</h3>
    <button class="btn_general_style">Ver/modificar</button>
</div>

<div class="info__div">
    <h3>Que busco</h3>
    <p>Edad mínima</p>
    <input type="range" id="min__age" min="18" max="100">
    <label for="min__age">18</label>
    <p>Edad máxima</p>
    <input type="range" id="max__age" min="18" max="120">
    <label for="max__age">120</label>
    <p>Distancia</p>
    <input type="range" id="distance" min="0">
    <label for="distance">100 km</label>
    <p>Otros</p>
    <button class="btn_general_style">Ver/modificar</button>
</div>

`