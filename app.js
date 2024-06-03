function togglemenu() {
  const menu = document.querySelector(".menu-link");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    /* else{
            entry.target.classList.remove('show');
          } */
  });
});
let hiddenElementY = document.querySelectorAll(".hiddenY");
hiddenElementY.forEach((el) => observer.observe(el));

const typed = new Typed(".auto-text", {
  strings: ["Frontend Developer", "Java Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let scrollup = document.getElementById("scrollUp");
scrollup.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
