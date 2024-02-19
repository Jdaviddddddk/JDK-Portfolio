gsap.registerPlugin(ScrollTrigger);

//DECLARADOR DE VARIABLES
const tPort = document.querySelector(".prt");
const ePort = document.querySelector(".hidden1");
const brandBtn = document.querySelector("#brandBtn");
const ilustrationBtn = document.querySelector("#ilustrationBtn");
const modelingBtn = document.querySelector("modelingBtn");
const content = document.querySelector("sliderCont");

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

/*brandBtn.addEventListener('click', function() {
  content.opacity = 0.9;
  content.content = #cont1;
  duration = 4;
});*/