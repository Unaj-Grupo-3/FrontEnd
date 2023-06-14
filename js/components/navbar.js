export const Navbar = (userPhoto) =>
`
<header class="header" id="header">
  <div class="header_toggle">
    <i class="bi bi-list" id="header-toggle"></i>
  </div>
  <div class="header_img">
    <img src="${userPhoto}" alt="" />
  </div>
</header>
<div class="l-navbar" id="nav-bar">
  <nav class="nav">
    <div>
      <a href="http://127.0.0.1:5501/views/homepage.html" class="nav_logo">
        <img src="\\img\\globo-blanco.png" alt="Logo" class="logo-citas" />
        <span class="nav_logo-name">CitasApp</span>
      </a>
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
        <a href="#" class="nav_link">
            <i class="bi bi-chat-right-text"></i>
          <span class="nav_name">Chats</span>
        </a>
      </div>
    </div>
    <a href="#" class="nav_link">
        <i class="bi bi-box-arrow-left"></i>
      <span class="nav_name">Salir</span>
    </a>
  </nav>
</div>
`