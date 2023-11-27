# Powerlifting Formulas

Check [this article](https://www.taylorsstrength.co.uk/powerlifting-formulas-is-wilks-best-and-what-are-the-alternatives/) to learn more about formulas.

Formulas were heavily inspired on [OpenPowerlifting Coefficients Crate](https://github.com/sstangl/openpowerlifting/tree/main/crates/coefficients/src)

## Getting started

Install this package with you favorite package manager

```bash
npm install powerlifting-formulas
yarn add powerlifting-formulas
pnpm install powerlifting-formulas
```

Then use it like so:

```ts
import { wilks } from 'powerlifting-formulas'

// calculate wilks for 82.5kg male lifer with 680kg lifted
wilks(82.5, 680, 'male') // default is kg
// calculate wilks for 120lbs female lifer with 425lbs lifted
wilks(120, 425, 'female', 'lb')
```

## Formulas

All formulas have the same signature:

```ts
export type Formula = (weight: number, total: number, gender: 'male' | 'female', mass?: 'kg' | 'lb') => number
```

### Wilks before 2020

```ts
import { wilks } from 'powerlifting-formulas'

wilks(82.5, 680, 'male')
wilks(120, 425, 'female', 'lb')
```

### Wilks After 2020

```ts
import { wilks2020 } from 'powerlifting-formulas'

wilks2020(82.5, 680, 'male')
wilks2020(120, 425, 'female', 'lb')
```

### DOTS

```ts
import { dots } from 'powerlifting-formulas'

dots(82.5, 680, 'male')
dots(120, 425, 'female', 'lb')
```

### Reshel

**⚠️ WARNING ⚠️** Reshel might be a bit off. At worst, it is off by about six Reshel points (0.01), affecting middleweights.

```ts
import { reshel } from 'powerlifting-formulas'

reshel(82.5, 680, 'male')
reshel(120, 425, 'female', 'lb')
```

### Glossbrenner

```ts
import { glossbrenner } from 'powerlifting-formulas'

glossbrenner(82.5, 680, 'male')
glossbrenner(120, 425, 'female', 'lb')
```

### Schwartz-Malone

```ts
import { schwartzMalone } from 'powerlifting-formulas'

schwartzMalone(82.5, 680, 'male')
schwartzMalone(120, 425, 'female', 'lb')
```

