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
navAnimation();
