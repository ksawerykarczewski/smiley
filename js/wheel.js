"use strict";

let answear;
let modal = document.querySelector(".modal-js");
let wheel = document.querySelector('#wheel');
let wheelBoard = document.querySelector('#wheel__board');
let buttonWheel = document.querySelector('.button-wheel');

window.onload = function () {
    var tl = gsap.timeline({ repeat: 0 });
    tl.set(document.querySelector(".page__heading"), { autoAlpha: 0, x: 50 });
    tl.set(wheel, { autoAlpha: 0, transformOrigin: "50% 50%", scale: 0 });

    tl.to(document.querySelector(".page__heading"), { x: 0, autoAlpha: 1, duration: .5, ease: "back.out(1)" }, 0);
    tl.to(wheel, { scale: 1, autoAlpha: 1, duration: .5, ease: "back.out(1)" }, 0);
    tl.to(wheelBoard, { transformOrigin: "50% 50%", rotation: "-360", ease: "back.out(1)", duration: 1 }, 0);
}

function speenWheel() {
    buttonWheel.disabled = true;
    var myRotation = randomNumber(8, 24) * 45;
    let indicator = document.querySelector(".indicator");

    var tl1 = gsap.timeline({ onComplete: displayModal });
    tl1.to(wheelBoard, { transformOrigin: "50% 50%", delay: .2, rotation: "+=" + myRotation + "_cw", ease: "back.out(.8)", duration: 4 });

    var tl2 = gsap.timeline();
    tl2.to(indicator, { x: 15, ease: "power1.inOut", repeat: -1, duration: .5, yoyo: true }, 3);

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    if (myRotation == 1080 || myRotation == 720 || myRotation == 360) {
        console.log("Pandemics");
        answear = 'Pandemics';
    }
    if (myRotation == 540 || myRotation == 900) {
        console.log("Flood");
        answear = 'Flood';
    }
    if (myRotation == 495 || myRotation == 855) {
        console.log("Aliens")
        answear = 'Aliens';
    }
    if (myRotation == 450 || myRotation == 810) {
        console.log("Climate Change")
        answear = 'Climate Change';
    }
    if (myRotation == 675 || myRotation == 1035) {
        console.log("Ecological Collapse")
        answear = 'Ecological Collapse';
    }
    if (myRotation == 945 || myRotation == 585) {
        console.log("Asteroid Impact")
        answear = 'Asteroid Impact';
    }
    if (myRotation == 765 || myRotation == 405) {
        console.log("Nuclear War")
        answear = 'Nuclear War';
    }
    if (myRotation == 990 || myRotation == 630) {
        console.log("AI")
        answear = 'AI';
    }
    submitAnswear3(answear);
}

// The user has clicked on the submit button
async function submitAnswear3(answear) {
    var form = new FormData();
    form.append("answear3", answear);
    var connection = await fetch('../api/api-answear-3.php', {
        "method": "POST",
        "body": form
    })
    console.log(connection);
}

function displayModal() {

    let link = document.querySelector('body').dataset.nextPage;

    let responseToUser = `
    <div class="modal__content--2">
      <h1 class="modal__heading">${answear} it is!</h1>
      <h2 class="modal__description">And on that note, we would like to</h2>
        <button class="button modal__button--2" onclick="location.href='${link}.html'">Finish</button>
    </div>
    `;

    setTimeout(function () {
        modal.style.display = "block";
        modal.innerHTML = responseToUser;
    }, 1000);
}
