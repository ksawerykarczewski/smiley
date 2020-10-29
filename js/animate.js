"use strict";
var slideIn = document.querySelectorAll(".slide-in-js");

window.onload = function () {
    //marqueLoader();
    onloadAnimation();
    loadCursorFollower();
}


function onloadAnimation() {
    // Timeline
    var tl = gsap.timeline({ repeat: 0 });
    gsap.set(document.querySelector(".page__heading"), { autoAlpha: 0, x: 50 });
    gsap.set(slideIn, { autoAlpha: 0 });
    gsap.to(document.querySelector(".page__heading"), { x: 0, autoAlpha: 1, duration: .5, ease: "power2.out" });
    gsap.to(slideIn, { autoAlpha: 1, duration: 1 });
}

function loadCursorFollower() {
    var container = document.querySelector(".page-login");
    var circle = document.querySelector(".circle");

    container.addEventListener("pointerenter", function (e) {
        TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
        positionCircle(e);
    });

    container.addEventListener("pointerleave", function (e) {
        TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
        positionCircle(e);
    });

    container.addEventListener("pointermove", function (e) {
        positionCircle(e);
    });

    function positionCircle(e) {
        var rect = container.getBoundingClientRect();
        var relX = e.pageX - container.offsetLeft;
        var relY = e.pageY - container.offsetTop;

        TweenMax.to(circle, 0.3, { x: relX, y: relY });
    }
}