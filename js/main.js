// global stuff
"use strict"

// Get the modal
var modal = document.querySelector(".modal-js");

async function greetUser() {

    let message = event.target.value;
    let link = document.querySelector('body').dataset.nextPage;

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
