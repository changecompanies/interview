const express = require('express')
const seed = require('./seed')

const app = express()

app.listen(5221, async () => {
  console.log('Server is running on port 5221')
  try {
    console.log('Seeding Database')
    await seed()
  } catch(err) {
    console.error(err)
  } finally {
    console.log('Seed Finished')
  }
})


