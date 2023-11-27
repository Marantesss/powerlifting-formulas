import { Formula, Gender, Mass } from "./types"
import { clamp, format, toKilograms } from "./utils"

/**
 *  TODO: Improve the accuracy of this implementation. Shared with OpenLifter.
 *  This implementation uses a curve of best fit from GNUPlot.
 *  At worst, it is off by about six Reshel points (0.01), affecting middleweights.
 */
export const reshelCoefficientMen = (weightKg: number): number => {
    const A = 23740.8329088123;
    const B = -9.75618720662844;
    const C = 0.787990994925928;
    const D = -2.68445158813578;

    const _weight = clamp(weightKg, 50, 174.75);
    return A * (_weight + B) ** D + C
}

export const reshelCoefficientWomen = (weightKg: number): number => {
    const A = 239.894659799145;
    const B = -20.5105859285582;
    const C = 1.16052601684125;
    const D = -1.61417872668708;

    const _weight = clamp(weightKg, 40, 118.75);
    return A * (_weight + B) ** D + C
}

/**
 * Calculates Reshel points.
 * 
 * Reshel points are published only as [heavily-rounded coefficient tables](http://www.irondawg.com/reshel_formula.htm)
 * separately for men and women.
 */
export const reshel: Formula = (weight: number, total: number, gender: Gender, mass: Mass = 'kg'): number => {
  const _total = mass === 'kg' ? total : toKilograms(total)
  const _weight = mass === 'kg' ? weight : toKilograms(weight)

  const _coefficient = gender === 'male'
    ? reshelCoefficientMen(_weight)
    : reshelCoefficientWomen(_weight)

  return format(_total * _coefficient)
}