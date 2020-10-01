
// Timeline
var tl = gsap.timeline({ repeat: 0 });
tl.pause();
tl.to("#wheel__board", { transformOrigin: "50% 50%", rotation: "1060", duration: 4.5, ease: "back.out(1)" });
tl.to("#wheel", { scale: 1.1, duration: .5, ease: "power4.out" });
tl.to("#wheel", { scale: 0, autoAlpha: 0, duration: 1, ease: "power4.out" });

function speenWheel() {
    tl.resume();
}