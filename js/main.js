window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrollTop:${this.scrollY}px`;
});

console.log(ScrollSmoother);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
