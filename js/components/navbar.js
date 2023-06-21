export const Navbar = (userPhoto) =>
`
    <div class="l-navbar" id="nav-bar">
        <header  id="menu_toggle" class="header">            
            <i class="bi bi-list"></i>
            <span class="nav_name">logo</span>  
        </header>           
        <div id="header" class="header_user">
            <img src="${userPhoto}" alt="" class="header_img" id="header_img"/>
            <span class="header_name">nombre apellido</span>
        </div>
        <nav class="nav">
            <div class="nav_list">
                <a href="http://127.0.0.1:5501/views/UserPage.html" class="nav_link active">
                    <i class="bi bi-person-circle"></i>
                  <span class="nav_name">Perfil</span>
                </a>
                <a href="#" class="nav_link">
                    <i class="bi bi-arrow-through-heart"></i>
                  <span class="nav_name">Matches</span>
                </a>
                <a href="#" class="nav_link">
                    <i class="bi bi-cup-hot"></i>
                  <span class="nav_name">Citas</span>
                </a>
                <a href="../../views/Chat.html" class="nav_link">
                    <i id="nav-icono" class="bi bi-chat-right-text"></i>
                  <span class="nav_name">Chats</span>
                </a>
                <a href="#" class="nav_link">
                    <i class="bi bi-box-arrow-left"></i>
                    <span class="nav_name">Salir</span>
                </a>
            </div>
        </nav>
    </div>
`