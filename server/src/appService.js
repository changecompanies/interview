const { Prisma, PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function getProducts(req, res, next) {
  return await prisma.product.findMany({
    where: {
      id: req.params.id
    }
  })
}


module.exports = { getProducts }
