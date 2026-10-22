window.addEventListener("DOMContentLoaded", () => {
  let menuActive = false;
  const menuMask = document.querySelector(".menu-bg-mask");
  const menu = document.querySelector(".mobile-menu");
  const menuBtn = document.querySelector(".menu-btn");
  const menuCloseBtn = document.querySelector(".menu-close-btn");

  // Menyuni yopish uchun yordamchi funksiya
  const closeMenu = () => {
    menuActive = false;
    menu.classList.add("-left-full", "pointer-events-none");
    menuMask.classList.add("opacity-0", "pointer-events-none");
  };

  // Menyuni ochish
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Hodisa yuqoriga (window'ga) tarqalishining oldini oladi
    menuActive = true;
    menu.classList.remove("-left-full", "pointer-events-none");
    menuMask.classList.remove("opacity-0", "pointer-events-none");
  });

  // Yopish tugmasi
  menuCloseBtn.addEventListener("click", () => {
    closeMenu();
  });

  // Orqa fon (mask) bosilganda yopish
  menuMask.addEventListener("click", () => {
    closeMenu();
  });

  // Tashqariga bosilganda yopish (agar kerak bo'lsa)
  window.addEventListener("click", (e) => {
    if (menuActive && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });
});
