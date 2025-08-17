# isObject

A utility function to check if a value is a plain object.

## Description

The `isObject` function determines whether the given value is a plain object (not an array, null, or primitive type).

## Usage

```javascript
import { isObject } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/is-object/index.js";

// Examples
console.log(isObject({}));              // true
console.log(isObject({ name: "John" })); // true
console.log(isObject([]));              // false
console.log(isObject(null));            // false
console.log(isObject("string"));        // false
console.log(isObject(123));             // false
console.log(isObject(undefined));       // false
```

## Parameters

- `objData` (any): The value to check

## Returns

- `boolean`: `true` if the value is a plain object, `false` otherwise

## Notes

- Returns `false` for arrays, null, and primitive types
- Returns `true` only for plain objects
- Useful for type checking and validation
