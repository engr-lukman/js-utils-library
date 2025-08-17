# randomNumber

A utility function to generate random numbers within a specified range.

## Description

The `randomNumber` function generates a random integer within a specified range using Math.random().

## Usage

```javascript
import { randomNumber } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/random-number/index.js";

// Default range (1 to 9999999)
console.log(randomNumber());              // e.g., 5847293

// Custom range
console.log(randomNumber(1, 10));         // Random number 1-9
console.log(randomNumber(10, 100));       // Random number 10-99
console.log(randomNumber(0, 5));          // Random number 0-4

// Use cases
const diceRoll = randomNumber(1, 7);      // 1-6
const randomId = randomNumber(1000, 10000); // 4-digit ID
const randomIndex = randomNumber(0, array.length); // Array index
```

## Parameters

- `start` (number, default: 1): The minimum value (inclusive)
- `end` (number, default: 10000000): The maximum value (exclusive)

## Returns

- `number`: A random integer between start (inclusive) and end (exclusive)

## Range Behavior

- **Inclusive start**: The start value can be included in the result
- **Exclusive end**: The end value will never be included in the result
- **Formula**: `Math.floor(Math.random() * (end - start)) + start`

## Notes

- Uses the correct formula for range generation
- Generates numbers from `start` to `end - 1`
- Perfect for array indices, dice rolls, and random IDs
- Not cryptographically secure - use `crypto.getRandomValues()` for security-critical applications
