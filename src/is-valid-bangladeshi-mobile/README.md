# isValidBangladeshiMobileNumber

A utility function to validate Bangladeshi mobile phone numbers.

## Description

The `isValidBangladeshiMobileNumber` function validates mobile phone numbers according to Bangladeshi mobile number format standards.

## Usage

```javascript
import { isValidBangladeshiMobileNumber } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/is-valid-bangladeshi-mobile/index.js";

// Valid Bangladeshi mobile numbers
console.log(isValidBangladeshiMobileNumber("01712345678"));    // true
console.log(isValidBangladeshiMobileNumber("01812345678"));    // true
console.log(isValidBangladeshiMobileNumber("01912345678"));    // true
console.log(isValidBangladeshiMobileNumber("8801712345678"));  // true
console.log(isValidBangladeshiMobileNumber("+8801712345678")); // true

// Invalid mobile numbers
console.log(isValidBangladeshiMobileNumber("01012345678"));    // false (010 not valid)
console.log(isValidBangladeshiMobileNumber("017123456"));      // false (too short)
console.log(isValidBangladeshiMobileNumber("017123456789"));   // false (too long)
console.log(isValidBangladeshiMobileNumber("02123456789"));    // false (doesn't start with 01)
console.log(isValidBangladeshiMobileNumber(""));              // false (empty)
console.log(isValidBangladeshiMobileNumber(null));            // false (null)
```

## Parameters

- `mobileNumber` (string): The mobile number to validate

## Returns

- `boolean`: `true` if valid Bangladeshi mobile number, `false` otherwise

## Valid Format

- **Pattern**: `01[3-9]XXXXXXXX`
- **Length**: 11 digits
- **Operators**: 013, 014, 015, 016, 017, 018, 019
- **Country Code**: Optional +88 or 88 prefix

## Supported Operators

- **013**: Grameenphone
- **014**: Banglalink  
- **015**: Teletalk
- **016**: Airtel
- **017**: Grameenphone
- **018**: Robi
- **019**: Banglalink

## Notes

- Accepts numbers with or without country code (+88 or 88)
- Returns false for null, undefined, or empty strings
- Only validates format, not if the number is actually active
