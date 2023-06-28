export const RenderModalMatch = (name, photo) => {
    return `
    <div class="row match-detalle">
        <div class="col-xs-9 col-sm-9">
            <img src="${photo}" class="match-imagen" alt="..." data-bs-toggle="modal" data-bs-target="#modalMatch" onerror="this.src='../img/user-default.png'">
        </div>     
        <div class="col-xs-3 col-sm-3 match-data flex-center">
            <img src="../img/globo-blanco.png" alt="Foto Match" id="match-photo" class="img-logo-data"/>
            <img class="like-animation show-animation" id="img-animation-match" src="../img/fotocorazones.png" alt="Like">
            <div class="match-nombre-container flex-center">
                <h1 class="match-nombre">${name}</h1>
            </div>
            <a href="../../views/Chat.html" class="match-hablar">
                <i id="nav-icono" class="bi bi-chat-right-text"></i>
                <span class="nav_name">Hablar ahora</span>
            </a>
        </div>         
    </div>    
    `;
}