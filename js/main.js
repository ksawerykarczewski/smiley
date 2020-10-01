// global stuff
"use strict"

// Get the modal
var modal = document.querySelector(".modal-js");

async function greetUser() {
    //let button = event.target;
    let id = event.target.parentNode.id;
    //let message;
    //console.log(event.target.value);
    let message = event.target.value;

    if (message == "mood1") {
        message = 'Thats great';
        console.log(message);
    }
    if (message == "mood2") {
        message = 'Could be worse';
        console.log(message);
    }
    if (message == "mood3") {
        message = 'Ugh';
        console.log(message);
    }
    if (message == "mood4") {
        message = 'No words to describe it';
        console.log(message);
    }

    // let responseToUser = `
    //     <div class="modal__content">
    //       <h1 class="modal__heading" id="modal__heading">${message}</h1>
    //       <h2 class="modal__heading--2" id="modal__heading--2">Click button to see more</h2>
    //       <button class="modal__button">Explore</button>
    //     </div>
    //     `;

    let responseToUser = `
        <div class="modal__content--2">
          <h2 class="modal__description">Your answear</h2>
          <h1>${message}</h1>
          <button class="button modal__button--2" onclick="closeModal();">Change</button>
          <button class="button modal__button--2">Next</button>
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
