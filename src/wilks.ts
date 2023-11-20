import { Formula, Gender, Mass } from "./types"
import { coefficient, format, toKilograms } from "./utils"

type Coefficients = { [key in Gender]: [number, number, number, number, number, number] }

const COEFFICIENTS_ORIGINAL: Coefficients = {
  male: [-216.0475144, 16.2606339, -0.002388645, -0.00113732, 7.01863e-6, -1.291e-8],
  female: [594.31747775582, -27.23842536447, 0.82112226871, -0.00930733913, 4.731582e-5, -9.054e-8]
}

export const wilks: Formula = (weight: number, total: number, gender: Gender, mass: Mass = 'kg'): number => {
  const _total = mass === 'kg' ? total : toKilograms(total)
  const _weight = mass === 'kg' ? weight : toKilograms(weight)

  return format(_total * coefficient(500, _weight, COEFFICIENTS_ORIGINAL[gender]))
}

const COEFFICIENTS_2020: Coefficients = {
  male: [47.46178854, 8.472061379, 0.07369410346, -0.001395833811, 7.07665973070743e-6, -1.208043364823153e-8],
  female: [-125.4255398, 13.71219419, -0.03307250631, -0.001050400051, 9.38773881462799e-6, -2.3334613884954e-8]
}

export const wilks2020: Formula = (weight: number, total: number, gender: Gender, mass: Mass = 'kg'): number => {
  const _total = mass === 'kg' ? total : toKilograms(total)
  const _weight = mass === 'kg' ? weight : toKilograms(weight)

  return format(_total * coefficient(600, _weight, COEFFICIENTS_2020[gender]))
}
