const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const products = await prisma.product.createMany({
    data: [
      {"name":"Book on Ideas", "description":"A book with many ideas."},
      {"name":"Brochure on Cooking", "description":"A borchure about cooking"},
    ]
  })
  return products
}

module.exports = main
