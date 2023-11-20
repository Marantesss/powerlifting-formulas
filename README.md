# Powerlifting Formulas

Check [this article](https://www.taylorsstrength.co.uk/powerlifting-formulas-is-wilks-best-and-what-are-the-alternatives/) to learn more about formulas.

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

// calculate OLD wilks formula for 82.5kg male lifer with 680kg lifted
wilks(82.5, 680, 'male')
// calculate new wilks formula for 120lbs female lifer with 425lbs lifted
wilks(120, 425, 'female', 'lb')
```

## Formulas

### Wilks before 2020

```ts
import { wilks } from 'powerlifting-formulas'

// calculate OLD wilks formula for 82.5kg male lifer with 680kg lifted
wilks(82.5, 680, 'male')
// calculate new wilks formula for 120lbs female lifer with 425lbs lifted
wilks(120, 425, 'female', 'lb')
```

### Wilks After 2020

```ts
import { wilks2020 } from 'powerlifting-formulas'

// calculate OLD wilks formula for 82.5kg male lifer with 680kg lifted
wilks2020(82.5, 680, 'male')
// calculate new wilks formula for 120lbs female lifer with 425lbs lifted
wilks2020(120, 425, 'female', 'lb')
```

### DOTS

```ts
import { dots } from 'powerlifting-formulas'

// calculate OLD wilks formula for 82.5kg male lifer with 680kg lifted
dots(82.5, 680, 'male')
// calculate new wilks formula for 120lbs female lifer with 425lbs lifted
dots(120, 425, 'female', 'lb')
```

