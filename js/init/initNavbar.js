import { Navbar } from "../components/navbar.js";
import { profile } from "../services/fetchNavServices.js";

const showNavbar = (toggleId, navId, headerId, imgId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        header = document.getElementById(headerId),
        img = document.getElementById(imgId)

    if (toggle && nav && header && img) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
            header.classList.toggle("column");
            img.classList.toggle("header_img-large");
        });
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    const navbarContainer = document.getElementById("navbar");
    let userPhoto = "../img/user-default.png";
    navbarContainer.innerHTML = Navbar(userPhoto);

    showNavbar("menu_toggle", "nav-bar", "header_user", "header_img");

    // Get the current URL path
    const currentPath = window.location.pathname.slice(1);
    // Find the active navigation link by comparing its href attribute with the current path
    const activeLink = document.querySelector(`a[href$="${currentPath}"]`);

    // If found, add the "active" class to it
    if (activeLink) {
        activeLink.classList.toggle("active");
    }
  
    profile()
});
