// global stuff
"use strict"

// Get the modal
var modal = document.querySelector(".modal-js");
var answears = document.querySelectorAll(".answear");
var moods = document.querySelectorAll(".mood");

// var answears = document.querySelectorAll(".answear-js");

let link = document.querySelector('body').dataset.nextPage;

async function greetUser() {
    let answear = event.target.value;

    if (answear == "Happy") {
        answear = 'Thats great!';
    }
    if (answear == "Apathetic") {
        answear = 'Everything is passable?';
    }
    if (answear == "Sad") {
        answear = 'We are sorry to hear that';
    }
    if (answear == "Numb") {
        answear = 'No words to describe it?';
    }

    let responseToUser = `
        <div class="modal__content--2">
          <h1 class="modal__heading">${answear}</h1>
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

// The user has clicked on the submit button
async function submitAnswear1() {
    let answear = event.target.value;
    // connect and get the tweet id
    var form = new FormData();
    form.append("answear1", answear);
    var connection = await fetch('../api/api-answear-1.php', {
        "method": "POST",
        "body": form
    })
    // var jResponse = await connection.json()
    // console.log(jResponse)
    console.log(connection);
}

// The user has clicked on the submit button
async function submitAnswear2() {
    let answear = event.target.value;
    console.log(answear);
    // connect and get the tweet id
    var form = new FormData();
    form.append("answear2", answear);
    var connection = await fetch('../api/api-answear-2.php', {
        "method": "POST",
        "body": form
    })
    //var jResponse = await connection.json()
    //console.log(jResponse)
    console.log(connection);
}


window.onload = function () {
    // Timeline
    var tl = gsap.timeline({ repeat: 0 });
    tl.set(document.querySelector(".page__heading"), { autoAlpha: 0, x: 50 }, 0);
    tl.to(document.querySelector(".page__heading"), { x: 0, autoAlpha: 1, duration: .5, ease: "back.out(1)" }, 0);

    if (link == 'outlets') {
        // tl.set(answears, { transformOrigin: "50% 50%", scale: 0 });
        // tl.to(answears, { scale: 1, duration: 1.5, ease: "back.out(1)" });
        //console.log("moods-page");
    }
    if (link == 'wheel') {
        // tl.set(answears, { scale: 0 });
        // tl.to(answears, { scale: 1, duration: .5 });
        //console.log("eye-page");
    }

    tl.to(moods, {
        rotation: "-360", transformOrigin: "50% 50%", ease: Linear.easeNone, duration: 0.5
    }, 0);
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


// setInterval(async function () {
//     let connection = await fetch('../api/api-read.php')
//     //console.log(connection);
//     if (connection.status != 200) {
//         alert('Something is wrong in the system')
//     }

//     let sTweet = await connection.text()
//     let jTweet = JSON.parse(sTweet) // PHP json_decode
//     console.log(jTweet);
//     // var divTweet = `
//     // <div class="tweet" id="${jTweet.id}">
//     //   <p>${jTweet.title}</p>
//     //   <p>${jTweet.body}</p>
//     //   <button>delete</button>
//     // </div>`  
//     // document.querySelector("#tweets").insertAdjacentHTML('afterbegin', divTweet)
// }, 1000)
