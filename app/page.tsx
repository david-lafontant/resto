import { prisma } from '@/lib/prisma';

export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, {user?.name}</h1>
    </main>
  );
}
