const assert = require('assert')
const appService = require('../src/appService.js')

async function getProductById() {
  const result = await appService.getProductById(1)
  return await Promise.all([
    assert.ok(result.name),
    assert.ok(result.description),
    assert.ok(result.id)
  ]).then(test => console.log(test))
}

async function getProducts() {
  const result = await appService.getProducts()
  return await assert.ok(result?.length > 0)
}

async function suite(tests) {
  try {
    const results = await Promise.allSettled(tests)
    console.log(results)
  } catch(err) {
    console.error(err)
  }
}

suite([getProducts(), getProductById()])
