import { prisma } from '@/lib/prisma';

export default async function Home() {
  const user = await prisma.user.findFirst();
  const restaurant = await prisma.restaurant.findFirst()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, {user?.name}</h1>
      <p> I am eating at {restaurant?.name}</p>
    </main>
  );
}
