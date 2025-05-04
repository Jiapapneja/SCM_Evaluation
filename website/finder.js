document.addEventListener("DOMContentLoaded", function() {
    // Initialize with welcome message
    displayWelcomeMessage();
    
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
        });
    });

    // Popular tag buttons
    document.querySelectorAll('.tag-button').forEach(button => {
        button.addEventListener('click', function() {
            const ingredients = this.getAttribute('data-ingredients');
            document.getElementById("search-bar").value = ingredients;
            findRecipes(ingredients);
        });
    });

    // View saved recipes button
    document.getElementById("view-saved").addEventListener('click', function() {
        showSavedRecipes();
    });
});

// Function to display welcome message
function displayWelcomeMessage() {
    const recipeGrid = document.getElementById("recipe-grid");
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
    
    recipeGrid.innerHTML = '';
    loader.style.display = 'block';

    setTimeout(() => {
        const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());

        const filteredRecipes = recipes.filter(recipe =>
            searchIngredients.every(ingredient =>
                recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
            )
        );

        loader.style.display = 'none';
        
        if (filteredRecipes.length > 0) {
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
                saveBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    saveRecipe(recipe);
                });

                recipeGrid.appendChild(card);
            });
        } else {
            recipeGrid.innerHTML = '<p class="no-results">No recipes found. Please try different ingredients.</p>';
        }
    }, 500);
}

// Function to filter recipes by cuisine
function filterRecipes(query, cuisine) {
    const recipeGrid = document.getElementById("recipe-grid");
    const loader = document.getElementById("loader");
    
    recipeGrid.innerHTML = '';
    loader.style.display = 'block';

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

        loader.style.display = 'none';
        
        if (filteredRecipes.length > 0) {
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
                saveBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    saveRecipe(recipe);
                });

                recipeGrid.appendChild(card);
            });
        } else {
            recipeGrid.innerHTML = '<p class="no-results">No recipes found for the selected filters.</p>';
        }
    }, 500);
}

// Function to save a recipe
function saveRecipe(recipe) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    
    if (!savedRecipes.some(r => r.name === recipe.name)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        alert(`${recipe.name} has been saved to your recipes!`);
    } else {
        alert(`${recipe.name} is already in your saved recipes!`);
    }
}

// Function to show saved recipes
function showSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const savedModal = document.getElementById("saved-modal");
    const savedGrid = document.getElementById("saved-recipes-grid");
    
    savedGrid.innerHTML = '';
    
    if (savedRecipes.length === 0) {
        savedGrid.innerHTML = '<p class="empty-message">You haven\'t saved any recipes yet</p>';
    } else {
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
    
    savedModal.style.display = "block";
}

// Function to open recipe modal (your existing function with improvements)
function openRecipeModal(recipe) {
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("recipe-modal-title");
    const modalImage = document.getElementById("recipe-modal-img");
    const modalDescription = document.getElementById("recipe-modal-description");
    const modalCuisine = document.getElementById("recipe-modal-cuisine");
    const modalIngredients = document.getElementById("recipe-modal-ingredients");

    modalTitle.textContent = recipe.name;
    modalImage.src = recipe.image;
    modalDescription.textContent = recipe.description;
    modalCuisine.textContent = recipe.cuisine;
    
    // Clear previous ingredients and display as list
    modalIngredients.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
    });

    // Update save button in modal
    const saveBtn = document.getElementById("save-recipe");
    saveBtn.onclick = function(e) {
        e.stopPropagation();
        saveRecipe(recipe);
    };

    modal.style.display = "block";
}

// Close modals (your existing functions with additions)
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("recipe-modal").style.display = "none";
});

document.getElementById("close-saved-modal").addEventListener("click", function() {
    document.getElementById("saved-modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("recipe-modal")) {
        document.getElementById("recipe-modal").style.display = "none";
    }
    if (event.target == document.getElementById("saved-modal")) {
        document.getElementById("saved-modal").style.display = "none";
    }
});


// Recipe Array with Images and Descriptions
const recipes = [
    { 
        name: "Grilled Cheese Sandwich", 
        ingredients: ["bread", "cheese", "butter"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg", // Replace with actual image URL
        description: "A classic grilled cheese sandwich made with toasted bread and melted cheese."
    },
    { 
        name: "Pancakes", 
        ingredients: ["flour", "milk", "egg", "butter"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "images/buttermilk-pancakes.jpg", // Replace with actual image URL
        description: "Fluffy pancakes served with syrup and butter."
    },
    {
        name: "Chicken Curry", 
        ingredients: ["chicken", "onion", "garlic", "tomato", "spices"], 
        cuisine: "Indian", 
        type: "Non-Vegetarian", 
        image: "https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2.jpg", // Replace with actual image URL
        description: "A spicy and flavorful chicken curry made with a blend of Indian spices."
    },
    { 
        name: "Paneer Tikka", 
        ingredients: ["paneer", "yogurt", "spices", "bell pepper", "onion"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg", // Replace with actual image URL
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney."
    },

    { 
        name: "Margarita Pizza", 
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"], 
        cuisine: "Italian", 
        type: "Vegetarian", 
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg", // Replace with actual image URL
        description: "Classic pizza topped with fresh tomato sauce, mozzarella, and basil."
    },
    { 
        name: "Chole Bhature", 
        ingredients: ["chickpeas", "flour", "spices", "onion"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "https://i.ytimg.com/vi/csfIOfMnRGg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6GPMx72TdT-BQh86wkTA3VKBRpQ", // Replace with actual image URL
        description: "Spicy chickpeas served with deep-fried bread, a North Indian favorite."
    },
    { 
        name: "Pasta Alfredo", 
        ingredients: ["pasta", "cream", "parmesan cheese", "butter"], 
        cuisine: "Italian", 
        type: "Vegetarian", 
        image: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg", // Replace with actual image URL
        description: "Creamy fettuccine pasta tossed with rich Alfredo sauce."
    },
    { 
        name: "Samosa", 
        ingredients: ["potato", "peas", "spices", "flour"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg", // Replace with actual image URL
        description: "Crispy pastry filled with spiced potatoes and peas, deep-fried until golden."
    },
    { 
        name: "Fish Tacos", 
        ingredients: ["fish", "taco shells", "cabbage", "salsa"], 
        cuisine: "Mexican", 
        type: "Non-Vegetarian", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2msBUJqS1l6g2eyPM6MTzvffLe4vf4Lttw&s", // Replace with actual image URL
        description: "Crispy fish fillets served in soft taco shells with fresh toppings."
    },
    { 
        name: "Vegetable Stir-Fry", 
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic"], 
        cuisine: "Chinese", 
        type: "Vegetarian", 
        image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg", // Replace with actual image URL
        description: "Quick and colorful stir-fried vegetables tossed in soy sauce."
    },
    { 
        name: "Paneer Butter Masala", 
        ingredients: ["paneer", "butter", "cream", "tomato", "spices"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg", // Replace with actual image URL
        description: "Rich and creamy paneer butter masala served with naan or rice."
    },
    { 
        name: "Tandoori Chicken", 
        ingredients: ["chicken", "yogurt", "tandoori spices"], 
        cuisine: "Indian", 
        type: "Non-Vegetarian", 
        image: "https://static01.nyt.com/images/2024/05/16/multimedia/fs-tandoori-chicken-hmjq/fs-tandoori-chicken-hmjq-videoSmall.jpg", // Replace with actual image URL
        description: "Chicken marinated in yogurt and spices, grilled to perfection."
    },
    { 
        name: "Falafel", 
        ingredients: ["chickpeas", "herbs", "spices", "pita bread"], 
        cuisine: "Middle Eastern", 
        type: "Vegetarian", 
        image: "https://static01.nyt.com/images/2024/01/10/multimedia/10Felafel-wqbp/10Felafel-wqbp-superJumbo.jpg", // Replace with actual image URL
        description: "Crispy chickpea balls served in pita with tahini sauce."
    },
    { 
        name: "Pav Bhaji", 
        ingredients: ["vegetables", "pav bread", "spices", "butter"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "images/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg", // Replace with actual image URL

        description: "A spicy vegetable mash served with buttered bread rolls."
    },
    { 
        name: "Sushi", 
        ingredients: ["rice", "seaweed", "fish", "vegetables"], 
        cuisine: "Japanese", 
        type: "Non-Vegetarian", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIObgM84rxP_9ETuDP0e2dgcPxOSsLT8sEeg&s", // Replace with actual image URL
        description: "Delicious sushi rolls made with rice and fresh ingredients."
    },
    { 
        name: "Paneer do pyaza", 
        ingredients: ["paneer", "yogurt", "spices", "bell pepper", "onion" , "capsicum" , "coriender"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "images/DKT-SPL-INDIAN-GRAVY-Paneer-Do-Pyaza.jpg", // Replace with actual image URL
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney."
    },
    { 
        name: "Veggie Burger", 
        ingredients: ["burger buns", "veggie patty", "lettuce", "tomato", "onion", "ketchup"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "images/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg", 
        description: "A healthy and hearty burger with a plant-based patty and fresh vegetables." 
    },
    { 
        name: "Mushroom Risotto", 
        ingredients: ["arborio rice", "mushrooms", "vegetable broth", "onion", "parmesan", "garlic"], 
        cuisine: "Italian", 
        type: "Vegetarian", 
        image: "images/TMD-Mushroom-Risotto-WEB-19.jpg", 
        description: "Creamy risotto cooked slowly with earthy mushrooms and a touch of parmesan." 
    },
    { 
        name: "Aloo Gobi", 
        ingredients: ["potatoes", "cauliflower", "tomatoes", "onion", "spices", "cilantro"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "images/Aloo-Gobi-Piping-Pot-Curry.jpg", 
        description: "A spiced Indian dish made with potatoes and cauliflower, often served with roti or rice." 
    },
    { 
        name: "Avocado Toast", 
        ingredients: ["bread", "avocado", "lemon juice", "salt", "pepper", "chili flakes"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "images/EatingWell-April-Avocado-Toast-Directions-04-5b5b86524a3d4b35ac4c57863f6095dc.jpg", 
        description: "Toasted bread topped with mashed avocado, seasoning, and optional toppings like chili flakes or seeds." 

    },
    { 
        name: "Tomato Basil Soup", 
        ingredients: ["tomatoes", "onion", "garlic", "vegetable broth", "basil", "cream"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "images/tomato-basil-soup.jpg", 
        description: "A creamy, comforting soup made with ripe tomatoes and fresh basil, perfect with grilled cheese." 
    },
    {
        "name": "Mac and Cheese",
        "ingredients": ["macaroni", "cheddar cheese", "milk", "butter", "flour", "salt"],
    "cuisine": "American",
    "type": "Vegetarian",
    "image": "images/mac-and-cheese-skillet-trivet.jpg",
    "description": "A rich and creamy baked macaroni and cheese, a classic American comfort food."
    },
    {
        "name": "Stuffed Bell Peppers",
        "ingredients": ["bell peppers", "rice", "black beans", "corn", "cheddar cheese", "onion", "tomato"],
        "cuisine": "American",
        "type": "Vegetarian",
        "image": "images/southwestern-style-stuffed- bell peppers-1-12.jpg",
        "description": "Colorful bell peppers stuffed with a flavorful mix of rice, beans, and cheese, then baked to perfection."
      },
      {
        "name": "Cornbread",
        "ingredients": ["cornmeal", "flour", "baking powder", "milk", "egg", "butter", "sugar"],
        "cuisine": "American",
        "type": "Vegetarian",
        "image": "images/cornbread.jpg",
        "description": "A slightly sweet, moist cornbread often served with chili or barbecue dishes."
      },
      {
        "name": "Mashed Potatoes",
        "ingredients": ["potatoes", "butter", "milk", "salt", "pepper"],
        "cuisine": "American",
        "type": "Vegetarian",
        "image": "images/18290-garlic-mashed-potatoes-ddmfs-beauty2-4x3-0327-2-47384a10cded40ae90e574bc7fdb9433.jpg",
        "description": "Creamy and smooth mashed potatoes, a staple side dish in American meals."
      },

      {
        "name": "Coleslaw",
        "ingredients": ["cabbage", "carrots", "mayonnaise", "vinegar", "sugar", "salt", "pepper"],
        "cuisine": "American",
        "type": "Vegetarian",
        "image": "images/coleslaw.jpg",
        "description": "A crunchy, creamy salad made with shredded cabbage and carrots, perfect for picnics or BBQs."
      },
      {
        "name": "Baked Sweet Potato Fries",
        "ingredients": ["sweet potatoes", "olive oil", "salt", "pepper", "paprika"],
        "cuisine": "American",
        "type": "Vegetarian",
        "image": "images/Sweet-Potato-Wedges-17.jpg",
        "description": "Crispy and slightly sweet baked fries that are a healthier twist on a classic side."
      },
      {
        "name": "Bruschetta",
        "ingredients": ["baguette", "tomatoes", "garlic", "basil", "olive oil", "salt"],
        "cuisine": "Italian",
        "type": "Vegetarian",
        "image": "images/bruschetta-recipe-1.jpg",
        "description": "Grilled bread rubbed with garlic and topped with fresh chopped tomatoes and basil."
      },
      {
        "name": "Caprese Salad",
        "ingredients": ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
        "cuisine": "Italian",
        "type": "Vegetarian",
        "image": "images/Caprese-Salad-7b.jpg",
        "description": "A simple and fresh Italian salad made with ripe tomatoes, mozzarella, and basil."
      },
      {
        "name": "Pesto Pasta",
        "ingredients": ["pasta", "basil pesto", "parmesan", "pine nuts", "olive oil"],
        "cuisine": "Italian",
        "type": "Vegetarian",
        "image": "images/Basil-Pesto-Thumbnail-500x500.jpg",
        "description": "A simple, aromatic pasta dish tossed in fresh basil pesto and topped with parmesan and pine nuts."
      },
       {
        "name": "Vegetable Lasagna",
        "ingredients": ["lasagna noodles", "zucchini", "spinach", "ricotta", "tomato sauce", "mozzarella", "parmesan"],
        "cuisine": "Italian",
        "type": "Vegetarian",
        "image": "images/Easy-Vegetable-Lasagna-Recipe-1200.jpg",
        "description": "Layered pasta with vegetables, creamy ricotta, tomato sauce, and melted cheese, baked to perfection."
      },
      {
        "name": "Masala Dosa",
        "ingredients": ["dosa batter", "potatoes", "onion", "mustard seeds", "curry leaves"],
        "cuisine": "Indian",
        "type": "Vegetarian",
        "image": "images/masala-dosa-recipe.jpg",
        "description": "Crispy fermented rice crepe filled with spicy mashed potatoes, served with chutney and sambar."
      },
      {
        "name": "Vegetable Biryani",
        "ingredients": ["basmati rice", "mixed vegetables", "spices", "yogurt", "saffron"],
        "cuisine": "Indian",
        "type": "Vegetarian",
        "image": "images/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg",
        "description": "A fragrant rice dish layered with spiced vegetables and cooked with saffron and herbs."
      },
      {
        "name": "Aloo Paratha",
        "ingredients": ["whole wheat flour", "potatoes", "spices", "ghee", "coriander"],
        "cuisine": "Indian",
        "type": "Vegetarian",
        "image": "images/Aloo-Paratha-4.jpg",
        "description": "Stuffed flatbread with spiced mashed potatoes, traditionally served with curd or pickle."
      },
      {
        "name": "Eggplant Parmesan",
        "ingredients": ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
        "cuisine": "Italian",
        "type": "Vegetarian",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Eggplant_Parmigiana_%28cropped%29.jpg/640px-Eggplant_Parmigiana_%28cropped%29.jpg",
        "description": "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
      }
      
      
      

    
  
    
];
