import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

await prisma.restaurant.deleteMany({});

await prisma.restaurant.create({
  data: {
    id: 1,
    name: 'Restauracja nr1',
    address: 'syshu-street 23, 160199 Miasto',
    type: 'SUSHI',
  },
});

await prisma.restaurant.create({
  data: {
    id: 2,
    name: 'Restauracja nr2',
    address: '610 MEDANOS LOOP BAY POINT CA 94565-7840',
    type: 'FAST_FOOD',
  },
});
