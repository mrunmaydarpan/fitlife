'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * Auto-scroll for gym interior carousel (Infinite)
 */

const gymCarousel = document.getElementById("gym-interior-carousel");

if (gymCarousel) {
  let isAutoScrolling = true;

  // Duplicate items for infinite scroll effect
  const items = Array.from(gymCarousel.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    gymCarousel.appendChild(clone);
  });

  // Pause scrolling on hover
  gymCarousel.addEventListener("mouseenter", () => isAutoScrolling = false);
  gymCarousel.addEventListener("mouseleave", () => isAutoScrolling = true);
  
  // Pause on touch (for mobile)
  gymCarousel.addEventListener("touchstart", () => isAutoScrolling = false);
  gymCarousel.addEventListener("touchend", () => {
    setTimeout(() => isAutoScrolling = true, 2000);
  });

  setInterval(() => {
    if (!isAutoScrolling) return;

    // Calculate halfway point (the start of our cloned items)
    // We add gap * number of items to make it accurate
    const halfScrollWidth = gymCarousel.scrollWidth / 2;

    // If we've scrolled into the cloned set, jump back to the original set silently
    if (gymCarousel.scrollLeft >= halfScrollWidth - gymCarousel.clientWidth) {
      gymCarousel.style.scrollSnapType = 'none'; // Temporarily disable snapping to prevent glitches
      gymCarousel.scrollBy({
        left: -halfScrollWidth,
        behavior: "instant"
      });
      // Force reflow
      gymCarousel.offsetHeight;
      gymCarousel.style.scrollSnapType = 'inline mandatory';
    }

    // Scroll to next item
    const scrollAmount = gymCarousel.clientWidth * 0.8 + 30; 
    gymCarousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  }, 3000);
}