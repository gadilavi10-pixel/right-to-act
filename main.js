const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent = nav.classList.contains("open") ? "Close" : "Menu";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.textContent = "Menu";
    });
  });
}
