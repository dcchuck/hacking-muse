import assert from 'node:assert'
import test, { describe, it } from 'node:test'

import {
  generateCombinations,
  NOT_ENOUGH_INPUT_ELEMENTS_MESSAGE } from './generate-combinations'

describe('generateCombinations', () => {
  it('creates all necessary combos', () => {
    const example0 = [1,2,3]
    const result0 = generateCombinations(example0, 1)
    assert.equal(result0.length, 3)

    const example1 = [1,2,3]
    const result1 = generateCombinations(example1, 3)
    assert.equal(result1.length, 1)

    const example2 = [1,2,3,4,5,6]
    const result2 = generateCombinations(example2, 2)
    assert.equal(result2.length, 15)

    const example3 = [1,2,3,4,5,6,7,8,9,0]
    const result3 = generateCombinations(example3, 2)
    assert.equal(result3.length, 45)
  })

  it('returns an empty set for an out of bounds query', () => {
    assert.equal(generateCombinations([1],2).length, 0)
  })
})

