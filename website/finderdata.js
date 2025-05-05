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
];