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
}








main().then(() => prisma.$disconnect()).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})