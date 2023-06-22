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

        if (toggle && nav && header && img ) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
            header.classList.toggle("column");
            img.classList.toggle("header_img-large");
        });
        }
    };

    showNavbar("menu_toggle", "nav-bar", "header_user","header_img" );

    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
        if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
        }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    profile();
});

