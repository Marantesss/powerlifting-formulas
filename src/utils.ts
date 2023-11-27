const KG_POUNDS = 2.20462262

export const toKilograms = (pounds: number): number => pounds / KG_POUNDS

export const toPounds = (kilograms: number): number => kilograms * KG_POUNDS

export const format = (value: number): number => Math.round(value * 100) / 100

export const coefficient = (dividend: number, weight: number, params: number[]) => 
    dividend / params.reduce((acc, cur, index) => acc + cur * Math.pow(weight, index), 0)

export const clamp = (val: number, min: number, max: number): number => Math.min(Math.max(val, min), max)
