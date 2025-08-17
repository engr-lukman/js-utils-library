# camelCaseToKebabCase

A utility function to convert camelCase strings to kebab-case.

## Description

The `camelCaseToKebabCase` function converts camelCase formatted strings to kebab-case (also known as dash-case) by inserting hyphens before uppercase letters and converting everything to lowercase.

## Usage

```javascript
import { camelCaseToKebabCase } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/camel-case-to-kebab-case/index.js";

// Basic conversions
console.log(camelCaseToKebabCase("camelCase"));        // "camel-case"
console.log(camelCaseToKebabCase("backgroundColor"));  // "background-color"
console.log(camelCaseToKebabCase("fontSize"));         // "font-size"
console.log(camelCaseToKebabCase("marginTop"));        // "margin-top"

// Multiple words
console.log(camelCaseToKebabCase("borderTopWidth"));   // "border-top-width"
console.log(camelCaseToKebabCase("textAlignCenter"));  // "text-align-center"

// With numbers
console.log(camelCaseToKebabCase("grid2Column"));      // "grid2-column"
console.log(camelCaseToKebabCase("fontSize14"));       // "font-size14"

// CSS properties conversion
const cssProperties = {
  backgroundColor: "blue",
  marginTop: "10px",
  borderRadius: "5px"
};

const kebabCSS = Object.fromEntries(
  Object.entries(cssProperties).map(([key, value]) => [
    camelCaseToKebabCase(key), 
    value
  ])
);
// Result: { "background-color": "blue", "margin-top": "10px", "border-radius": "5px" }
```

## Parameters

- `str` (string): The camelCase string to convert

## Returns

- `string`: The converted kebab-case string

## Conversion Rules

1. Finds boundaries between lowercase/numbers and uppercase letters
2. Inserts a hyphen (-) at those boundaries
3. Converts the entire string to lowercase

## Use Cases

- **CSS Properties**: Convert JavaScript CSS properties to CSS syntax
- **HTML Attributes**: Convert camelCase to kebab-case for data attributes
- **URL Slugs**: Convert component names to URL-friendly formats
- **File Naming**: Convert camelCase to kebab-case for file names
- **API Endpoints**: Convert camelCase to kebab-case for REST endpoints

## Notes

- Only processes transitions from lowercase/numbers to uppercase
- Preserves existing hyphens and special characters
- Does not handle PascalCase starting with uppercase optimally
- Works well for standard JavaScript camelCase naming
