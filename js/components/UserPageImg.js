export const UserPageImg = (cont, id, img) =>

`
<div class="drag__container user_photo_cont" id="drag_id_${cont}" draggable="true" ">
    <img src="${img}" class="drag__img" id="img_${id}" alt="Foto de usuario">
    <button class="btn_delete" value="${id}">
        <span class="material-symbols-outlined icono-delete">
            delete
        </span>
    </button>
</div>
`