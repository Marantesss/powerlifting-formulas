import { dots } from "../src"
import { Formula, Gender, Mass } from "../src/types"

describe('Dots', () => {
  type TestInputData = {
    weight: number
    total: number
    gender: Gender
    mass?: Mass
    expected: ReturnType<Formula>
  }

  const data: TestInputData[] = [
    { weight: 75, total: 500, gender: 'male', mass: 'kg', expected: 358.71 },
    { weight: 165, total: 1200, gender: 'male', mass: 'lb', expected: 391.03 },
    { weight: 75, total: 500, gender: 'female', mass: 'kg', expected: 486.99 },
    { weight: 165, total: 1200, gender: 'female', mass: 'lb', expected: 530.74 },
  ]

  it.each(data)('$gender with $weight $mass lifted $total $mass', ({ weight, total, gender, mass, expected}) => {
    expect(dots(weight, total, gender, mass)).toBe(expected)
  })
})