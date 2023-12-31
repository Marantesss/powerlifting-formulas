import { Formula, Gender, Mass } from "../src/types"
import { malone, schwartz, schwartzmalone } from "../src/schwartz-malone"
import { describe, expect, it } from "vitest"
import { toKilograms } from "../src/utils"

describe('schwartz-malone', () => {
  type TestInputData = {
    weight: number
    total: number
    gender: Gender
    mass?: Mass
    expected: ReturnType<Formula>
  }

  describe('schwartz', () => {
    const data: [number, number][] = [
      [toKilograms(94), 1.2124],
      [toKilograms(110), 0.9991],
      [toKilograms(162), 0.6753],
      [toKilograms(220), 0.5545],
      // second piece (bounded by 136kg)
      [toKilograms(288), 0.5142],
      // third piece (bounded by 146kg)
      [toKilograms(316), 0.4998],
      // fourth piece (bounded by 156kg)
      [toKilograms(337), 0.4901],
      [toKilograms(343), 0.4874],
      // third piece (bounded by 166kg)
      [toKilograms(344), 0.4870],
      [toKilograms(345), 0.4866],
      [toKilograms(346), 0.4862],
      [toKilograms(347), 0.4858],
      [toKilograms(348), 0.4854],
    ]

    it.each(data)('%f KG matches %f table value', (weight, tableValue) => {
      /// Tests whether two floating-point numbers are equal to 4 decimal places,
      /// as published in the official Schwartz coefficient tables.
      const schwartzCoefficient = Math.round(schwartz(weight) * 10_000)
      const tableCoefficient = Math.round(tableValue * 10_000)
      expect(schwartzCoefficient).toEqual(tableCoefficient)
    })
  })

  describe('malone', () => {
    const data: [number, number][] = [
      [100, 0.597914296471229]
    ]

    it.each(data)('%f KG matches %f coefficient', (weight, coefficient) => {
      expect(malone(weight)).toEqual(coefficient)
    })
  })

  describe('schwartz-malone', () => {
    const data: TestInputData[] = [
      { weight: 93, total: 500, gender: 'male', mass: 'kg', expected: 287.15 },
      { weight: 74, total: 500, gender: 'female', mass: 'kg', expected: 364.40 },
    ]
  
    it.each(data)('$gender with $weight $mass lifted $total $mass', ({ weight, total, gender, mass, expected}) => {
      expect(schwartzmalone(weight, total, gender, mass)).toBe(expected)
    })
  })

  
})