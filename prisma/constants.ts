import {
  Breakfast,
  Snacks,
  Cocktails,
  Coffee,
  Drinks,
  Desserts,
  ChildrenLove
} from "../shared/components/shared/products";
import { Ingredients } from "../shared/components/shared/ingredients";

export const categories = [
    {
        name: 'Pizzas'
    },
    {
        name: 'Breakfast'
    },
    {
        name: 'Snacks'
    },
    {
        name: 'Cocktails'
    },
    {
        name: 'Coffee'
    },
    {
        name: 'Drinks'
    },
    {
        name: 'Desserts'
    },
    {
        name: 'Children love'
    },
];

export const _ingredients = [
    {
      name: 'Cheese Crust',
      price: 179,
      imageUrl: Ingredients.CheeseCrust
    },
    {
      name: 'Creamy Mozzarella',
      price: 79,
      imageUrl: Ingredients.CreamyMozzarella,
    },
    {
      name: 'Cheddar and Parmesan',
      price: 79,
      imageUrl: Ingredients.CheddarParmesanCheeses,
    },
    {
      name: 'Spicy Jalapeño Pepper',
      price: 59,
      imageUrl: Ingredients.SpicyJalapeñoPepper,
    },
    {
      name: 'Tender Chicken',
      price: 79,
      imageUrl: Ingredients.TenderChicken,
    },
    {
      name: 'Mushrooms',
      price: 59,
      imageUrl: Ingredients.Mushrooms,
    },
    {
      name: 'Bacon',
      price: 79,
      imageUrl: Ingredients.Bacon,
    },
    {
      name: 'Ham',
      price: 79,
      imageUrl: Ingredients.Ham,
    },
    {
      name: 'Spicy Pepperoni',
      price: 79,
      imageUrl: Ingredients.SpicyPepperoni,
    },
    {
      name: 'Spicy Chorizo',
      price: 79,
      imageUrl: Ingredients.SpicyChorizo,
    },
    {
      name: 'Pickles',
      price: 59,
      imageUrl: Ingredients.Pickles,
    },
    {
      name: 'Fresh Tomatoes',
      price: 59,
      imageUrl: Ingredients.FreshTomatoes,
    },
    {
      name: 'Red Onion',
      price: 59,
      imageUrl: Ingredients.RedOnion,
    },
    {
      name: 'Juicy Pineapple',
      price: 59,
      imageUrl: Ingredients.JuicyPineapple,
    },
    {
      name: 'Italian Herbs',
      price: 39,
      imageUrl: Ingredients.ItalianHerbs,
    },
    {
      name: 'Sweet Pepper',
      price: 59,
      imageUrl: Ingredients.SweetPepper,
    },
    {
      name: 'Feta Cheese Cubes',
      price: 79,
      imageUrl: Ingredients.FetaCheeseCubes,
    },
    {
      name: 'Meatballs',
      price: 79,
      imageUrl: Ingredients.Meatballs,
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
      name: 'Omelette with Ham and Mushrooms',
      imageUrl: Breakfast.OmeletteHamMushrooms,
      categoryId: 2,
    },
    {
      name: 'Omelette with Pepperoni',
      imageUrl: Breakfast.OmelettePepperoni,
      categoryId: 2,
    },
    {
      name: 'Latte Coffee',
      imageUrl: Breakfast.LatteCoffee,
      categoryId: 2,
    },
    {
      name: 'Ham and Cheese Sandwich',
      imageUrl: Snacks.HamCheeseSandwich,
      categoryId: 3,
    },
    {
      name: 'Chicken Nuggets',
      imageUrl: Snacks.ChickenNuggets,
      categoryId: 3,
    },
    {
      name: 'Baked Potatoes with Sauce 🌱',
      imageUrl: Snacks.BakedPotatoesSauce,
      categoryId: 3,
    },
    {
      name: 'Dodster',
      imageUrl: Snacks.Dodster,
      categoryId: 3,
    },
    {
      name: 'Spicy Dodster 🌶️🌶️',
      imageUrl: Snacks.SpicyDodster,
      categoryId: 3,
    },
    {
      name: 'Banana Milkshake',
      imageUrl: Cocktails.BananaMilkshake,
      categoryId: 4,
    },
    {
      name: 'Caramel Apple Milkshake',
      imageUrl: Cocktails.CaramelAppleMilkshake,
      categoryId: 4,
    },
    {
      name: 'Oreo Cookie Milkshake',
      imageUrl: Cocktails.OreoCookieMilkshake,
      categoryId: 4,
    },
    {
      name: 'Classic Milkshake 👶',
      imageUrl: Cocktails.ClassicMilkshake,
      categoryId: 4,
    },
    {
      name: 'Irish Cappuccino',
      imageUrl: Coffee.IrishCappuccino,
      categoryId: 5,
    },
    {
      name: 'Caramel Cappuccino Coffee',
      imageUrl: Coffee.CaramelCappuccinoCoffee,
      categoryId: 5,
    },
    {
      name: 'Coconut Latte Coffee',
      imageUrl: Coffee.CoconutLatteCoffee,
      categoryId: 5,
    },
    {
      name: 'Americano Coffee',
      imageUrl: Coffee.AmericanoCoffee,
      categoryId: 5,
    },
    {
      name: 'Latte Coffee',
      imageUrl: Coffee.LatteCoffee,
      categoryId: 5,
    },
    {
      name: "Live mango tea",
      imageUrl: Drinks.LiveMangoTea,
      categoryId: 6,
    },
    {
      name: "Pepsi",
      imageUrl: Drinks.Pepsi,
      categoryId: 6
    },
    {
      name: "7-up",
      imageUrl: Drinks.SevenUp,
      categoryId: 6
    },
    {
      name: "Mirinda",
      imageUrl: Drinks.Mirinda,
      categoryId: 6
    },
    {
      name: "Cake Spartak with cheese",
      imageUrl: Desserts.CakeSpartakcheese,
      categoryId: 7
    },
    {
      name: "Oreo Cheese cake",
      imageUrl: Desserts.OreoCheesecake,
      categoryId: 7
    },
    {
      name: "Cheese 🌱👶",
      imageUrl: ChildrenLove.Cheese,
      categoryId: 8
    },
    {
      name: "Chicken Nuggets",
      imageUrl: ChildrenLove.ChickenNuggets,
      categoryId: 8
    },
];