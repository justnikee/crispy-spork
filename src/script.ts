import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
  const newNote = await prisma.note.create({
      data: {
      title: 'Alice',
      content: 'alice@prisma.io',
    },
  })
  console.log(newNote)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })