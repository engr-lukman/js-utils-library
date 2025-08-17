# formatToCurrency

A utility function to format numbers as Bangladeshi Taka currency.

## Description

The `formatToCurrency` function formats numeric values into Bangladeshi Taka (৳) currency format with optional decimal places and thousand separators.

## Usage

```javascript
import { formatToCurrency } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/format-to-currency/index.js";

// Examples with decimal formatting (default)
console.log(formatToCurrency(1000));        // "৳ 1,000.00"
console.log(formatToCurrency(1234.56));     // "৳ 1,234.56"
console.log(formatToCurrency("2500"));      // "৳ 2,500.00"

// Examples without decimal formatting
console.log(formatToCurrency(1000, false)); // "৳ 1000"
console.log(formatToCurrency("250", false)); // "৳ 250"

// Invalid inputs
console.log(formatToCurrency(""));          // null
console.log(formatToCurrency(null));        // null
console.log(formatToCurrency("abc"));       // null
```

## Parameters

- `amount` (string|number, default: ""): The amount to format
- `isToFixed` (boolean, default: true): Whether to format with 2 decimal places and thousand separators

## Returns

- `string|null`: Formatted currency string with ৳ symbol, or null for invalid input

## Notes

- Uses Bangladeshi Taka (৳) symbol
- When `isToFixed` is true, formats to 2 decimal places with thousand separators
- When `isToFixed` is false, returns simple format without decimal places
- Returns null for empty, null, undefined, or non-numeric values
