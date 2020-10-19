// let wheelRotation = "180";

// // Timeline
// var tl = gsap.timeline({ repeat: 0 });
// tl.pause();
// tl.to("#wheel__board", { transformOrigin: "50% 50%", rotation: 22.5, duration: 4.5, ease: "back.out(1)" });
// // tl.to("#wheel", { scale: 1.1, duration: .5, ease: "power4.out", delay: 1 });
// // tl.to("#wheel", { scale: 0, autoAlpha: 0, duration: 1, ease: "power4.out" });

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }

// function speenWheel() {
//     tl.resume();
// }

function speenWheel() {
    var myRotation = randomNumber(8, 24) * 45;

    var tl = gsap.timeline();
    tl.to('#wheel__board', { transformOrigin: "50% 50%", delay: .2, rotation: "+=" + myRotation + "_cw", ease: "back.out(1)", duration: 4.5 });

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    if (myRotation == 1080 || myRotation == 720 || myRotation == 360) {
        console.log("Pandemics")
    }
    if (myRotation == 540 || myRotation == 900) {
        console.log("Flood")
    }
    if (myRotation == 495 || myRotation == 855) {
        console.log("Ecological Collapse")
    }
    if (myRotation == 450 || myRotation == 810) {
        console.log("AI")
    }
    if (myRotation == 675) {
        console.log("Meteor")
    }
    if (myRotation == 945 || myRotation == 585) {
        console.log("Nuclear War")
    }
    if (myRotation == 765 || myRotation == 405) {
        console.log("Asteroid Impact")
    }
    if (myRotation == 990 || myRotation == 630) {
        console.log("Climate Change")
    }
    console.log(myRotation);
}
