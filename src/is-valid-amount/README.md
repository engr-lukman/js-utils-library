# isValidAmount

A utility function to validate monetary amounts.

## Description

The `isValidAmount` function checks if a number is a valid monetary amount by ensuring it's a positive number with at most 2 decimal places.

## Usage

```javascript
import { isValidAmount } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/is-valid-amount/index.js";

// Valid amounts
console.log(isValidAmount(10));       // true
console.log(isValidAmount(10.5));     // true
console.log(isValidAmount(10.50));    // true
console.log(isValidAmount(100.99));   // true

// Invalid amounts
console.log(isValidAmount(0));        // false (not positive)
console.log(isValidAmount(-10));      // false (negative)
console.log(isValidAmount(10.123));   // false (more than 2 decimals)
console.log(isValidAmount("10"));     // false (not a number)
console.log(isValidAmount(NaN));      // false (NaN)
console.log(isValidAmount(null));     // false (null)
```

## Parameters

- `amount` (number): The amount to validate

## Returns

- `boolean`: `true` if the amount is a valid positive number with at most 2 decimal places, `false` otherwise

## Validation Rules

1. Must be a number type
2. Must not be NaN
3. Must be greater than 0
4. Must have at most 2 decimal places

## Notes

- Perfect for validating currency amounts
- Rejects string representations of numbers
- Useful for financial applications and form validation
- Follows standard monetary precision rules
