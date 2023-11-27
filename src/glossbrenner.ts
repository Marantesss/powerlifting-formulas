import { malone, schwartz } from "./schwartz-malone"
import { Formula, Gender, Mass } from "./types"
import { format, toKilograms } from "./utils"
import { wilksCoefficient } from "./wilks"

export const glossbrennerMen = (bodyweightkg: number): number => {
  // Glossbrenner is defined piecewise.
  if (bodyweightkg < 153.05) {
      return (schwartz(bodyweightkg) + wilksCoefficient(bodyweightkg, 'male')) / 2.0
  } else {
    // Linear coefficients found by fitting to a table.
    const A = -0.000821668402557;
    const B = 0.676940740094416;
    return (schwartz(bodyweightkg) + A * bodyweightkg + B) / 2.0
  }
}

export const glossbrennerWoman = (bodyweightkg: number): number => {
  // Glossbrenner is defined piecewise.
  if (bodyweightkg < 106.3) {
      return (malone(bodyweightkg) + wilksCoefficient(bodyweightkg, 'female')) / 2.0
  } else {
      // Linear coefficients found by fitting to a table.
      const A = -0.000313738002024;
      const B = 0.852664892884785;
      return (malone(bodyweightkg) + A * bodyweightkg + B) / 2.0
  }
}

/**
 * Glossbrenner is the average of two older systems, Schwartz-Malone and Wilks, with a piecewise linear section
 * 
 * This points system is most often used by GPC affiliates.
 */
export const glossbrenner: Formula = (weight: number, total: number, gender: Gender, mass: Mass = 'kg'): number => {
  const _total = mass === 'kg' ? total : toKilograms(total)
  const _weight = mass === 'kg' ? weight : toKilograms(weight)

  const _coefficient = gender === 'male'
    ? glossbrennerMen(_weight)
    : glossbrennerWoman(_weight)

  return format(_total * _coefficient)
}