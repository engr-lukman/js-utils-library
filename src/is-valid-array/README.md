# isValidArray

A utility function to check if a value is a valid array.

## Description

The `isValidArray` function determines whether the given value is a valid array by checking if it's not null and is an instance of Array.

## Usage

```javascript
import { isValidArray } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/is-valid-array/index.js";

// Valid arrays
console.log(isValidArray([]));              // true
console.log(isValidArray([1, 2, 3]));       // true
console.log(isValidArray(["a", "b"]));      // true
console.log(isValidArray(new Array(5)));    // true

// Invalid arrays
console.log(isValidArray(null));            // false
console.log(isValidArray(undefined));       // false
console.log(isValidArray({}));              // false
console.log(isValidArray("array"));         // false
console.log(isValidArray(123));             // false
```

## Parameters

- `data` (any): The value to check

## Returns

- `boolean`: `true` if the value is a valid array, `false` otherwise

## Notes

- More specific than just `Array.isArray()` as it also checks for null
- Useful for validating function parameters that expect arrays
- Returns false for null, undefined, objects, strings, and other non-array types
- Safe to use before array operations like `.length`, `.map()`, etc.
