# getRandomHexColor

A utility function to generate random hexadecimal color codes.

## Description

The `getRandomHexColor` function generates a random 6-digit hexadecimal color code that can be used in CSS, HTML, or any application requiring color values.

## Usage

```javascript
import { getRandomHexColor } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/get-random-hex-color/index.js";

// Generate random colors
console.log(getRandomHexColor()); // "#3F7A2B"
console.log(getRandomHexColor()); // "#E8491D"
console.log(getRandomHexColor()); // "#9C35FF"

// Use in CSS
document.body.style.backgroundColor = getRandomHexColor();

// Generate color palette
const colorPalette = Array.from({length: 5}, () => getRandomHexColor());
console.log(colorPalette); // ["#A1B2C3", "#D4E5F6", "#789ABC", "#DEF012", "#345678"]

// Use in HTML
const element = document.getElementById("myDiv");
element.style.color = getRandomHexColor();
```

## Parameters

None

## Returns

- `string`: A random hexadecimal color code in the format "#RRGGBB"

## Color Format

- **Format**: 6-digit hexadecimal with # prefix
- **Characters**: 0-9 and A-F (uppercase)
- **Range**: #000000 (black) to #FFFFFF (white)
- **Total Colors**: 16,777,216 possible combinations

## Notes

- Each digit is randomly selected from 0-9 and A-F
- Always returns uppercase letters (A-F)
- Perfect for generating random theme colors or placeholders
- Can be used directly in CSS properties
- No duplicate checking - same color might be generated multiple times
