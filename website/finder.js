document.getElementById("search-button").addEventListener("click", function () {
    let searchQuery = document.getElementById("search-bar").value;
    findRecipes(searchQuery);
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GthicQwTiXV0M8mopHLJb04RX9mYhbEYyb4HMrXHA&s", // Replace with actual image URL
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
        image: "https://images.app.goo.gl/ayFBYDoM4cqq8cr19", // Replace with actual image URL
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
        image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg", // Replace with actual image URL
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney."
    },
    { 
        name: "Veggie Burger", 
        ingredients: ["burger buns", "veggie patty", "lettuce", "tomato", "onion", "ketchup"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "https://images.app.goo.gl/7FpSdy2nnPb9aA7q7", 
        description: "A healthy and hearty burger with a plant-based patty and fresh vegetables." 
    },
    { 
        name: "Mushroom Risotto", 
        ingredients: ["arborio rice", "mushrooms", "vegetable broth", "onion", "parmesan", "garlic"], 
        cuisine: "Italian", 
        type: "Vegetarian", 
        image: "https://www.recipetineats.com/wp-content/uploads/2018/01/Mushroom-Risotto_4.jpg", 
        description: "Creamy risotto cooked slowly with earthy mushrooms and a touch of parmesan." 
    },
    { 
        name: "Aloo Gobi", 
        ingredients: ["potatoes", "cauliflower", "tomatoes", "onion", "spices", "cilantro"], 
        cuisine: "Indian", 
        type: "Vegetarian", 
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/aloo-gobi.jpg", 
        description: "A spiced Indian dish made with potatoes and cauliflower, often served with roti or rice." 
    },
    { 
        name: "Avocado Toast", 
        ingredients: ["bread", "avocado", "lemon juice", "salt", "pepper", "chili flakes"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "https://www.loveandlemons.com/wp-content/uploads/2020/02/avocado-toast.jpg", 
        description: "Toasted bread topped with mashed avocado, seasoning, and optional toppings like chili flakes or seeds." 
    },
    { 
        name: "Tomato Basil Soup", 
        ingredients: ["tomatoes", "onion", "garlic", "vegetable broth", "basil", "cream"], 
        cuisine: "American", 
        type: "Vegetarian", 
        image: "https://www.simplyrecipes.com/thmb/9f_cHOs6kMNdq1HbpHo82ZyU6Gs=/2000x1333/filters:fill(auto,1)/Simply-Recipes-Tomato-Soup-LEAD-1-b8f4f4041c134365be4f4bdf6bd26bdc.jpg", 
        description: "A creamy, comforting soup made with ripe tomatoes and fresh basil, perfect with grilled cheese." 
    },
];

// Function to find and display recipes based on input
function findRecipes(query) {
    const recipeGrid = document.getElementById("recipe-grid");
    recipeGrid.innerHTML = ''; // Clear previous results
    const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());
    
    // Filter recipes based on ingredients
    const filteredRecipes = recipes.filter(recipe => 
        searchIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    // Display filtered recipes
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const card = document.createElement("div");
            card.className = "recipe-card";
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            `;
            recipeGrid.appendChild(card);
        });
    } else {
        recipeGrid.innerHTML = '<p>No recipes found. Please try different ingredients.</p>';
    }
}
