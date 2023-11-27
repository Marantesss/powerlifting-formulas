import { Formula, Gender, Mass } from "../src/types"
import { reshel } from "../src/reshel"

describe('reshel', () => {

  type TestInputData = {
    weight: number
    total: number
    gender: Gender
    mass?: Mass
    expected: ReturnType<Formula>
  }

  const data: TestInputData[] = [
    { weight: 100.8, total: 677.5, gender: 'male', mass: 'kg', expected: 622.35 },
    { weight: 81.3, total: 522.5, gender: 'male', mass: 'kg', expected: 541.82 },
    { weight: 55.6, total: 297.5, gender: 'female', mass: 'kg', expected: 573.98 },
    { weight: 68.9, total: 350, gender: 'female', mass: 'kg', expected: 566.09 },
  ]

  it.each(data)('$gender with $weight $mass lifted $total $mass', ({ weight, total, gender, mass, expected}) => {
    expect(reshel(weight, total, gender, mass)).toBe(expected)
  })
})