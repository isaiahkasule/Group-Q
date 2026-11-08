
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
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");


// Filter items

function filterItems() {

    const activeButton = document.querySelector("#statusFilter .active");
    const status = activeButton.dataset.status;
    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    cards.forEach(function (card) {

        const column = card.parentElement;
        const itemName = card.querySelector(".fb-title").textContent.toLowerCase();

        if (
            (status === "" || card.dataset.status === status) &&
            itemName.includes(searchText) &&
            (category === "all" || card.dataset.category === category)
        ) {
            column.classList.remove("d-none");
        } else {
            column.classList.add("d-none");
        }

    });

}


// Listen for filter button clicks

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (b) {
            b.classList.remove("active");
        });

        button.classList.add("active");

        filterItems();

    });

});


// Listen for typing in the search bar

searchInput.addEventListener("input", function () {
    filterItems();
});


// Listen for category selection

categorySelect.addEventListener("change", function () {
    filterItems();
});
