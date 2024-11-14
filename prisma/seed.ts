import { PrismaClient } from "@prisma/client";
// import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // create todo
  // await prisma.todo.createMany({
  //   data: Array.from({length:5}, ()=>{
  //     return {
  //       title: faker.book.title(),
  //       body: faker.lorem.text(),
  //       completed:faker.datatype.boolean(),
  //       user_id:"jlkjljljl"
  //     }
  //   })
  // })
  // create users
  // await prisma.user.createMany({
  //   data: Array.from({length:20}, ()=>{
  //     return {
  //       name: faker.name.firstName(),
  //       email: faker.internet.email(),
  //     }
  //   })
  // })
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
