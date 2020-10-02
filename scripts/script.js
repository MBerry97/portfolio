const adjustIcon = document.querySelector("#adjust");
const background = document.querySelector("body");
const navBar = document.querySelectorAll(".navlist li");

adjustIcon.addEventListener("click", () => {
  background.classList.toggle("change");
  // navBar.classList.toggle("change");
  console.log(navBar);
});

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".main", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("footer", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#adjust", { opacity: 0 }, { opacity: 1, duration: 1 });
//Sides of index para slide in when page loads

//projects page, organise steps with captions either side and a invsible box underneats that highlights when u hover over
