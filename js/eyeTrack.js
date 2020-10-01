var svg = document.querySelector("#svg-eye");
var mouse = svg.createSVGPoint();
var eye = createEye("#eye");
var requestId = null;

var buttonAnswear = document.querySelectorAll(".answear");
var eyeStreams = document.querySelector(".eye__streams");
var eyeLid = document.querySelector(".eye__eyelid");

window.onload = function () {
    var tl = gsap.timeline();
    tl.to(eyeLid, { autoAlpha: 1, duration: 0, scale: 0, transformOrigin: "50% 40%" });
    tl.to(svg, { autoAlpha: 0, duration: 0, scale: 0 });
    tl.to(svg, { autoAlpha: 1, duration: 1, scale: 1, ease: "back.out(1)" }, 0);
    tl.to(eyeLid, { autoAlpha: 1, duration: .6, scale: 1 }, 0);

};

var speed = 6;
var speedOnHover = 2;

var tl = gsap.timeline();
tl.to(eyeStreams, { autoAlpha: 0, duration: 0, scale: 0 });

window.addEventListener("mousemove", displayStreams);

function displayStreams() {
    tl.to(eyeStreams, { autoAlpha: 1, duration: 1, scale: 2, ease: "back.out(1)" });
}

var animation = function (el, speed) {
    TweenMax.to(el, speed, {
        rotation: "+=360",
        transformOrigin: "50% 50%",
        ease: Linear.easeNone,
        repeat: -1
    });
};

// start animation
animation(eyeStreams, speed);

buttonAnswear.forEach(button => {
    button.onmouseover = function () {
        animation(eyeStreams, speedOnHover);
    };

    button.onmouseleave = function () {
        animation(eyeStreams, speed);
    };
});

window.addEventListener("mousemove", onMouseMove);

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
        transformOrigin: "50% 50%"
    });

    var bbox = element.getBBox();
    var centerX = bbox.x + bbox.width / 2;
    var centerY = bbox.y + bbox.height / 2;

    function rotateTo(point) {

        var dx = point.x - centerX;
        var dy = point.y - centerY;

        var angle = Math.atan2(dy, dx);

        TweenLite.to(element, 0.3, {
            rotation: angle + "+= _rad_short",
        });
    }

    return {
        element: element,
        rotateTo: rotateTo
    };
}