"use strict";
var slideIn = document.querySelectorAll(".slide-in-js");

window.onload = function () {
    // Timeline
    var tl = gsap.timeline({ repeat: 0 });
    gsap.set(document.querySelector(".page__heading"), { autoAlpha: 0, x: 50 });
    gsap.set(slideIn, { autoAlpha: 0 });
    gsap.to(document.querySelector(".page__heading"), { x: 0, autoAlpha: 1, duration: .5, ease: "power2.out" });
    gsap.to(slideIn, { autoAlpha: 1, duration: 1 });
}