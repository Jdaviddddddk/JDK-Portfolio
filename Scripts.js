gsap.registerPlugin(ScrollTrigger);

//DECLARADOR DE VARIABLES
const tPort = document.querySelector(".prt");
const ePort = document.querySelector(".hidden1");

const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    //markers: true,
    pin: true,
    trigger: ".fixedPort",
    start: "0% 0%",
    end: "140% 0%",
  },
});

tl.to(tPort, {
    scale: 0.5,
    y: -200,
    duration: 4,
});

tl.to(".hidden1", {
    opacity: "100%",
    duration: 4,
});

const tl1 = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    //markers: true,
    pin: true,
    trigger: ".model",
    start: "0% 0%",
    end: "600% 0%",
  },
});

tl1.from(".model", {
  duration: 6,
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    //markers: true,
    pin: true,
    trigger: "#contenedorDiagonal",
    start: "-50% 50%",
    end: "-50% 0%",
  },
});

tl2.to("#contImg", {
  y: "-200vh",
  duration: 20,
})