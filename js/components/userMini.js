export const UserMiniComponent = (image, userName, birthday) =>

`
<div id="user__photo">
	<img src="${image}" alt="Foto del usuario">
</div>

<div id="user__Text">
    <h2>${userName}, ${birthday}</h2>
</div>
`