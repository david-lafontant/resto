import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    create: {
      email: 'test@test.com',
      name: 'Test User',
      password: `rfvdbnc5456y#$%^bc7$%Tvbwisjuvb`
    },
    update: {},
  });
  console.log({ user });
  const restaurants = await prisma.restaurant.createMany({
    data:[
      {
        "name": "Savory Bites",
        "address": "123 Main Street, Cityville",
        "description": "A delightful blend of global flavors, offering a unique culinary experience."
      },
      {
        "name": "Mystic Spices",
        "address": "456 Spice Lane, Flavor City",
        "description": "Experience the enchantment of bold and exotic spices from around the world."
      },
      {
        "name": "Pasta Paradiso",
        "address": "789 Noodle Avenue, Pastatown",
        "description": "A haven for pasta lovers, where every dish is a journey through Italian flavors."
      },
      {
        "name": "Grill Master",
        "address": "321 BBQ Boulevard, Smoketown",
        "description": "Savor the perfectly grilled meats and indulge in the art of barbecue excellence."
      },
      {
        "name": "VegeDelight",
        "address": "567 Greenery Street, Veggieville",
        "description": "A haven for vegetarians, offering a diverse menu of flavorful and wholesome plant-based dishes."
      },
      {
        "name": "Seafood Symphony",
        "address": "876 Ocean View, Fisherman's Wharf",
        "description": "Immerse yourself in the symphony of fresh seafood, expertly prepared to tantalize your taste buds."
      },
      {
        "name": "Taco Haven",
        "address": "234 Salsa Lane, Tacoburg",
        "description": "A vibrant celebration of tacos, where every bite is a fiesta of Mexican flavors."
      },
      {
        "name": "Burger Bliss",
        "address": "789 Patty Plaza, Burgerburg",
        "description": "Indulge in the juiciest burgers in town, crafted with love and top-quality ingredients."
      },
      {
        "name": "Sweet Temptations",
        "address": "654 Dessert Drive, Sugarland",
        "description": "A paradise for dessert enthusiasts, offering a delectable array of sweet temptations."
      },
      {
        "name": "Asian Fusion Delight",
        "address": "432 Wok Street, Fusionville",
        "description": "Embark on a culinary journey through Asia with our fusion dishes that blend flavors harmoniously."
      }
    ]
  })
  console.log('Created restaurants: ', restaurants.count);
  const menus = await prisma.menu.createMany({
    data: [
      {"restaurantId": 1,
        "name": "Breakfast",
        "description": "Start your day with a delicious and hearty breakfast, featuring a variety of morning delights."
      },
      {
        "restaurantId": 1,
        "name": "Lunch",
        "description": "Satisfy your midday cravings with our diverse lunch menu, offering a range of flavorful options."
      },
      {
        "restaurantId": 1,
        "name": "Dinner",
        "description": "Indulge in a delightful dinner experience, where our chefs have crafted a menu of exquisite dishes."
      },
      {
        "restaurantId": 1,
        "name": "Brunch",
        "description": "Combine the best of breakfast and lunch with our brunch menu, perfect for a leisurely weekend meal."
      },
      {
        "restaurantId": 1,
        "name": "Happy Hour",
        "description": "Join us for happy hour and enjoy specially crafted drinks and appetizers at discounted prices."
      },
      {
        "restaurantId": 1,
        "name": "Dessert",
        "description": "End your meal on a sweet note with our tempting dessert menu, featuring decadent treats for every palate."
      },
      {
        "restaurantId": 1,
        "name": "Vegetarian Delights",
        "description": "Discover the flavors of our vegetarian menu, where plant-based ingredients take center stage in every dish."
      },
      {
        "restaurantId": 1,
        "name": "Seafood Extravaganza",
        "description": "Immerse yourself in a seafood feast with our special menu showcasing the freshest catches and culinary expertise."
      },
      {
        "restaurantId": 1,
        "name": "Cocktail Hour",
        "description": "Unwind with style during cocktail hour, featuring a curated selection of expertly crafted cocktails."
      },
      {
        "restaurantId": 1,
        "name": "Late-Night Bites",
        "description": "Satisfy your late-night cravings with our menu of delicious bites, perfect for a midnight snack."
      }
    ]}
    
  )
  console.log('created menu', menus.count)

  const menuItems = await prisma.menuItem.createMany({
    data:[


          {
            "menuId":1,
            "name": "Classic Pancakes",
            "description": "Fluffy pancakes served with maple syrup and a choice of fresh fruits.",
            "price": 12.50
          },
          {
            "menuId":1,
            "name": "Avocado Toast",
            "description": "Sliced avocado on toasted whole-grain bread, topped with cherry tomatoes and a poached egg.",
            "price": 15.75
          },
          {
            "menuId":1,
            "name": "French Toast Delight",
            "description": "Thick slices of brioche dipped in a cinnamon-infused batter, topped with powdered sugar.",
            "price": 14.25
          }
 
      ,


          {
            "menuId":2,
            "name": "Chicken Caesar Salad",
            "description": "Grilled chicken breast, crisp romaine lettuce, cherry tomatoes, and parmesan cheese tossed in Caesar dressing.",
            "price": 18.50
          },
          {
            "menuId":2,
            "name": "Mushroom Truffle Risotto",
            "description": "Creamy risotto with wild mushrooms, truffle oil, and Parmigiano-Reggiano cheese.",
            "price": 22.00
          },
          {
            "menuId":2,
            "name": "Caprese Panini",
            "description": "Fresh mozzarella, ripe tomatoes, and basil pesto pressed between slices of artisanal bread.",
            "price": 16.75
          }
    
      ,
          {
               "menuId":3,
            "name": "Grilled Salmon Fillet",
            "description": "Juicy salmon fillet seasoned and grilled to perfection, served with lemon herb butter.",
            "price": 28.50
          },
          {
               "menuId":3,
            "name": "Filet Mignon",
            "description": "Tender beef filet, cooked to your preference, accompanied by a red wine reduction sauce.",
            "price": 34.75
          },
          {
               "menuId":3,
            "name": "Vegetarian Stuffed Bell Peppers",
            "description": "Bell peppers stuffed with a savory mix of quinoa, black beans, corn, and spices.",
            "price": 19.00
          }

      ,

          {
               "menuId":4,
            "name": "Eggs Benedict",
            "description": "Poached eggs on English muffins with Canadian bacon, topped with hollandaise sauce.",
            "price": 16.50
          },
          {
               "menuId":4,
            "name": "Belgian Waffle Tower",
            "description": "Stacked Belgian waffles with layers of whipped cream, berries, and drizzled maple syrup.",
            "price": 19.25
          },
          {
               "menuId":4,
            "name": "Shakshuka",
            "description": "A Middle Eastern dish of poached eggs in a spicy tomato and bell pepper sauce.",
            "price": 17.75
          }
        ,


          {
               "menuId":5,
            "name": "Margarita Pizza",
            "description": "Classic pizza with tomato sauce, fresh mozzarella, and basil, perfect for sharing.",
            "price": 10.00
          },
          {
               "menuId":5,
            "name": "Crispy Calamari",
            "description": "Fried calamari rings served with a zesty aioli dipping sauce.",
            "price": 12.50
          },
          {
               "menuId":5,
            "name": "Signature Cocktail",
            "description": "Our special blend of spirits and flavors, crafted to perfection.",
            "price": 8.50
          }
        
      ,


          {
               "menuId":6,
            "name": "Chocolate Lava Cake",
            "description": "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
            "price": 13.00
          },
          {
               "menuId":6,
            "name": "Tiramisu",
            "description": "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
            "price": 11.75
          },
          {
               "menuId":6,
            "name": "Fruit Sorbet Trio",
            "description": "A refreshing trio of fruit sorbets: mango, raspberry, and lemon.",
            "price": 10.50
          }
        
      ,


          {
               "menuId":7,
            "name": "Stuffed Portobello Mushrooms",
            "description": "Portobello mushrooms stuffed with a savory mixture of spinach, feta, and breadcrumbs.",
            "price": 21.50
          },
          {
               "menuId":7,
            "name": "Quinoa and Roasted Vegetable Bowl",
            "description": "A hearty bowl of quinoa topped with roasted vegetables and a lemon tahini dressing.",
            "price": 18.75
          },
          {
               "menuId":7,
            "name": "Vegetarian Sushi Rolls",
            "description": "Assorted sushi rolls filled with avocado, cucumber, and pickled vegetables.",
            "price": 16.00
          }
        
      ,


          {
               "menuId":8,
            "name": "Lobster Bisque",
            "description": "Creamy lobster soup with a hint of sherry, garnished with lobster chunks.",
            "price": 26.00
          },
          {
               "menuId":8,
            "name": "Grilled Octopus Salad",
            "description": "Tender grilled octopus served over a bed of mixed greens with lemon vinaigrette.",
            "price": 29.50
          },
          {
               "menuId":8,
            "name": "Seafood Paella",
            "description": "A Spanish classic with a mix of shrimp, mussels, and clams over saffron-infused rice.",
            "price": 32.75
          }
        
      ,


          {
               "menuId":9,
            "name": "Spicy Jalapeño Margarita",
            "description": "A margarita with a kick, featuring fresh jalapeño slices for added spice.",
            "price": 9.00
          },
          {
               "menuId":9,
            "name": "Blueberry Mojito",
            "description": "A refreshing mojito with muddled blueberries, mint, and a splash of soda.",
            "price": 8.75
          },
          {
               "menuId":9,
            "name": "Cucumber Basil Martini",
            "description": "A sophisticated martini infused with the crisp flavors of cucumber and basil.",
            "price": 10.50
          }
        
      ,
      


          {
               "menuId":10,
            "name": "Truffle Fries",
            "description": "Crispy fries tossed in truffle oil and sprinkled with parmesan cheese.",
            "price": 10.25
          },
          {
               "menuId":10,
            "name": "Buffalo Chicken Sliders",
            "description": "Mini sliders with spicy buffalo chicken, blue cheese dressing, and pickles.",
            "price": 12.00
          },
          {
               "menuId":10,
            "name": "Chocolate Chip Cookie Dough Bites",
            "description": "Bite-sized pieces of chocolate chip cookie dough, perfect for a sweet late-night treat.",
            "price": 11.00
          }]
        
      
    
    
  });
  console.log("menu item added: ", menuItems.count)
}








main().then(() => prisma.$disconnect()).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})