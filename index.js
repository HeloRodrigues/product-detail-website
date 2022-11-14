"use strict";

// event on element

const addEventOnElement = (element, type, callback) => {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
};

// NAVBAR TOGGLE

const navbar = document.querySelector("[data-navbar]");

const navToggler = document.querySelectorAll("[data-nav-toggler]");

const overlay = document.querySelector("[data-overlay]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElement(navToggler, "click", toggleNav);
