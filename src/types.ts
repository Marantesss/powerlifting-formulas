export type Gender = 'male' | 'female'
export type Mass = 'kg' | 'lb'
export type Formula = (weight: number, total: number, gender: Gender, mass?: Mass) => number