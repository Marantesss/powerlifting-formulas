import { Formula, Gender, Mass } from "./types"
import { coefficient, format, toKilograms } from "./utils"

type Coefficients = { [key in Gender]: [number, number, number, number, number] }

const COEFFICIENTS: Coefficients = {
  male: [-307.75076, 24.0900756, -0.1918759221, 7.391293e-4, -1.093e-6],
  female: [-57.96288, 13.6175032, -0.1126655495, 5.158568e-4, -1.0706e-6],
}

export const dots: Formula = (weight: number, total: number, gender: Gender, mass: Mass = 'kg'): number => {
  const _total = mass === 'kg' ? total : toKilograms(total)
  const _weight = mass === 'kg' ? weight : toKilograms(weight)

  return format(_total * coefficient(500, _weight, COEFFICIENTS[gender]))
}
