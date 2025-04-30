document.getElementById("search-button").addEventListener("click", function () {
    let searchQuery = document.getElementById("search-bar").value;
    alert("Searching for: " + searchQuery);
});

document.getElementById("filter-button").addEventListener("click", function () {
    let cuisine = document.getElementById("cuisine").value;
    let foodHabit = document.getElementById("food_habit").value;
    alert("Filtering by cuisine: " + cuisine + ", Food Habit: " + foodHabit);
});

// Back Button Functionality
document.getElementById("back-button").addEventListener("click", function () {
    window.history.back(); // Go back to the previous page
});