import { Formula, Gender, Mass } from "../src/types"
import { glossbrenner } from "../src/glossbrenner"

describe('glossbrenner', () => {

  type TestInputData = {
    weight: number
    total: number
    gender: Gender
    mass?: Mass
    expected: ReturnType<Formula>
  }

  const data: TestInputData[] = [
    { weight: 100, total: 1000, gender: 'male', mass: 'kg', expected: 581.27 },
    { weight: 60, total: 500, gender: 'female', mass: 'kg', expected: 492.53 },
  ]

  it.each(data)('$gender with $weight $mass lifted $total $mass', ({ weight, total, gender, mass, expected}) => {
    expect(glossbrenner(weight, total, gender, mass)).toBe(expected)
  })
})