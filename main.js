const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const modal = document.querySelector(".modal-container");

openBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// close modal when the user clicks outside the modal-content
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
