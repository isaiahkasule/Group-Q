// Findback JavaScript
const reportForm = document.getElementById("reportForm");

reportForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thanks! The report will be saved once the backend is connected.");
  reportForm.reset();
  bootstrap.Modal.getInstance(document.getElementById("reportModal")).hide();
});

// Lost / Found / All filter
const filterButtons = document.querySelectorAll("#statusFilter button");
const cards = document.querySelectorAll(".fb-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const status = button.dataset.status;

    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    cards.forEach(function (card) {
      const column = card.parentElement;
      if (status === "" || card.dataset.status === status) {
        column.classList.remove("d-none");
      } else {
        column.classList.add("d-none");
      }
    });
  });
});
