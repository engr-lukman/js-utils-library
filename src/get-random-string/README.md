# getRandomString

A utility function to generate random alphanumeric strings.

## Description

The `getRandomString` function generates a random string consisting of uppercase letters, lowercase letters, and numbers with a specified length.

## Usage

```javascript
import { getRandomString } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/get-random-string/index.js";

// Generate default 32-character string
console.log(getRandomString());
// Output: "a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6"

// Generate custom length strings
console.log(getRandomString(8));   // "aB3cD7eF"
console.log(getRandomString(16));  // "x9Y2z8A4b6C1d3E5"
console.log(getRandomString(64));  // Very long random string

// Use cases
const sessionId = getRandomString(32);
const tempPassword = getRandomString(12);
const uniqueFileName = `file_${getRandomString(8)}.txt`;
```

## Parameters

- `length` (number, default: 32): The length of the random string to generate

## Returns

- `string`: A random alphanumeric string of the specified length

## Character Set

The function uses the following characters:
- Uppercase letters: A-Z (26 characters)
- Lowercase letters: a-z (26 characters)  
- Numbers: 0-9 (10 characters)
- Total: 62 possible characters

## Notes

- Each character is randomly selected from the 62-character set
- Suitable for generating session IDs, temporary passwords, or unique identifiers
- Not cryptographically secure - use `crypto.getRandomValues()` for security-critical applications
- Always returns a string of exactly the specified length
