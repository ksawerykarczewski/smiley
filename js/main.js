// global stuff
"use strict"

// Get the modal
var modal = document.querySelector(".modal-js");

async function greetUser() {
    //let button = event.target;
    let id = event.target.parentNode.id;
    let message;

    if (id == "1") {
        message = 'Thats great';
        console.log(message);
    }
    if (id == "2") {
        message = 'Could be worse';
        console.log(message);
    }
    if (id == "3") {
        message = 'Ugh';
        console.log(message);
    }
    if (id == "4") {
        message = 'No words to describe it';
        console.log(message);
    }

    let responseToUser = `
        <div class="modal__content">
          <h1 class="modal__heading" id="modal__heading">${message}</h1>
          <h2 class="modal__heading--2" id="modal__heading--2">Click button to see more</h2>
          <button class="modal__button">Explore</button>
        </div>
        `

    setTimeout(function () {
        modal.style.display = "block";
        modal.innerHTML = responseToUser;
    }, 250);
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

