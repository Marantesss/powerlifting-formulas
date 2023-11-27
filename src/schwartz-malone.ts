import { Formula, Gender, Mass } from "./types"
import { clamp, format, toKilograms } from "./utils"

/**
Calculates the Schwartz coefficient, used for men.

The Schwartz formula replaced the Hoffman formula.
Schwartz was proposed around February 1971.

The exact formula was found in the magazine Powerlifting USA,
Vol.6, No.2, August 1982, on page 61. That text is reproduced below:

Computerized Schwartz Formula...Dr. Lyle Schwartz has often been
asked for a means by which the formula he has given Powerlifting can be
programmed into a computer or a hand held calculator with sufficient
memory. To obtain the Schwartz Formula (SF) for bodyweights (BW)
- between 40 and 126 kg, the expression is:
  SF = 0.631926 exp(+01) - 0.262349 exp(+00) (BW) + 0.511550 exp(-02) (BW)^2 - 0.519738 exp(-04) (BW)^3 + 0.267626 exp(-06) (BW)^4 - 0.540132 exp(-09) (BW)^5 - 0.728875 exp(-13) (BW)^6.

For higher bodyweights, the following simple formulae are used:
- for BW 126-136:
  SF = 0.5210-0.0012 (BW - 125)
- for BW 136-146:
  SF = 0.5090-0011 (BW - 135)
- for BW 146-156:
  SF = 0.4980-0.0010 (BW - 145)
- and for BW 156-166:
  SF = 0.4880-0.0090 (BW - 156)

Schwartz is quoted as saying about the formula's development,

"Since powerlifting was still a young sport in the early 1970s
there was uneven development in the three lifts on the part of most
self-trained athletes. I compensated for such unevenness by creating
artificial 'best' totals by adding together the current records in the
individual lifts. A 'best' total would have been achieved by that ideal
lifter who could match the best performances to date in all three
powerlifts. Then I fitted these data to an artificial curve and picked
off numbers from the curve."
 */
export const schwartz = (weightKG: number): number => {
  const _weight = clamp(weightKG, 40, 166)

  if (_weight <= 126) {
    const x0 = 0.631926e1;
    const x1 = 0.262349e0 * _weight;
    const x2 = 0.511550e-2 * Math.pow(_weight, 2);
    const x3 = 0.519738e-4 * Math.pow(_weight, 3);
    const x4 = 0.267626e-6 * Math.pow(_weight, 4);
    const x5 = 0.540132e-9 * Math.pow(_weight, 5);
    const x6 = 0.728875e-13 * Math.pow(_weight, 6);
    return x0 - x1 + x2 - x3 + x4 - x5 - x6
  } else if (_weight <= 136) {
    return 0.5210 - 0.0012 * (_weight - 125.0)
  } else if (_weight <= 146) {
    return 0.5090 - 0.0011 * (_weight - 135.0)
  } else if (_weight <= 156) {
    return 0.4980 - 0.0010 * (_weight - 145.0)
  } else {
    return 0.4879 - 0.00088185 * (_weight - 155.0)
  }
}

/**
 * Calculates the Malone coefficient, used for women.
 */
export const malone = (weightKG: number): number => {
  return weightKG
}

export const schwartzmalone: Formula = (weight: number, total: number, gender: Gender, mass: Mass = 'kg'): number => {
  const _total = mass === 'kg' ? total : toKilograms(total)
  const _weight = mass === 'kg' ? weight : toKilograms(weight)

  const _coefficient = gender === 'male'
    ? schwartz(_weight)
    : malone(_weight)

  return format(_total * _coefficient)
}