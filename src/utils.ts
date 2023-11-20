export const toKilograms = (kilograms: number): number => kilograms / 2.2046

export const format = (value: number): number => Math.round(value * 100) / 100

export const coefficient = (dividend: number, weight: number, params: number[]) => 
    dividend / params.reduce((acc, cur, index) => acc + cur * Math.pow(weight, index), 0)
