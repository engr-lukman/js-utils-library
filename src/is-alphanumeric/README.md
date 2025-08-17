# isAlphanumeric

A utility function to validate alphanumeric strings with spaces and hyphens.

## Description

The `isAlphanumeric` function checks if a string contains only letters (a-z, A-Z), numbers (0-9), spaces, and hyphens.

## Usage

```javascript
import { isAlphanumeric } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/is-alphanumeric/index.js";

// Valid strings
console.log(isAlphanumeric("Hello123"));        // true
console.log(isAlphanumeric("John Doe"));         // true
console.log(isAlphanumeric("user-name"));        // true
console.log(isAlphanumeric("ABC 123-XYZ"));      // true
console.log(isAlphanumeric("Product123"));       // true

// Invalid strings
console.log(isAlphanumeric("hello@world"));      // false (contains @)
console.log(isAlphanumeric("test_case"));        // false (contains _)
console.log(isAlphanumeric("price$100"));        // false (contains $)
console.log(isAlphanumeric("user.name"));        // false (contains .)
console.log(isAlphanumeric(""));                 // false (empty string)
```

## Parameters

- `str` (string): The string to validate

## Returns

- `boolean`: `true` if string contains only allowed characters, `false` otherwise

## Allowed Characters

- Letters: a-z, A-Z
- Numbers: 0-9
- Space character
- Hyphen (-)

## Notes

- Useful for validating usernames, product names, or display names
- Does not allow special characters except space and hyphen
- Returns false for empty strings
- Case-insensitive for letters
