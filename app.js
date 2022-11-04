const toggleHamburgerMenu = () => {
  document.getElementById("hamburger-menu").classList.toggle("menu-visible");
};

document.addEventListener("click", e => {
  if (
    e.target.matches("#hamburger-menu a") ||
    e.target.matches("#hamburger-menu-btn") ||
    e.target.matches("#hamburger-menu-btn *")
  ) {
    toggleHamburgerMenu();
  }
});
