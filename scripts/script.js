const adjustIcon = document.querySelector("#adjust");
const background = document.querySelector("body");
const navBar = document.querySelectorAll(".navlist li");
const particles = document.querySelector("#particles-js");

adjustIcon.addEventListener("click", () => {
  background.classList.toggle("change");
  // navBar.classList.toggle("change");
});

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".main p", { opacity: 0 }, { opacity: 1, duration: 2 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".socials i", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#adjust", { opacity: 0 }, { opacity: 1, duration: 2 });
//Sides of index para slide in when page loads

//projects page, organise steps with captions either side and a invsible box underneats that highlights when u hover over
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}