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
}

main().then(() => prisma.$disconnect()).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})