document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Category filtering functions
    function filterByCuisine(cuisine) {
        // Save the filter to localStorage
        localStorage.setItem('categoryFilter', JSON.stringify({
            type: 'cuisine',
            value: cuisine
        }));
        
        // Redirect to finder page with hash
        window.location.href = 'finder.html#filtered';
    }

    function filterByType(dietType) {
        localStorage.setItem('categoryFilter', JSON.stringify({
            type: 'diet',
            value: dietType
        }));
        window.location.href = 'finder.html#filtered';
    }

    function filterByMeal(mealType) {
        localStorage.setItem('categoryFilter', JSON.stringify({
            type: 'meal',
            value: mealType
        }));
        window.location.href = 'finder.html#filtered';
    }

    // Make functions globally available for HTML onclick attributes
    window.filterByCuisine = filterByCuisine;
    window.filterByType = filterByType;
    window.filterByMeal = filterByMeal;

    // Add click animations to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // Add keyboard navigation for accessibility
    categoryCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
});

// This function should be added to your finder.js file to handle the filtering:
/*
function applyCategoryFilter() {
    if (window.location.hash === '#filtered') {
        const filterData = JSON.parse(localStorage.getItem('categoryFilter'));
        if (!filterData) return;

        const searchBar = document.getElementById('search-bar');
        const cuisineButtons = document.querySelectorAll('.cuisine-button');
        
        if (filterData.type === 'cuisine') {
            // Activate the corresponding cuisine button
            cuisineButtons.forEach(button => {
                if (button.textContent.trim() === filterData.value) {
                    button.classList.add('active');
                    filterRecipes(searchBar.value, filterData.value);
                }
            });
        } 
        else if (filterData.type === 'diet') {
            // For diet filters, you might need to adjust based on your recipe data
            searchBar.value = filterData.value.toLowerCase();
            findRecipes(filterData.value.toLowerCase());
        }
        else if (filterData.type === 'meal') {
            // For meal type filters
            searchBar.value = filterData.value.toLowerCase();
            findRecipes(filterData.value.toLowerCase());
        }
        
        // Clear the filter after applying
        localStorage.removeItem('categoryFilter');
    }
}
// Call this function at the start of your finder.js DOMContentLoaded
*/