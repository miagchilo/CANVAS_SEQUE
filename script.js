function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./male (1).png
./male (2).png
./male (3).png
./male (4).png
./male (5).png
./male (6).png
./male (7).png
./male (8).png
./male (9).png
./male (10).png
./male (11).png
./male (12).png
./male (13).png
./male (14).png
./male (15).png
./male (16).png
./male (17).png
./male (18).png
./male (19).png
./male (20).png
./male (21).png
./male (22).png
./male (23).png
./male (24).png
./male (25).png
./male (26).png
./male (27).png
./male (28).png
./male (29).png
./male (30).png
./male (31).png
./male (32).png
./male (33).png
./male (34).png
./male (35).png
./male (36).png
./male (37).png
./male (38).png
./male (39).png
./male (40).png
./male (41).png
./male (42).png
./male (43).png
./male (44).png
./male (45).png
./male (46).png
./male (47).png
./male (48).png
./male (49).png
./male (50).png
./male (51).png
./male (52).png
./male (53).png
./male (54).png
./male (55).png
./male (56).png
./male (57).png
./male (58).png
./male (59).png
./male (60).png
./male (61).png
./male (62).png
./male (63).png
./male (64).png
./male (65).png
./male (66).png
./male (67).png
./male (68).png
./male (69).png
./male (70).png
./male (71).png
./male (72).png
./male (73).png
./male (74).png
./male (75).png
./male (76).png
./male (77).png
./male (78).png
./male (79).png
./male (80).png
./male (81).png
./male (82).png
./male (83).png
./male (84).png
./male (85).png
./male (86).png
./male (87).png
./male (88).png
./male (89).png
./male (90).png
./male (91).png
./male (92).png
./male (93).png
./male (94).png
./male (95).png
./male (96).png
./male (97).png
./male (98).png
./male (99).png
./male (100).png
./male (101).png
./male (102).png
./male (103).png
./male (104).png
./male (105).png
./male (106).png
./male (107).png
./male (108).png
./male (109).png
./male (110).png
./male (111).png
./male (112).png
./male (113).png
./male (114).png
./male (115).png
./male (116).png
./male (117).png
./male (118).png
./male (119).png
./male (120).png
./male (121).png
./male (122).png
./male (123).png
./male (124).png
./male (125).png
./male (126).png
./male (127).png
./male (128).png
./male (129).png
./male (130).png
./male (131).png
./male (132).png
./male (133).png
./male (134).png
./male (135).png
./male (136).png
./male (137).png
./male (138).png
./male (139).png
./male (140).png
./male (141).png
./male (142).png
./male (143).png
./male (144).png
./male (145).png
./male (146).png
./male (147).png
./male (148).png
./male (149).png
./male (150).png
 `;
  return data.split("\n")[index];
}

const frameCount = 150;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})


// JavaScript code
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
