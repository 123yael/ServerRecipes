
// create db if it is not exsist
use recipesDB


// inset users
db.users.insert([
    {firstName: "sara", lastName: "levi", pass: 111111111, email: "sara@gmail.com"},
    {firstName: "rivka", lastName: "hokes", pass: 222222222, email: "rivka@gmail.com"},
    {firstName: "rachel", lastName: "malkin", pass: 333333333, email: "rachel@gmail.com"},
    {firstName: "lea", lastName: "koen", pass: 444444444, email: "lea@gmail.com"},
    {firstName: "chany", lastName: "malkin", pass: 555555555, email: "chany@gmail.com"}
])
    
// insert recipes   
db.recipes.insert([
    {name: "Numbers cake", description: "Cake in the shape of a number with a special design", img: "numbers.jpg", level: "medium", 
        duration: 60, numberOfDishes: 25, Instructions: "Mix all the ingredients into a uniform dough, roll out the dough into"
        + " a thin layer between two sheets of baking paper, cut in the shape of a number, decorate as you wish.", userName: "lea koen", 
        components: [
            {name: "white flour", count: "560 grams"},
            {name: "cold butter, cut into cubes", count: "400 grams"},
            {name: "powdered sugar", count: "200 grams"},
            {name: "finely ground almonds", count: "140 grams"},
            {name: "eggs L", count: "2"},
            {name: "Pinch of salt", count: "1"}       
        ]
    },
    {name: "Mousse in glasses", description: "Delicious mousse in glasses suitable for any occasion", img: "mousse.jpg", level: "medium", 
        duration: 50, numberOfDishes: 45, Instructions: "Mix the margarine, almonds, brown sugar, and surface flour in a mold, cool, cool and crumbly."
        + "Mix egg yolks, coffee and vanilla sugar and whisk together with the rich. Beat egg whites with sugar. Combine two whipped creams with folding movements." 
        + " Put whipped cream in crumbly glasses.", userName: "rivka hokes", 
        components: [
            {name: "melted margarine", count: "2"},
            {name: "ground almonds", count: "1/2 cup"},
            {name: "brown sugar", count: "1/2 cup"},
            {name: "flour", count: "1 cup"},
            {name: "proteins", count: "6"},
            {name: "sugar", count: "1/3 cup"},
            {name: "egg yolks", count: "6"},
            {name: "coffee", count: "2 spoons"},
            {name: "vanilla sugar", count: "1"},
            {name: "Ritz", count: "2"}
        ]
    },
    {name: "Chocolate Cake", description: "A special brown cake that must be tasted", img: "chocolate.jpg", level: "easy", 
        duration: 30, numberOfDishes: 20, Instructions: "Mix all the ingredients and bake in the hot oven at 180 degrees", userName: "sara levi", 
        components: [
            {name: "flour", count: "3 cups"},
            {name: "sugar", count: "2 cups"},
            {name: "eggs", count: "2"},
            {name: "oil", count: "2/3 cup"},
            {name: "water", count: "2 cups"},
            {name: "salt", count: "a little"},
            {name: "Baking powder", count: "1"},
            {name: "soda and vinegar", count: "1"},
            {name: "vanilla sugar", count: "1"},
            {name: "cocoa", count: "6 spoons"}
        ]
    },
    {name: "Milk jam cake", description: "Cream cake with milk jam something special", img: "milkjam.jpg", level: "easy", 
        duration: 45, numberOfDishes: 25, Instructions: "Mix all the ingredients, and while putting it in the mold, also put "
        + "milk jam into the pastry dough, and let it cool.", userName: "sara levi", 
        components: [
            {name: "eggs", count: "3"},
            {name: "sugar", count: "1 cups"},
            {name: "sour cream", count: "1"},
            {name: "sweet cream", count: "1"},
            {name: "baking powder", count: "1"},
            {name: "vanilla extract", count: "1"},
            {name: "flour", count: "2 cups"},
            {name: "milk jam", count: "1/2 packet"}
        ]
    },
    {name: "Torte cake", description: "Bar cake with a beautiful torte base", img: "torte.jpg", level: "hard", 
        duration: 180, numberOfDishes: 20, Instructions: "Beat egg whites with sugar, add all the ingredients and mix with gentle" 
        + " folding movements, bake at 180 degrees, decorate as you wish.", userName: "lea koen", 
        components: [
            {name: "eggs", count: "4"},
            {name: "flour", count: "5 tablespoons1 cups"},
            {name: "sugar", count: "5 tablespoons1"},
            {name: "oil", count: "2 tablespoons"},
            {name: "coffee", count: "1 teaspoon"}
        ]
    }
    
])
