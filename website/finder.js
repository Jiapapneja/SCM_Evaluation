// JavaScript for your Recipe Finder application

// Define an array of adventurous recipes specifically for the "Feeling adventurous?" button


document.addEventListener("DOMContentLoaded", function() {
    // Initialize with welcome message
    displayWelcomeMessage();

    // --- Get references for the new Adventurous button elements ---
    const adventurousButton = document.getElementById('adventurous-button');
    const surpriseMessage = document.getElementById('surprise-message');
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    const recipeDetailsContainer = document.getElementById('recipe-details'); // The div to put recipe info
    const recipeGrid = document.getElementById("recipe-grid"); // Assuming you have a main recipe grid
    // -------------------------------------------------------------

    // Search button functionality
    document.getElementById("search-button").addEventListener("click", function() {
        const searchQuery = document.getElementById("search-bar").value;
        if (searchQuery.trim() === '') {
            displayWelcomeMessage();
            return;
        }
        findRecipes(searchQuery);
    });

    // Clear button functionality
    document.getElementById("clear-button").addEventListener("click", function() {
        document.getElementById("search-bar").value = '';
        displayWelcomeMessage();
        // Also hide the random recipes display if it's visible
        randomRecipesDisplay.classList.add('hidden');
        surpriseMessage.classList.add('hidden'); // Ensure surprise message is hidden too
    });

    // Cuisine filter buttons
    document.querySelectorAll('.cuisine-button').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.cuisine-button').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');

            const cuisine = this.textContent;
            const currentSearch = document.getElementById("search-bar").value;
            filterRecipes(currentSearch, cuisine);
             // Also hide the random recipes display if it's visible when filtering
            randomRecipesDisplay.classList.add('hidden');
            surpriseMessage.classList.add('hidden'); // Ensure surprise message is hidden too
        });
    });

    // Popular tag buttons
    document.querySelectorAll('.tag-button').forEach(button => {
        button.addEventListener('click', function() {
            const ingredients = this.getAttribute('data-ingredients');
            document.getElementById("search-bar").value = ingredients;
            findRecipes(ingredients);
             // Also hide the random recipes display if it's visible when using tags
            randomRecipesDisplay.classList.add('hidden');
            surpriseMessage.classList.add('hidden'); // Ensure surprise message is hidden too
        });
    });

    // View saved recipes button
    document.getElementById("view-saved").addEventListener('click', function() {
        showSavedRecipes();
    });


    // --- Adventurous Button functionality ---
    // Check if the adventurous button exists before adding the event listener
    if (adventurousButton) {
        // Add a click event listener to the button
        adventurousButton.addEventListener('click', function() {
            // 1. Hide the button
            adventurousButton.style.display = 'none';

            // 2. Hide the main recipe grid and welcome message
            if (recipeGrid) { // Check if the main recipe grid exists
                recipeGrid.innerHTML = ''; // Clear recipe grid content
                recipeGrid.classList.add('hidden'); // Hide the main grid container
            }
             // Also hide the welcome message if it's a separate element outside the grid
            const welcomeMessage = document.querySelector('.welcome-message');
            if(welcomeMessage) {
                 welcomeMessage.classList.add('hidden');
            }


            // 3. Show the "Surprise Me!" message
            surpriseMessage.classList.remove('hidden');

            // 4. After a short delay, hide the message and show a random recipe
            setTimeout(() => {
                // Hide the "Surprise Me!" message
                surpriseMessage.classList.add('hidden');

                // Select a random recipe from the adventurous array
                const randomIndex = Math.floor(Math.random() * adventurousRecipes.length);
                const selectedRecipe = adventurousRecipes[randomIndex];

                // Clear previous recipe details in the random display area
                recipeDetailsContainer.innerHTML = '';

                // Create HTML elements to display the selected recipe details
                const recipeName = document.createElement('h3');
                recipeName.textContent = selectedRecipe.name;
                recipeDetailsContainer.appendChild(recipeName);

                // Add image (optional, use placeholder if no real image)
                if (selectedRecipe.image) {
                    const recipeImage = document.createElement('img');
                    recipeImage.src = selectedRecipe.image;
                    recipeImage.alt = selectedRecipe.name;
                    // Add some basic styling for the image within the container
                    recipeImage.style.maxWidth = '100%';
                    recipeImage.style.height = 'auto';
                    recipeImage.style.borderRadius = '8px';
                    recipeImage.style.marginBottom = '15px';
                    recipeDetailsContainer.appendChild(recipeImage);
                }

                const recipeDescription = document.createElement('p');
                recipeDescription.textContent = selectedRecipe.description;
                recipeDetailsContainer.appendChild(recipeDescription);

                const ingredientsTitle = document.createElement('h4');
                ingredientsTitle.textContent = "Ingredients:";
                 recipeDetailsContainer.appendChild(ingredientsTitle);

                const ingredientsList = document.createElement('ul');
                selectedRecipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
                recipeDetailsContainer.appendChild(ingredientsList);

                // Add Cuisine and Type (optional)
                 const cuisineType = document.createElement('p');
                 cuisineType.textContent = `Cuisine: ${selectedRecipe.cuisine} | Type: ${selectedRecipe.type}`;
                 cuisineType.style.fontSize = '0.9em';
                 cuisineType.style.fontStyle = 'italic';
                 recipeDetailsContainer.appendChild(cuisineType);


                // Show the random recipes display container
                randomRecipesDisplay.classList.remove('hidden');

            }, 1500); // Delay in milliseconds (1.5 seconds)

        });
    } else {
        console.error("Button with ID 'adventurous-button' not found.");
    }
    // ----------------------------------------

    // Add your other existing JavaScript code here (search, filter, modals, etc.)
    // Make sure it's within this DOMContentLoaded block or accessible globally.

    // Example: Your existing event listeners for search, clear, cuisine filters, etc.
    /*
    document.getElementById("search-button").addEventListener("click", function() { ... });
    document.getElementById("clear-button").addEventListener("click", function() { ... });
    document.querySelectorAll('.cuisine-button').forEach(button => { ... });
    // ... and your functions like displayWelcomeMessage, findRecipes, filterRecipes, etc.
    */

    // --- Add logic to hide adventurous content when other actions occur ---
    // For example, in your search button click handler:
    /*
    document.getElementById("search-button").addEventListener("click", function() {
        // ... existing search logic ...
        randomRecipesDisplay.classList.add('hidden'); // Hide adventurous display
        surpriseMessage.classList.add('hidden'); // Hide surprise message
        adventurousButton.style.display = 'inline-block'; // Show adventurous button again
        if (recipeGrid) { recipeGrid.classList.remove('hidden'); } // Show main grid
        // ... rest of search logic ...
    });
    */

    // And similarly in your clear button and filter button handlers.
    // You'll also need to update displayWelcomeMessage to show the adventurous button and hide the random display.
    // See the combined JS code from our previous conversation for examples of where to add these.


}); // End of DOMContentLoaded

// Your existing functions (findRecipes, filterRecipes, saveRecipe, showSavedRecipes, openRecipeModal, etc.)
// should be defined outside the DOMContentLoaded block if they are called by multiple event listeners,
// or defined within it if they are only called within that scope.

// Your main 'recipes' array should also be defined here or globally.
// const recipes = [ ... ]; // Your main recipe data


// Function to display welcome message (your existing function)
function displayWelcomeMessage() {
    const recipeGrid = document.getElementById("recipe-grid");
     // Ensure recipe grid is visible when showing welcome message
    recipeGrid.classList.remove('hidden');
     // Hide the random recipes display
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    if(randomRecipesDisplay) {
       randomRecipesDisplay.classList.add('hidden');
    }
    const surpriseMessage = document.getElementById('surprise-message');
     if(surpriseMessage) {
        surpriseMessage.classList.add('hidden');
    }
    // Show the adventurous button again
    const adventurousButton = document.getElementById('adventurous-button');
    if(adventurousButton) {
         adventurousButton.style.display = 'inline-block'; // Or 'block' depending on your layout
    }


    recipeGrid.innerHTML = `
        <div class="welcome-message">
            <i class="fas fa-utensils"></i>
            <p>Start by entering ingredients or selecting a cuisine</p>
        </div>
    `;
}

// Function to find recipes based on ingredients (your existing function with improvements)
function findRecipes(query) {
    const recipeGrid = document.getElementById("recipe-grid");
    const loader = document.getElementById("loader");

    // Hide the random recipes display and show the main grid
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    if(randomRecipesDisplay) {
       randomRecipesDisplay.classList.add('hidden');
    }
    const surpriseMessage = document.getElementById('surprise-message');
     if(surpriseMessage) {
        surpriseMessage.classList.add('hidden');
    }
    if (recipeGrid) {
       recipeGrid.classList.remove('hidden');
    }
     // Hide the adventurous button again
    const adventurousButton = document.getElementById('adventurous-button');
    if(adventurousButton) {
         adventurousButton.style.display = 'inline-block'; // Or 'block' depending on your layout
    }


    if (recipeGrid) {
        recipeGrid.innerHTML = '';
    }
    if (loader) {
       loader.style.display = 'block';
    }


    setTimeout(() => {
        const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());

        const filteredRecipes = recipes.filter(recipe =>
            searchIngredients.every(ingredient =>
                recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
            )
        );

        if (loader) {
           loader.style.display = 'none';
        }


        if (filteredRecipes.length > 0) {
            if (recipeGrid) {
                filteredRecipes.forEach(recipe => {
                    const card = document.createElement("div");
                    card.className = "recipe-card";
                    card.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/250x200?text=Image+Not+Available'">
                        <h3>${recipe.name}</h3>
                        <p>${recipe.description}</p>
                        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                        <button class="save-recipe" data-recipe="${recipe.name}">
                            <i class="far fa-bookmark"></i> Save
                        </button>
                    `;

                    // Add click event to view recipe details
                    card.addEventListener("click", function(e) {
                        if (!e.target.classList.contains('save-recipe')) {
                            openRecipeModal(recipe);
                        }
                    });

                    // Add save recipe functionality
                    const saveBtn = card.querySelector('.save-recipe');
                    if(saveBtn) {
                        saveBtn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            saveRecipe(recipe);
                        });
                    }


                    recipeGrid.appendChild(card);
                });
            }
        } else {
             if (recipeGrid) {
                recipeGrid.innerHTML = '<p class="no-results">No recipes found. Please try different ingredients.</p>';
             }
        }
    }, 500);
}

// Function to filter recipes by cuisine (your existing function with additions)
function filterRecipes(query, cuisine) {
    const recipeGrid = document.getElementById("recipe-grid");
    const loader = document.getElementById("loader");

    // Hide the random recipes display and show the main grid
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    if(randomRecipesDisplay) {
       randomRecipesDisplay.classList.add('hidden');
    }
    const surpriseMessage = document.getElementById('surprise-message');
     if(surpriseMessage) {
        surpriseMessage.classList.add('hidden');
    }
    if (recipeGrid) {
       recipeGrid.classList.remove('hidden');
    }
     // Hide the adventurous button again
    const adventurousButton = document.getElementById('adventurous-button');
    if(adventurousButton) {
         adventurousButton.style.display = 'inline-block'; // Or 'block' depending on your layout
    }


    if (recipeGrid) {
        recipeGrid.innerHTML = '';
    }
     if (loader) {
       loader.style.display = 'block';
    }


    setTimeout(() => {
        let filteredRecipes = recipes;

        // Filter by ingredients if search query exists
        if (query) {
            const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());
            filteredRecipes = filteredRecipes.filter(recipe =>
                searchIngredients.every(ingredient =>
                    recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
                )
            );
        }

        // Filter by cuisine if not "All Cuisines"
        if (cuisine && cuisine !== "All Cuisines") {
            filteredRecipes = filteredRecipes.filter(recipe =>
                recipe.cuisine.toLowerCase() === cuisine.toLowerCase() ||
                recipe.type.toLowerCase() === cuisine.toLowerCase());
        }

        if (loader) {
           loader.style.display = 'none';
        }


        if (filteredRecipes.length > 0) {
            if (recipeGrid) {
                filteredRecipes.forEach(recipe => {
                    const card = document.createElement("div");
                    card.className = "recipe-card";
                    card.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/250x200?text=Image+Not+Available'">
                        <h3>${recipe.name}</h3>
                        <p>${recipe.description}</p>
                        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                        <button class="save-recipe" data-recipe="${recipe.name}">
                            <i class="far fa-bookmark"></i> Save
                        </button>
                    `;

                    card.addEventListener("click", function(e) {
                        if (!e.target.classList.contains('save-recipe')) {
                            openRecipeModal(recipe);
                        }
                    });

                    const saveBtn = card.querySelector('.save-recipe');
                     if(saveBtn) {
                        saveBtn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            saveRecipe(recipe);
                        });
                     }

                    recipeGrid.appendChild(card);
                });
            }
        } else {
             if (recipeGrid) {
                recipeGrid.innerHTML = '<p class="no-results">No recipes found for the selected filters.</p>';
             }
        }
    }, 500);
}

// Function to save a recipe (your existing function)
function saveRecipe(recipe) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    if (!savedRecipes.some(r => r.name === recipe.name)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        // Replace alert with a more user-friendly message box if possible
        alert(`${recipe.name} has been saved to your recipes!`);
    } else {
         // Replace alert with a more user-friendly message box if possible
        alert(`${recipe.name} is already in your saved recipes!`);
    }
}

// Function to show saved recipes (your existing function)
function showSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const savedModal = document.getElementById("saved-modal");
    const savedGrid = document.getElementById("saved-recipes-grid");

    if (savedGrid) {
       savedGrid.innerHTML = '';
    }


    if (savedRecipes.length === 0) {
        if (savedGrid) {
           savedGrid.innerHTML = '<p class="empty-message">You haven\'t saved any recipes yet</p>';
        }
    } else {
        if (savedGrid) {
            savedRecipes.forEach(recipe => {
                const card = document.createElement("div");
                card.className = "recipe-card";
                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/250x200?text=Image+Not+Available'">
                    <h3>${recipe.name}</h3>
                    <p>${recipe.cuisine}</p>
                `;

                card.addEventListener("click", function() {
                    openRecipeModal(recipe);
                });

                savedGrid.appendChild(card);
            });
        }
    }

    if (savedModal) {
       savedModal.style.display = "block";
    }
}

// Function to open recipe modal (your existing function with improvements)
function openRecipeModal(recipe) {
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("recipe-modal-title");
    const modalImage = document.getElementById("recipe-modal-img");
    const modalDescription = document.getElementById("recipe-modal-description");
    const modalCuisine = document.getElementById("recipe-modal-cuisine");
    const modalIngredients = document.getElementById("recipe-modal-ingredients");

    if (modalTitle) {
       modalTitle.textContent = recipe.name;
    }
    if (modalImage) {
        modalImage.src = recipe.image;
    }
    if (modalDescription) {
       modalDescription.textContent = recipe.description;
    }
    if (modalCuisine) {
       modalCuisine.textContent = recipe.cuisine;
    }


    // Clear previous ingredients and display as list
    if (modalIngredients) {
       modalIngredients.innerHTML = '';
       recipe.ingredients.forEach(ingredient => {
           const li = document.createElement("li");
           li.textContent = ingredient;
           modalIngredients.appendChild(li);
       });
    }


    // Update save button in modal
    const saveBtn = document.getElementById("save-recipe");
    if(saveBtn) {
        saveBtn.onclick = function(e) {
            e.stopPropagation();
            saveRecipe(recipe);
        };
    }


    if (modal) {
       modal.style.display = "block";
    }
}

// Close modals (your existing functions with additions)
const closeModalBtn = document.getElementById("close-modal");
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
        const modal = document.getElementById("recipe-modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
}


const closeSavedModalBtn = document.getElementById("close-saved-modal");
if (closeSavedModalBtn) {
    closeSavedModalBtn.addEventListener("click", function() {
        const savedModal = document.getElementById("saved-modal");
        if (savedModal) {
            savedModal.style.display = "none";
        }
    });
}


window.addEventListener("click", function(event) {
    const recipeModal = document.getElementById("recipe-modal");
    if (recipeModal && event.target == recipeModal) {
        recipeModal.style.display = "none";
    }
    const savedModal = document.getElementById("saved-modal");
    if (savedModal && event.target == savedModal) {
        savedModal.style.display = "none";
    }
});
