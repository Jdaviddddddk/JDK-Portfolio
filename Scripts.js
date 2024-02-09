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
    end: "120% 0%",
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
    end: "100% 0%",
  },
});