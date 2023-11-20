import { Formula, Gender, Mass } from "../src/types"
import { wilks, wilks2020 } from "../src/wilks"

describe('wilks', () => {

  type TestInputData = {
    weight: number
    total: number
    gender: Gender
    mass?: Mass
    expected: ReturnType<Formula>
  }

  describe('original', () => {
    const data: TestInputData[] = [
      { weight: 75, total: 500, gender: 'male', mass: 'kg', expected: 356.28 },
      { weight: 165, total: 1200, gender: 'male', mass: 'lb', expected: 388.42 },
      { weight: 75, total: 500, gender: 'female', mass: 'kg', expected: 475.32 },
      { weight: 165, total: 1200, gender: 'female', mass: 'lb', expected: 518.13 },
    ]

    it.each(data)('$gender with $weight $mass lifted $total $mass', ({ weight, total, gender, mass, expected}) => {
      expect(wilks(weight, total, gender, mass)).toBe(expected)
    })
  })

  describe('2020', () => {
    const data: TestInputData[] = [
      { weight: 75, total: 500, gender: 'male', mass: 'kg', expected: 426.28 },
      { weight: 165, total: 1200, gender: 'male', mass: 'lb', expected: 464.68 },
      { weight: 75, total: 500, gender: 'female', mass: 'kg', expected: 581.98 },
      { weight: 165, total: 1200, gender: 'female', mass: 'lb', expected: 634.18 },
    ]

    it.each(data)('$gender with $weight $mass lifted $total $mass', ({ weight, total, gender, mass, expected}) => {
      expect(wilks2020(weight, total, gender, mass)).toBe(expected)
    })
  })
})