# parseNumeric

A utility function to validate and parse numeric strings.

## Description

The `parseNumeric` function checks if a given value is a valid numeric string (contains only digits) and returns the value if valid, otherwise returns an empty string.

## Usage

```javascript
import { parseNumeric } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/parse-numeric/index.js";

// Examples
console.log(parseNumeric("123"));     // "123"
console.log(parseNumeric("12a"));     // ""
console.log(parseNumeric(""));        // ""
console.log(parseNumeric(null));      // ""
console.log(parseNumeric("0"));       // "0"
```

## Parameters

- `value` (string): The value to parse and validate

## Returns

- `string`: The original value if it contains only digits, otherwise an empty string

## Notes

- Only accepts strings containing digits (0-9)
- Returns empty string for invalid inputs
- Useful for form validation and input sanitization
