const adjustIcon = document.querySelector("#adjust");
const background = document.querySelector("body");
const navBar = document.querySelectorAll(".navlist li");

adjustIcon.addEventListener("click", () => {
  background.classList.toggle("change");
  // navBar.classList.toggle("change");
  console.log(navBar);
});

// for (user of navBar) {
//   adjustIcon.addEventListener("click", function () {
//     console.log(user);
//   });
// }

//Sides of index para slide in when page loads

//projects page, organise steps with captions either side and a invsible box underneats that highlights when u hover over
