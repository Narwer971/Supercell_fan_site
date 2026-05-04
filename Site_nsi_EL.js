const buttons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const overlay = document.getElementById("overlay");

const closeButtons = document.querySelectorAll(".close");

// ouvrir popup
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.modal);

    modal.classList.add("active");
    overlay.classList.add("active");
  });
});

// fermer popup (croix)
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("active");
    overlay.classList.remove("active");
  });
});

// fermer en cliquant dehors
overlay.addEventListener("click", () => {
  modals.forEach(m => m.classList.remove("active"));
  overlay.classList.remove("active");
});