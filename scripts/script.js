const adjustIcon = document.querySelector("#adjust");
const background = document.querySelector("body");

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".main p", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".socials i", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo("#adjust", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 1 });

adjustIcon.addEventListener("click", () => {
  background.classList.toggle("change");
 
});

var flkty = new Flickity( '.carousel', {
  cellAlign: 'left',
  contain: true,
  wrapAround: false,
  prevNextButtons: true,
  pageDots: true,
  autoPlay: 6000,
});
