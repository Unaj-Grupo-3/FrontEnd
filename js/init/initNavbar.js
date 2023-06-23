import { Navbar } from "../components/navbar.js";
import { profile } from "../services/fetchNavServices.js";

const navbarContainer = document.getElementById("navbar");
let userPhoto = "../img/user-default.png";
navbarContainer.innerHTML = Navbar(userPhoto);

document.addEventListener("DOMContentLoaded", function (event) {
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

    showNavbar("menu_toggle", "nav-bar", "header_user", "header_img");
    const currentPage = window.location.pathname.split('/').pop(); // Get current page filename
    const navLinks = document.querySelectorAll('.nav_link'); // Get all nav links

    // Loop through nav links and set "active" class to current page link
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    profile();
});

