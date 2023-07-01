export const UserInfoComponent = (name, mail, description, minAge, maxAge, distance) =>

`
<div class="info__div" id="title__name">
    <h2>¡Hola ${name}!</h2>
</div>

<div class="info__div" id="item_1">
    <h3>Que busco</h3>
    <div class="range-container">
        <p style="margin: 0;">Edad mínima <label for="in_min_age" id="lbl_min_age">${minAge} años</label></p>
        <input style="margin: 0;" type="range" class="input-range" id="in_min_age" min="18" max="${maxAge}" value="${minAge}" step="1">    
        <p style="margin: 0;">Edad máxima <label for="in_max_age" id="lbl_max_age">${maxAge} años</label></p>
        <input style="margin: 0;" type="range" class="input-range" id="in_max_age" min="${minAge}" max="120" value="${maxAge}" step="1">       
        <p style="margin: 0;">Distancia <label for="in_distance" id="distance">${distance} km</label></p>
        <input style="margin: 0;" type="range" class="input-range" id="in_distance" min="0" value="${distance}" step="1">      
    </div>

    <h3>Género que busco</h3>
    <div class="genero-input">        
        <input type="checkbox" id="crush_female" class="crush_gender" value="2">
        <label for="female">Femenino</label>
        <input type="checkbox" id="crush_male" class="crush_gender" value="1">
        <label for="male">Masculino</label>
        <input type="checkbox" id="crush_other" class="crush_gender" value="3">
        <label for="other">Otro</label>
    </div> 

    <h3>Otras características</h3>
    <div>  
        <button class="btn_general_style" id="btn_about_other">Ver/modificar</button>
    </div>
</div>

<div class="info__div" id="item_2">
    <h3>Sobre mi...</h3>
    <textarea id="user__input" maxlength="255" rows="4" cols="25">${description}</textarea>
</div>

<div class="info__div" id="item_3">
    <h3>Mi género</h3>
    <div class="genero-input-two"> 
        <input type="radio" id="female" name="gender" value="2">
        <label for="female">Femenino</label>
        <input type="radio" id="male" name="gender" value="1">
        <label for="male">Masculino</label>
        <input type="radio" id="other" name="gender" value="3">
        <label for="other">Otro</label>
    </div>
</div>

<div class="info__div" id="item_4">
    <h3>Seguridad de la cuenta</h3>
    <p>${mail}</p>
    <button class="btn_general_style" id="btn_psswd">Cambiar Contraseña</button>
</div>

<div class="info__div" id="item_5">
    <h3>Más sobre mi</h3>
    <button class="btn_general_style" id="btn_about_me">Ver/modificar</button>
</div>

`


export const PrefComponent = (id, description) =>

`
<h4 class="interest_cat">${description}</h4>
<div class="interests_container" id="cat_${id}">
        
</div>
`

export const PrefOtherComponent = (id, description) =>

`
<h4 class="interest_cat">${description}</h4>
<div class="interests_container" id="cat2_${id}">
        
</div>
`


export const InterestTag = (id, name) =>

`
<a class="interest_item" id="my_int_${id}">${name}</a>
`

export const InterestOtherTag = (id, name) =>

`
<a class="interest_other_item" id="other_int_${id}">${name}</a>
`
