
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
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
        height: window.innerHeight
      };
    }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}


function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", { height: "21vh", ease: "power2.out", duration: 0.5 })
      .to(".nav-part2 h5", { visibility: "visible", duration: 0.1 }, "-=0.4")
      .to(".nav-part2 h5 span", {
        y: 0,
        stagger: {
          amount: 0.6,
        },
        ease: "power2.out",
        duration: 0.5,
      });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
      ease: "power2.in",
      duration: 0.3,
    })
      .to(".nav-part2 h5", { visibility: "hidden", duration: 0.1 }, "-=0.2")
      .to("#nav-bottom", { height: 0, ease: "power2.in", duration: 0.4 });
  });
}


function page2Animation() {
  let rightelems = document.querySelectorAll(".right-elem");
  rightelems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1
      })
    })
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0
      })
    })
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 120,
      });
    })
  })
}

function page3VideoAnimation() {
  let page3Center = document.querySelector(".page3-center");
  let page3video = document.querySelector("#page3 video");
  page3Center.addEventListener('click', function () {
    page3video.play();
    gsap.to(page3video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,


    })
  })
  page3video.addEventListener('click', function () {
    page3video.pause();
    gsap.to(page3video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: '30px'
    })
  })
}

function page5VideoAnimation() {
  let sections = document.querySelectorAll('.sec-right')
  sections.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    })
    elem.addEventListener('mouseleave', function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    })
  })
}
function page7Animations() {
  gsap.from("#btm7-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm7-part2",
      scroller: "#main",
      // markers: true,
      start: "top 80%",
      end: "top 10%",
      scrub: true
    }
  })
}

function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2
  })
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "50px",
    duration: 2,
    ease: "expo.out"
  })
  tl.from("nav", {
    opacity: 0,
    delay: -0.2
  })
  tl.from("#page1 h1,#page1 p,#page1 div", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.5
  })

}

locomotiveAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
page5VideoAnimation();
page7Animations();
loadingAnimation();