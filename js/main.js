// global stuff
"use strict"

// Get the modal
var modal = document.querySelector(".modal-js");
var answears = document.querySelectorAll(".answear");
var moods = document.querySelectorAll(".mood");

// var answears = document.querySelectorAll(".answear-js");


let link = document.querySelector('body').dataset.nextPage;

async function greetUser() {

    let message = event.target.value;

    if (message == "mood1") {
        message = 'Thats great!';
    }
    if (message == "mood2") {
        message = 'Everything is passable?';
    }
    if (message == "mood3") {
        message = 'We are sorry to hear that';
    }
    if (message == "mood4") {
        message = 'No words to describe it?';
    }

    let responseToUser = `
        <div class="modal__content--2">
          <h1 class="modal__heading">${message}</h1>
          <h2 class="modal__description">Please continue to see more</h2>
            <button class="button modal__button--2" onclick="closeModal();">Change</button>
            <button class="button modal__button--2" onclick="location.href='${link}.html'">Next</button>
        </div>
        `;

    setTimeout(function () {
        modal.style.display = "block";
        modal.innerHTML = responseToUser;
    }, 250);
}

function closeModal() {
    modal.style.display = "none";
}

window.onload = function () {
    // Timeline
    var tl = gsap.timeline({ repeat: 0 });
    tl.set(document.querySelector(".page__heading"), { autoAlpha: 0, x: 50 }, 0);
    tl.to(document.querySelector(".page__heading"), { x: 0, autoAlpha: 1, duration: .5, ease: "back.out(1)" }, 0);

    // if (link == 'outlets') {
    //     // tl.set(answears, { transformOrigin: "50% 50%", scale: 0 });
    //     // tl.to(answears, { scale: 1, duration: 1.5, ease: "back.out(1)" });

    //     tl.to(moods, {
    //         rotation: "-360", transformOrigin: "50% 50%", ease: Linear.easeNone, duration: .5
    //     }, 0);
    // }
    // if (link == 'wheel') {
    //     tl.set(answears, { scale: 0 });
    //     tl.to(answears, { scale: 1, duration: .5 });
    // }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/* SAFARI fallback */
window.ontouchstart = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
