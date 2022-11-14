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

// slider functionality

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

// set slider default position

let sliderPosition = 0;

// set number of total slider items

const totalSliderItems = 4;

//make next slide btn work

const slideToNext = () => {
  sliderPosition++;
  slider.style.transform = `translateX(-${sliderPosition}00%)`;

  disableSlideBtn();
};

addEventOnElement(nextBtn, "click", slideToNext);

// make prev btn work

const slideToPrev = () => {
  sliderPosition--;
  slider.style.transform = `translateX(-${sliderPosition}00%)`;

  disableSlideBtn();
};

addEventOnElement(prevBtn, "click", slideToPrev);

// Make next and prev btn disabled when slides finishes

const disableSlideBtn = () => {
  if (sliderPosition >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  if (sliderPosition <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
};

disableSlideBtn();

//product quantity functionality

const totalPriceElement = document.querySelector("[data-total-price]");
const quantityElement = document.querySelector("[data-quantity]");
const quantityMinusBtn = document.querySelector("[data-minus]");
const quantityPlusBtn = document.querySelector("[data-plus]");

// set product default quantity

let quantity = 1;

// set product defaul price

let productPrice = 399;

//set the initial price

let totalPrice = 399;

const increaseProductQuantity = () => {
  quantity++;
  totalPrice = quantity * productPrice;
  quantityElement.textContent = quantity;
  totalPriceElement.textContent = totalPrice;
};
addEventOnElement(quantityPlusBtn, "click", increaseProductQuantity);

const decreaseProductQuantity = () => {
  //   if (quantity > 1) {
  //     quantity--;
  //   }
  quantity > 1 ? quantity-- : quantity;
  totalPrice = quantity * productPrice;
  quantityElement.textContent = quantity--;
  totalPriceElement.textContent = totalPrice;
};

addEventOnElement(quantityMinusBtn, "click", decreaseProductQuantity);
