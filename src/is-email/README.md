# isEmail

A utility function to validate email address format.

## Description

The `isEmail` function validates whether a string matches a valid email address format using regular expression pattern matching.

## Usage

```javascript
import { isEmail } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/is-email/index.js";

// Valid email addresses
console.log(isEmail("user@example.com"));           // true
console.log(isEmail("john.doe@company.org"));       // true
console.log(isEmail("test-email@domain.co.uk"));    // true
console.log(isEmail("user123@test.io"));            // true

// Invalid email addresses
console.log(isEmail("invalid-email"));              // false
console.log(isEmail("user@"));                      // false
console.log(isEmail("@domain.com"));               // false
console.log(isEmail("user..double@domain.com"));   // false
console.log(isEmail("user@domain"));               // false
console.log(isEmail(""));                          // false
```

## Parameters

- `email` (string, default: ""): The email address to validate

## Returns

- `boolean`: `true` if the email format is valid, `false` otherwise

## Validation Pattern

The function validates:
- Username part: `\w+([.-]?\w+)*`
  - Starts with word characters
  - Can contain dots or hyphens (not consecutive)
- @ symbol separator
- Domain part: `\w+([.-]?\w+)*`
  - Domain name with optional dots/hyphens
- TLD part: `(\.\w{2,3})+`
  - At least one dot followed by 2-3 characters

## Notes

- Uses a simplified regex pattern for common email formats
- May not catch all edge cases of RFC 5322 specification
- Suitable for most web application validation needs
- Returns false for empty strings by default
