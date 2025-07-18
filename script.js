function toggleBar() {
  const navbar = document.querySelector(".nav-bar");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}