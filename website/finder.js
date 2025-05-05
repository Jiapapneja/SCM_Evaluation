const adventurousRecipes = [
        {
            name: "Spicy Peanut Noodles",
            ingredients: ["noodles", "peanut butter", "soy sauce", "rice vinegar", "sesame oil", "garlic", "ginger", "chili flakes", "vegetables (e.g., bell peppers, carrots)", "optional: chicken or tofu"],
            cuisine: "Asian-inspired",
            type: "Vegetarian (can be Non-Vegetarian or Vegan)",
            image: "images/spicy-peanut-noodles.jpg", // Placeholder image path (update with actual URL if hosted)
            description: "Quick and flavorful noodles with a creamy and spicy peanut sauce."
        },
        {
            name: "Shakshuka",
            ingredients: ["eggs", "canned diced tomatoes", "onion", "bell pepper", "garlic", "cumin", "paprika", "chili powder", "olive oil", "salt", "pepper", "optional: feta cheese, cilantro"],
            cuisine: "Middle Eastern / North African",
            type: "Vegetarian",
            image: "images/shakshuka.jpg", // Placeholder image path (update with actual URL if hosted)
            description: "Eggs poached in a simmering, spiced tomato and pepper sauce."
        },
        {
            name: "Lentil Soup with Sausage",
            ingredients: ["lentils", "sausage (chorizo or Italian)", "onion", "carrots", "celery", "garlic", "canned diced tomatoes", "chicken or vegetable broth", "herbs (thyme, bay leaf)"],
            cuisine: "European / Mediterranean",
            type: "Non-Vegetarian (can be Vegetarian without sausage)",
            image: "images/lentil-soup-sausage.jpg", // Placeholder image path (update with actual URL if hosted)
            description: "Hearty and comforting lentil soup with flavorful sausage."
        },
         {
            name: "Korean Bibimbap (Simplified)",
            ingredients: ["cooked rice", "beef or tofu", "spinach", "carrots", "zucchini", "mushrooms", "egg", "gochujang (Korean chili paste)", "sesame oil", "soy sauce", "garlic"],
            cuisine: "Korean",
            type: "Depends on protein (Vegetarian or Non-Vegetarian)",
            image: "images/bibimbap.jpg", // Placeholder image path (update with actual URL if hosted)
            description: "A colorful and customizable mixed rice bowl with various toppings and spicy sauce."
        },
    {
        name: "Gyoza (Pork and Vegetable)",
        ingredients: ["gyoza wrappers", "ground pork", "cabbage", "napa cabbage", "garlic", "ginger", "soy sauce", "sesame oil", "sake", "cornstarch", "dipping sauce"],
        cuisine: "Japanese",
        type: "Non-Vegetarian",
        image: "images/gyoza.jpg", // Placeholder image path
        description: "Pan-fried Japanese dumplings with a savory filling, crispy bottom, and tender top."
    },
    {
        name: "Miso Soup",
        ingredients: ["miso paste", "dashi stock", "tofu", "wakame seaweed", "green onions"],
        cuisine: "Japanese",
        type: "Vegetarian (can be Vegan)",
        image: "images/miso-soup.jpg", // Placeholder image path
        description: "A traditional Japanese soup made with dashi broth and miso paste, typically served with tofu and seaweed."
    },

    {
        name: "Chicken Katsu Curry",
        ingredients: ["chicken breast", "flour", "egg", "breadcrumbs (panko)", "oil for frying", "Japanese curry roux", "onion", "carrot", "potato", "rice"],
        cuisine: "Japanese",
        type: "Non-Vegetarian",
        image: "images/chicken-katsu-curry.jpg", // Placeholder image path
        description: "Crispy breaded chicken cutlet served with rich and savory Japanese curry sauce over rice."
    }
        // Add more adventurous recipes here following the same format
    ];
    
    
    // Recipe Array with Images and Descriptions (Your main recipe data)
    // Make sure this array is defined and accessible.
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
           name: "Mac and Cheese",
           ingredients: ["macaroni", "cheddar cheese", "milk", "butter", "flour", "salt"],
           cuisine: "American",
           type: "Vegetarian",
           image: "images/mac-and-cheese-skillet-trivet.jpg",
           description: "A rich and creamy baked macaroni and cheese, a classic American comfort food."
        },
        {
           name: "Stuffed Bell Peppers",
           ingredients: ["bell peppers", "rice", "black beans", "corn", "cheddar cheese", "onion", "tomato"],
           cuisine: "American",
           type: "Vegetarian",
           image: "images/southwestern-style-stuffed- bell peppers-1-12.jpg",
           description: "Colorful bell peppers stuffed with a flavorful mix of rice, beans, and cheese, then baked to perfection."
         },
         {
           name: "Cornbread",
           ingredients: ["cornmeal", "flour", "baking powder", "milk", "egg", "butter", "sugar"],
           cuisine: "American",
           type: "Vegetarian",
           image: "images/Simply-Recipes-Hot-Honey-Cornbread-LEAD-3-5035aac231b6444c96bb31dadbebf511.jpg",
           description: "A slightly sweet, moist cornbread often served with chili or barbecue dishes."
         },
         {
           name: "Mashed Potatoes",
           ingredients: ["potatoes", "butter", "milk", "salt", "pepper"],
           cuisine: "American",
           type: "Vegetarian",
           image: "images/18290-garlic-mashed-potatoes-ddmfs-beauty2-4x3-0327-2-47384a10cded40ae90e574bc7fdb9433.jpg",
           description: "Creamy and smooth mashed potatoes, a staple side dish in American meals."
         },
    
         {
           name: "Coleslaw",
           ingredients: ["cabbage", "carrots", "mayonnaise", "vinegar", "sugar", "salt", "pepper"],
           cuisine: "American",
           type: "Vegetarian",
           image: "images/ALR-222218-nanas-southern-coleslaw-VAT-4x3-d44d1396eb3e47e5b5a9db5a33213c92.jpg",
           description: "A crunchy, creamy salad made with shredded cabbage and carrots, perfect for picnics or BBQs."
         },
         {
           name: "Baked Sweet Potato Fries",
           ingredients: ["sweet potatoes", "olive oil", "salt", "pepper", "paprika"],
           cuisine: "American",
           type: "Vegetarian",
           image: "images/Sweet-Potato-Wedges-17.jpg",
           description: "Crispy and slightly sweet baked fries that are a healthier twist on a classic side."
         },
         {
           name: "Bruschetta",
           ingredients: ["baguette", "tomatoes", "garlic", "basil", "olive oil", "salt"],
           cuisine: "Italian",
           type: "Vegetarian",
           image: "images/bruschetta-recipe-1.jpg",
           description: "Grilled bread rubbed with garlic and topped with fresh chopped tomatoes and basil."
         },
         {
           name: "Caprese Salad",
           ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
           cuisine: "Italian",
           type: "Vegetarian",
           image: "images/Caprese-Salad-7b.jpg",
           description: "A simple and fresh Italian salad made with ripe tomatoes, mozzarella, and basil."
         },
         {
           name: "Pesto Pasta",
           ingredients: ["pasta", "basil pesto", "parmesan", "pine nuts", "olive oil"],
           cuisine: "Italian",
           type: "Vegetarian",
           image: "images/Basil-Pesto-Thumbnail-500x500.jpg",
           description: "A simple, aromatic pasta dish tossed in fresh basil pesto and topped with parmesan and pine nuts."
         },
    
         {
           name: "Masala Dosa",
           ingredients: ["dosa batter", "potatoes", "onion", "mustard seeds", "curry leaves"],
           cuisine: "Indian",
           type: "Vegetarian",
           image: "images/masala-dosa-recipe.jpg",
           description: "Crispy fermented rice crepe filled with spicy mashed potatoes, served with chutney and sambar."
         },
         {
           name: "Vegetable Biryani",
           ingredients: ["basmati rice", "mixed vegetables", "spices", "yogurt", "saffron"],
           cuisine: "Indian",
           type: "Vegetarian",
           image: "images/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg",
           description: "A fragrant rice dish layered with spiced vegetables and cooked with saffron and herbs."
         },
         {
           name: "Aloo Paratha",
           ingredients: ["whole wheat flour", "potatoes", "spices", "ghee", "coriander"],
           cuisine: "Indian",
           type: "Vegetarian",
           image: "images/Aloo-Paratha-4.jpg",
           description: "Stuffed flatbread with spiced mashed potatoes, traditionally served with curd or pickle."
         },
    
        {
           name: "Eggplant Parmesan",
           ingredients: ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
           cuisine: "Italian",
           type: "Vegetarian",
           image: "images/healthy_baked_eggplant_parmesan-1.jpg",
           description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
        },
          {
            name: "Caprese Salad",
            ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
            cuisine: "Italian",
            type: "Vegetarian",
            image: "images/Caprese-Salad-7b.jpg",
            description: "A simple and fresh Italian salad made with ripe tomatoes, mozzarella, and basil."
          },
          {
            name: "Pesto Pasta",
            ingredients: ["pasta", "basil pesto", "parmesan", "pine nuts", "olive oil"],
            cuisine: "Italian",
            type: "Vegetarian",
            image: "images/Basil-Pesto-Thumbnail-500x500.jpg",
            description: "A simple, aromatic pasta dish tossed in fresh basil pesto and topped with parmesan and pine nuts."
          },
           {
            name: "Vegetable Lasagna",
            ingredients: ["lasagna noodles", "zucchini", "spinach", "ricotta", "tomato sauce", "mozzarella", "parmesan"],
            cuisine: "Italian",
            type: "Vegetarian",
            image: "images/Easy-Vegetable-Lasagna-Recipe-1200.jpg",
            description: "Layered pasta with vegetables, creamy ricotta, tomato sauce, and melted cheese, baked to perfection."
          },
        {
          name: "Palak Paneer",
          ingredients: ["spinach", "paneer", "onion", "garlic", "ginger", "tomato", "green chili", "spices", "cream"],
          cuisine: "Indian",
          type: "Vegetarian",
          image: "images/Palak-Paneer.jpg",
          description: "A creamy spinach-based curry cooked with soft paneer cubes and aromatic spices, served hot with naan or rice."
        },
        {
              name: "Panzanella",
              ingredients: ["stale bread", "cherry tomatoes", "cucumber", "red onion", "basil", "olive oil", "red wine vinegar", "salt", "pepper"],
              cuisine: "Italian",
              type: "Vegetarian",
              image: "images/Panzanella-Salad.jpg",
              description: "A refreshing Tuscan bread salad made with chunks of day-old bread, juicy tomatoes, crisp cucumbers, and basil, tossed in a zesty vinaigrette."
            }
            
    ];
    
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