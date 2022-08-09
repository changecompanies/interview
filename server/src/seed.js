const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.product.create({
    data: 
      {name:"Book on Ideas", description:"A book with many ideas."} 
  })
  await prisma.product.create({
    data: 
    {"name":"Brochure on Cooking", "description":"A borchure about cooking"},
  })
}

module.exports = main
