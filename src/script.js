// ================= COPYRIGHT =================
document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

// ================= FORM =================
const form = document.querySelector(".form");
const button = document.querySelector(".form__button");

button.disabled = true;

form.addEventListener("input", () => {
  button.disabled = !form.checkValidity();
});

// ================= MOBILE MENU =================
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.querySelector(".header__mobile-nav");

const toggleMenu = () => {
  const isOpen = mobileNav.classList.toggle("header__mobile-nav--active");

  menuBtn.setAttribute("aria-expanded", isOpen);
};

menuBtn.addEventListener("click", toggleMenu);
document.getElementById("menuBtn").addEventListener("click", toggleMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileNav.classList.remove("header__mobile-nav--active");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

window.matchMedia("(min-width: 475px)").addEventListener("change", (e) => {
  if (e.matches) {
    document
      .querySelector(".header__mobile-nav")
      .classList.remove("header__mobile-nav--active");
  }
});

// ================= DARK MODE =================
const themeToggles = document.querySelectorAll(".header__theme-toggle");
const html = document.documentElement;

const savedTheme =
  localStorage.getItem("theme") ??
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

html.dataset.theme = savedTheme;
updateToggleIcons(savedTheme);

themeToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateToggleIcons(next);
  });
});

function updateToggleIcons(theme) {
  themeToggles.forEach((btn) => {
    btn.querySelector("i").className =
      theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  });
}
