
// // var svg = document.querySelector("#svg");
// // var mouse = svg.createSVGPoint();

// // var leftEye = createEye("#left-eye");

// // var requestId = null;

// // window.addEventListener("mousemove", onMouseMove)

// // function onFrame() {

// //     var point = mouse.matrixTransform(svg.getScreenCTM().inverse());

// //     leftEye.rotateTo(point);

// //     requestId = null;
// // }

// // function onMouseMove(event) {
// //     mouse.x = event.clientX;
// //     mouse.y = event.clientY;

// //     if (!requestId) {
// //         requestId = requestAnimationFrame(onFrame);
// //     }
// // }

// // function createEye(selector) {

// //     var element = document.querySelector(selector);

// //     TweenLite.set(element, {
// //         transformOrigin: "center"
// //     });

// //     var bbox = element.getBBox();
// //     var centerX = bbox.x + bbox.width / 2;
// //     var centerY = bbox.y + bbox.height / 2;

// //     function rotateTo(point) {

// //         var dx = point.x - centerX;
// //         var dy = point.y - centerY;

// //         var angle = Math.atan2(dy, dx);

// //         TweenLite.to(element, 0.3, {
// //             rotation: angle + "_rad_short"
// //         });
// //     }

// //     return {
// //         element: element,
// //         rotateTo: rotateTo
// //     };
// // }
// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');
// const TWOPI = 2 * Math.PI;

// // size the canvas to the full width/height available
// // Note: this solution is not responsive
// canvas.width = innerWidth;
// canvas.height = innerHeight;

// // eye objects will be in charge of holding state and rendering themselves
// class Eye {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.width = 80;
//         this.height = 80;
//         this.pupil = { x: 0, y: 0, width: 10, height: 10 };
//     }

//     draw() {
//         const { x, y } = this;

//         context.save();
//         context.translate(x, y);

//         this.drawOutline();
//         this.drawPupil()

//         context.restore();
//     }

//     drawOutline() {
//         const { width, height } = this;

//         context.beginPath();
//         context.ellipse(0, 0, width, height, 0, 0, TWOPI);
//         context.stroke();
//     }

//     drawPupil() {
//         const { x, y, width, height } = this.pupil;

//         context.beginPath();
//         context.ellipse(x, y, width, height, 0, 0, TWOPI);
//         context.fill();
//     }

//     track(object) {
//         const { x, y, width, height, pupil } = this;
//         // find the angle between the mouse and the center of the eye
//         const xDiff = (x - object.x);
//         const yDiff = (y - object.y);
//         const angle = Math.atan2(yDiff, xDiff) - Math.PI;

//         if (!isNaN(angle)) {
//             // calculate the point on the circumference of the eye
//             const cX = (width * Math.cos(angle));
//             const cY = (height * Math.sin(angle));
//             // calculate the point on the circumference of the pupil
//             const pX = pupil.width * Math.cos(angle);
//             const pY = pupil.height * Math.sin(angle);

//             //  position the pupil at the edge of the eye, minus the radius of the pupil
//             pupil.x = cX - pX;
//             pupil.y = cY - pY;
//         }
//     }
// }

// // on mousemove update the mouse position
// window.addEventListener('mousemove', e => {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
// });

// const mouse = { x: 0, y: 0 };
// const leftEye = new Eye(100, 100);
// //const rightEye = new Eye(200, 100);

// // on every tick redraw the eyes with a new position
// function tick() {
//     // clear canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     // track the mouse and draw the left eye
//     leftEye.track(mouse);
//     leftEye.draw();

//     // copy the state of the left eyes pupil
//     // rightEye.pupil.x = leftEye.pupil.x;
//     // rightEye.pupil.y = leftEye.pupil.y;
//     //rightEye.track(mouse); // or use this for independent eye tracking
//     // rightEye.draw();

//     requestAnimationFrame(tick);
// }

// // kick off animation loop
// tick();

// document.querySelector('body').addEventListener('mousemove', eyeball);

// function eyeball() {
//     var eye = document.querySelectorAll('.eye');

//     eye.forEach(function (eye) {
//         let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
//         let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

//         let radian = Math.atan2(event.pageX - x, event.pageY - y);
//         let rotation = (radian * (180 / Math.PI) * -1) + 200;
//         console.log(eye.style.transform = "rotate(" + rotation + "deg)");
//         eye.style.transform = "rotate(" + rotation + "deg)";
//     });
// }


var svg = document.querySelector("#svg-eye");
var mouse = svg.createSVGPoint();

var eye = createEye("#eye");

var requestId = null;

window.addEventListener("mousemove", onMouseMove)

function onFrame() {

    var point = mouse.matrixTransform(svg.getScreenCTM().inverse());

    eye.rotateTo(point);

    requestId = null;
}

function onMouseMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    if (!requestId) {
        requestId = requestAnimationFrame(onFrame);
    }
}

function createEye(selector) {

    var element = document.querySelector(selector);

    TweenLite.set(element, {
        transformOrigin: "center"
    });

    var bbox = element.getBBox();
    var centerX = bbox.x + bbox.width / 2;
    var centerY = bbox.y + bbox.height / 2;

    function rotateTo(point) {

        var dx = point.x - centerX;
        var dy = point.y - centerY;

        var angle = Math.atan2(dy, dx);

        TweenLite.to(element, 0.3, {
            rotation: angle + "_rad_short"
        });
    }

    return {
        element: element,
        rotateTo: rotateTo
    };
}