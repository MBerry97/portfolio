const adjustIcon = document.querySelector("#adjust");
const background = document.querySelector("body");
const navBar = document.querySelector(".navigation ul li");

adjustIcon.addEventListener("click", () => {
  background.classList.toggle("change");
  navBar.classList.toggle("change");
  console.log(navBar);
});

// for (user of navBar) {
//   user.addEventListener("click", function () {
//     console.log(this);
//   });
// }
