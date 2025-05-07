// JavaScript for your Recipe Finder application

// Define an array of adventurous recipes specifically for the "Feeling adventurous?" button
// You can add more recipes to this list following the same structure
const adventurousRecipes = [
    {
       name: "Eggplant Parmesan",
       ingredients: ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
       cuisine: "Italian",
       type: "Vegetarian",
       image: "images/healthy_baked_eggplant_parmesan-1.jpg",
       description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
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

        "name": "Chicken Piccata",
        "ingredients": ["chicken breasts", "lemon", "capers", "butter", "white wine", "flour"],
        "cuisine": "Italian",
        "type": "Non-Vegetarian",
        "image": "https://images.themodernproper.com/production/posts/2019/Chicken-Picatta-8.jpg?w=800&q=82&auto=format&fit=crop&dm=1689343305&s=51c93f70d2c9eb342fe7862c7b752d08",
        "description": "Chicken Piccata is a classic Italian-American dish featuring tender chicken breasts lightly dredged in flour and pan-fried, then simmered in a tangy lemon-butter sauce with capers and white wine. It's bright, savory, and perfect with pasta or vegetables."
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

        name : "Aloo Paratha",
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
        image:"images/healthy_baked_eggplant_parmesan-1.jpg",
        description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
      },  
      {
        name: "Palak Paneer",
        ingredients: ["spinach", "paneer", "onion", "tomato", "garlic", "spices"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-1.jpg",
        description: "A creamy spinach curry with soft paneer cubes, seasoned with Indian spices."
      },
      {
        name: "Chicken Korma",
        ingredients: ["chicken", "yogurt", "onion", "garlic", "ginger", "spices"],
        cuisine: "Indian",
        type: "Non-Vegetarian",
        image: "images/Eitan-Bernath-Chicken-Korma--819x1024.jpg",
        description: "A rich and flavorful chicken curry cooked in a creamy yogurt-based sauce with aromatic spices."
      },
   
=======
        name: "Chicken Katsu Curry",
        ingredients: ["chicken breast", "flour", "egg", "breadcrumbs (panko)", "oil for frying", "Japanese curry roux", "onion", "carrot", "potato", "rice"],
=======
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
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg", "butter"],
        cuisine: "American",
        type: "Vegetarian",
        image: "images/buttermilk-pancakes.jpg",
        description: "Fluffy pancakes served with syrup and butter."
    },
    // Add more adventurous recipes here following the same format
];


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
        if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden'); // Added safety check
        if (surpriseMessage) surpriseMessage.classList.add('hidden'); // Added safety check
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
            if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden'); // Added safety check
            if (surpriseMessage) surpriseMessage.classList.add('hidden'); // Added safety check
        });
    });

    // Popular tag buttons
    document.querySelectorAll('.tag-button').forEach(button => {
        button.addEventListener('click', function() {
            const ingredients = this.getAttribute('data-ingredients');
            document.getElementById("search-bar").value = ingredients;
            findRecipes(ingredients);
             // Also hide the random recipes display if it's visible when using tags
            if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden'); // Added safety check
            if (surpriseMessage) surpriseMessage.classList.add('hidden'); // Added safety check
        });
    });

    // View saved recipes button
     const viewSavedButton = document.getElementById("view-saved"); // Get button reference
     if (viewSavedButton) { // Check if button exists
        viewSavedButton.addEventListener('click', function() {
            showSavedRecipes();
        });
     }


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
            if (surpriseMessage) surpriseMessage.classList.remove('hidden'); // Added safety check

            // 4. After a short delay, hide the message and show a random recipe
            setTimeout(() => {
                // Hide the "Surprise Me!" message
                if (surpriseMessage) surpriseMessage.classList.add('hidden');

                // Select a random recipe from the adventurous array
                const randomIndex = Math.floor(Math.random() * adventurousRecipes.length);
                const selectedRecipe = adventurousRecipes[randomIndex];

                // Clear previous recipe details in the random display area
                if (recipeDetailsContainer) recipeDetailsContainer.innerHTML = ''; // Added safety check

                // Check if container exists before appending
                if (recipeDetailsContainer) {
                    // Create HTML elements to display the selected recipe details
                    const recipeName = document.createElement('h3');
                    recipeName.textContent = selectedRecipe.name;
                    recipeDetailsContainer.appendChild(recipeName);

    {
        name: "Chicken Curry",
        ingredients: ["chicken", "onion", "garlic", "tomato", "spices"],
        cuisine: "Indian",
        type: "Non-Vegetarian",
        image: "https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2.jpg",
        description: "A spicy and flavorful chicken curry made with a blend of Indian spices."
    },
    {
        name: "Paneer Tikka",
        ingredients: ["paneer", "yogurt", "spices", "bell pepper", "onion"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg",
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney."
    },
    {
        name: "Margarita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg",
        description: "Classic pizza topped with fresh tomato sauce, mozzarella, and basil."
    },
    {
        name: "Chole Bhature",
        ingredients: ["chickpeas", "flour", "spices", "onion"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://i.ytimg.com/vi/csfIOfMnRGg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6GPMx72TdT-BQh86wkTA3VKBRpQ",
        description: "Spicy chickpeas served with deep-fried bread, a North Indian favorite."
    },
    {
        name: "Pasta Alfredo",
        ingredients: ["pasta", "cream", "parmesan cheese", "butter"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
        description: "Creamy fettuccine pasta tossed with rich Alfredo sauce."
    },
    {
        name: "Samosa",
        ingredients: ["potato", "peas", "spices", "flour"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg",
        description: "Crispy pastry filled with spiced potatoes and peas, deep-fried until golden."
    },
    {
        name: "Fish Tacos",
        ingredients: ["fish", "taco shells", "cabbage", "salsa"],
        cuisine: "Mexican",
        type: "Non-Vegetarian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2msBUJqS1l6g2eyPM6MTzvffLe4vf4Lttw&s",
        description: "Crispy fish fillets served in soft taco shells with fresh toppings."
    },
    {
        name: "Vegetable Stir-Fry",
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic"],
        cuisine: "Chinese",
        type: "Vegetarian",
        image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg",
        description: "Quick and colorful stir-fried vegetables tossed in soy sauce."
    },
    {
        name: "Paneer Butter Masala",
        ingredients: ["paneer", "butter", "cream", "tomato", "spices"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
        description: "Rich and creamy paneer butter masala served with naan or rice."
    },
    {
        name: "Tandoori Chicken",
        ingredients: ["chicken", "yogurt", "tandoori spices"],
        cuisine: "Indian",
        type: "Non-Vegetarian",
        image: "https://static01.nyt.com/images/2024/05/16/multimedia/fs-tandoori-chicken-hmjq/fs-tandoori-chicken-hmjq-videoSmall.jpg",
        description: "Chicken marinated in yogurt and spices, grilled to perfection."
    },
    {
        name: "Falafel",
        ingredients: ["chickpeas", "herbs", "spices", "pita bread"],
        cuisine: "Middle Eastern",
        type: "Vegetarian",
        image: "https://static01.nyt.com/images/2024/01/10/multimedia/10Felafel-wqbp/10Felafel-wqbp-superJumbo.jpg",
        description: "Crispy chickpea balls served in pita with tahini sauce."
    },
    {
        name: "Pav Bhaji",
        ingredients: ["vegetables", "pav bread", "spices", "butter"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
        description: "A spicy vegetable mash served with buttered bread rolls."
    },
    {
        name: "Sushi",
        ingredients: ["rice", "seaweed", "fish", "vegetables"],
        cuisine: "Japanese",
        type: "Non-Vegetarian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIObgM84rxP_9ETuDP0e2dgcPxOSsLT8sEeg&s",
        description: "Delicious sushi rolls made with rice and fresh ingredients."
    },
    {
        name: "Paneer do pyaza",
        ingredients: ["paneer", "yogurt", "spices", "bell pepper", "onion" , "capsicum" , "coriender"], // Note: 'coriander' spelling
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/DKT-SPL-INDIAN-GRAVY-Paneer-Do-Pyaza.jpg",
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney." // Description seems similar to Paneer Tikka? Maybe update.
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
       image: "images/southwestern-style-stuffed- bell peppers-1-12.jpg", // Space in filename might cause issues
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
    // Removed duplicate Caprese Salad
     {
       name: "Pesto Pasta", // Original Pesto Pasta
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
     {
       name: "Aloo Paratha",
       ingredients: ["whole wheat flour", "potatoes", "spices", "ghee", "coriander"], // Note: 'coriander' spelling
       cuisine: "Indian",
       type: "Vegetarian",
     },
     {
        name: "Eggplant Parmesan",
        ingredients: ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/healthy_baked_eggplant_parmesan-1.jpg",
        description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
     },
     { // Original Caprese Salad
        name: "Caprese Salad",
        ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/Caprese-Salad-7b.jpg",
        description: "A simple and fresh Italian salad made with ripe tomatoes, mozzarella, and basil."
     },
     // Removed duplicate Pesto Pasta
     {
        name: "Vegetable Lasagna",
        ingredients: ["lasagna noodles", "zucchini", "spinach", "ricotta", "tomato sauce", "mozzarella", "parmesan"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/Easy-Vegetable-Lasagna-Recipe-1200.jpg",
        description: "Layered pasta with vegetables, creamy ricotta, tomato sauce, and melted cheese, baked to perfection."
     },
];

// Function definitions (should be placed after recipes array or loaded correctly)

// Function to display welcome message
function displayWelcomeMessage() {
    const recipeGrid = document.getElementById("recipe-grid");
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    const surpriseMessage = document.getElementById('surprise-message');
    }
    if(surpriseMessage) {
        surpriseMessage.classList.add('hidden');
    }
    // Show the adventurous button again
    if(adventurousButton) {
        adventurousButton.style.display = 'inline-block'; // Or 'block' depending on your layout
    }
}

// Function to manage UI states (Helper function based on suggestions)
function updateUIState(state) {
    const recipeGrid = document.getElementById("recipe-grid");
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    const surpriseMessage = document.getElementById('surprise-message');
    const adventurousButton = document.getElementById('adventurous-button');
    const loader = document.getElementById("loader");
    const welcomeMessageElement = document.querySelector('.welcome-message'); // Might be inside recipeGrid

    // Hide everything initially, then show based on state
    if (recipeGrid) recipeGrid.classList.add('hidden');
    if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
    if (surpriseMessage) surpriseMessage.classList.add('hidden');
    if (adventurousButton) adventurousButton.style.display = 'none'; // Hide by default
    if (loader) loader.style.display = 'none'; // Hide loader by default

    switch (state) {
        case 'welcome':
            if (recipeGrid) {
                recipeGrid.classList.remove('hidden');
                recipeGrid.innerHTML = `
                    <div class="welcome-message">
                        <i class="fas fa-utensils"></i>
                        <p>Start by entering ingredients or selecting a cuisine</p>
                    </div>`;
            }
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            break;
        case 'loading':
             if (recipeGrid) { // Keep grid visible but clear it
                recipeGrid.classList.remove('hidden');
                recipeGrid.innerHTML = '';
             }
            if (loader) loader.style.display = 'block';
            if (adventurousButton) adventurousButton.style.display = 'inline-block'; // Keep button visible during load
            break;
        case 'results':
            if (recipeGrid) recipeGrid.classList.remove('hidden'); // Grid contains results now
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            break;
        case 'adventurous_surprise':
            if (surpriseMessage) surpriseMessage.classList.remove('hidden');
            // Keep adventurous button hidden as it was just clicked
            break;
         case 'adventurous_result':
            if (randomRecipesDisplay) randomRecipesDisplay.classList.remove('hidden');
             // Keep adventurous button hidden
            break;
        case 'no_results':
             if (recipeGrid) {
                 recipeGrid.classList.remove('hidden'); // Show grid to display message
                 recipeGrid.innerHTML = '<p class="no-results">No recipes found. Please try different ingredients or filters.</p>';
             }
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            break;
         case 'saved_recipes':
            // This state might be handled by the modal itself, but good to reset main area
             if (recipeGrid) {
                 recipeGrid.classList.remove('hidden'); // Or hide? Depends on design
                 // Potentially show welcome message again or keep last search results?
                 // Let's default to showing welcome message for simplicity
                 recipeGrid.innerHTML = `
                     <div class="welcome-message">
                         <i class="fas fa-utensils"></i>
                         <p>Start by entering ingredients or selecting a cuisine</p>
                     </div>`;
             }
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
             break;

    }

}


// Function to find recipes based on ingredients
function findRecipes(query) {
    const recipeGrid = document.getElementById("recipe-grid");
    updateUIState('loading'); // Show loader, clear grid

    setTimeout(() => {
        const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());

        // Make sure 'recipes' array is accessible here
        const filteredRecipes = recipes.filter(recipe =>
            searchIngredients.every(ingredient =>
                // Check if ingredient exists and is not empty before searching
                ingredient && recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
            )
        );

        if (filteredRecipes.length > 0) {
            displayRecipes(filteredRecipes, recipeGrid); // Use a helper to display
            updateUIState('results'); // Show results grid
        } else {
            updateUIState('no_results'); // Show no results message
        }
    }, 500); // Simulate network delay
}

// Function to filter recipes by cuisine (and optionally ingredients)
function filterRecipes(query, cuisine) {
    const recipeGrid = document.getElementById("recipe-grid");
    updateUIState('loading');

    setTimeout(() => {
        let filteredRecipes = recipes; // Start with all recipes

        // Filter by ingredients if search query exists
        if (query && query.trim() !== '') {
            const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());
            filteredRecipes = filteredRecipes.filter(recipe =>
                searchIngredients.every(ingredient =>
                     ingredient && recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
                )
            );
        }

        // Filter by cuisine if not "All Cuisines"
        if (cuisine && cuisine !== "All Cuisines") {
            filteredRecipes = filteredRecipes.filter(recipe =>
                (recipe.cuisine && recipe.cuisine.toLowerCase() === cuisine.toLowerCase()) || // Check cuisine first
                (recipe.type && recipe.type.toLowerCase() === cuisine.toLowerCase()) // Allow filtering by type if matches button text
            );
        }

        if (filteredRecipes.length > 0) {
            displayRecipes(filteredRecipes, recipeGrid); // Use a helper to display
            updateUIState('results');
        } else {
             updateUIState('no_results');
        }
    }, 500);
}

// Helper function to display recipes in the grid
function displayRecipes(recipesToDisplay, gridElement) {
    if (!gridElement) return; // Safety check
    gridElement.innerHTML = ''; // Clear previous results

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        // Use placeholder image if recipe.image is missing or empty
        const imageUrl = recipe.image ? recipe.image : 'https://via.placeholder.com/250x200?text=Image+Not+Available';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${recipe.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200?text=Image+Error';">
            <h3>${recipe.name}</h3>
            <p>${recipe.description || 'No description available.'}</p>
            <p><strong>Cuisine:</strong> ${recipe.cuisine || 'N/A'}</p>
            <button class="save-recipe" data-recipe-name="${recipe.name}">
                <i class="far fa-bookmark"></i> Save
            </button>
        `;

        // Add click event to view recipe details (on the card, not the button)
        card.addEventListener("click", function(e) {
            // Only open modal if the click wasn't on the save button
            if (!e.target.closest('.save-recipe')) {
                 openRecipeModal(recipe);
            }
        });

        // Add save recipe functionality to the button
        const saveBtn = card.querySelector('.save-recipe');
        if(saveBtn) {
            saveBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click event when button is clicked
                // Find the full recipe object again, safer than relying on just name if names could clash
                const recipeNameToSave = this.getAttribute('data-recipe-name');
                const recipeToSave = recipes.find(r => r.name === recipeNameToSave) || adventurousRecipes.find(r => r.name === recipeNameToSave);
                if(recipeToSave) {
                    saveRecipe(recipeToSave);
                } else {
                    console.error("Could not find recipe object to save:", recipeNameToSave);
                    alert("Error: Could not save recipe."); // User feedback
                }
            });
        }

        gridElement.appendChild(card);
    });
}


// Function to save a recipe
function saveRecipe(recipe) {
    let savedRecipes = [];
    try {
        // Use try-catch for localStorage access
        savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    } catch (e) {
        console.error("Error reading saved recipes from localStorage:", e);
        alert("Could not access saved recipes. LocalStorage might be disabled or full.");
        return; // Stop execution if localS
    }


    if (!savedRecipes.some(r => r.name === recipe.name)) {
        savedRecipes.push(recipe);
        try {
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            // Replace alert with a more user-friendly notification if possible
            alert(`${recipe.name} has been saved!`);
        } catch (e) {
             console.error("Error saving recipes to localStorage:", e);
             alert("Could not save recipe. LocalStorage might be disabled or full.");
        }
    } else {
         // Replace alert with a more user-friendly notification if possible
        alert(`${recipe.name} is already saved!`);
    }
}

// Function to show saved recipes
function showSavedRecipes() {
    let savedRecipes = [];
     try {
        savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
     } catch (e) {
        console.error("Error reading saved recipes from localStorage:", e);
        alert("Could not access saved recipes. LocalStorage might be disabled or full.");
        return;
     }

    const savedModal = document.getElementById("saved-modal");
    const savedGrid = document.getElementById("saved-recipes-grid");

    if (!savedModal || !savedGrid) {
        console.error("Saved recipes modal or grid element not found.");
        return; // Exit if essential elements are missing
    }

    savedGrid.innerHTML = ''; // Clear previous content


    if (savedRecipes.length === 0) {
        savedGrid.innerHTML = '<p class="empty-message">You haven\'t saved any recipes yet.</p>';
    } else {
        savedRecipes.forEach(recipe => {
            const card = document.createElement("div");
            card.className = "recipe-card"; // Reuse recipe card styling
             const imageUrl = recipe.image ? recipe.image : 'https://via.placeholder.com/250x200?text=Image+Not+Available';
            card.innerHTML = `
                <img src="${imageUrl}" alt="${recipe.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200?text=Image+Error';">
                <h3>${recipe.name}</h3>
                <p>${recipe.cuisine || 'N/A'}</p>
                `; // Removed button as it might be confusing here, card click opens details

            card.addEventListener("click", function() {
                // Close the saved modal *before* opening the recipe detail modal for clarity
                savedModal.style.display = "none";
                openRecipeModal(recipe);
            });

            savedGrid.appendChild(card);
        });
    }

    savedModal.style.display = "block";
    // updateUIState('saved_recipes'); // Update main area behind the modal if needed
}

// Function to open recipe modal
function openRecipeModal(recipe) {
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("recipe-modal-title");
    const modalImage = document.getElementById("recipe-modal-img");
    const modalDescription = document.getElementById("recipe-modal-description");
    const modalCuisine = document.getElementById("recipe-modal-cuisine");
    const modalIngredients = document.getElementById("recipe-modal-ingredients");
    const saveBtn = document.getElementById("save-recipe"); // Assuming save button ID in modal

    if (!modal || !modalTitle || !modalImage || !modalDescription || !modalCuisine || !modalIngredients || !saveBtn) {
        console.error("One or more recipe modal elements not found!");
        return;
    }

    modalTitle.textContent = recipe.name || 'Recipe Details';
    modalImage.src = recipe.image ? recipe.image : 'https://via.placeholder.com/300x250?text=Image+Not+Available';
    modalImage.alt = recipe.name || 'Recipe image';
    // Add onerror handler directly to modal image too
    modalImage.onerror = function() { this.onerror=null; this.src='https://via.placeholder.com/300x250?text=Image+Error'; };

    modalDescription.textContent = recipe.description || 'No description provided.';
    modalCuisine.textContent = `Cuisine: ${recipe.cuisine || 'N/A'} | Type: ${recipe.type || 'N/A'}`;


    // Clear previous ingredients and display as list
    modalIngredients.innerHTML = ''; // Clear existing
    if (recipe.ingredients && recipe.ingredients.length > 0) {
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            modalIngredients.appendChild(li);
        });
    } else {
        modalIngredients.innerHTML = '<li>No ingredients listed.</li>';
    }


    // Update save button in modal - Use add/remove event listener to avoid multiple handlers piling up
    // First, clone the button to remove old listeners
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

    // Add the new event listener
    newSaveBtn.addEventListener('click', function handler(e) {
        e.stopPropagation();
        saveRecipe(recipe);
        // Optional: Provide feedback directly on the button or modal
        // this.textContent = 'Saved!';
        // setTimeout(() => { this.innerHTML = '<i class="far fa-bookmark"></i> Save'; }, 2000);
    });


    modal.style.display = "block";
}

// Close modals
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

// Close modal if clicking outside of it
window.addEventListener("click", function(event) {
    const recipeModal = document.getElementById("recipe-modal");
    const savedModal = document.getElementById("saved-modal");
    // Check if the click target is the modal background itself
    if (recipeModal && event.target == recipeModal) {
        recipeModal.style.display = "none";
    }
    if (savedModal && event.target == savedModal) {
        savedModal.style.display = "none";
    }
});
