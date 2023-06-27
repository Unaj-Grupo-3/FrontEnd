export const Navbar = (userPhoto) =>
`
    <div class="l-navbar" id="nav-bar">
        <div id="menu_toggle" class="menu_toggle">            
            <i class="bi bi-list"></i>
            <span class="nav_name">logo</span>  
        </div>           
        <div id="header_user" class="header_user">
            <img src="${userPhoto}" alt="" id="header_img" class="header_img"/>
            <span id="header_name" class="header_name" >nombre apellido</span>
        </div>
        <nav class="nav">
            <div class="nav_list">
                <a href="../../views/UserPage.html" class="nav_link ">
                    <i class="bi bi-person-circle"></i>
                  <span class="nav_name">Perfil</span>
                </a>
                <a href="../../views/Matches.html" class="nav_link">
                    <i class="bi bi-arrow-through-heart"></i>
                  <span class="nav_name">Matches</span>
                </a>
                <a href="../../views/Dates.html" class="nav_link">
                    <i class="bi bi-cup-hot"></i>
                  <span class="nav_name">Citas</span>
                </a>
                <a href="../../views/Chat.html" class="nav_link">
                    <i id="nav-icono" class="bi bi-chat-right-text"></i>
                  <span class="nav_name">Chats</span>
                </a>
                <a href="../../views/Login.html" class="nav_link">
                    <i class="bi bi-box-arrow-left"></i>
                    <span class="nav_name">Salir</span>
                </a>
            </div>
        </nav>
    </div>
`