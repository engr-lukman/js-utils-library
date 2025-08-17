# JS Utils Library

A comprehensive JavaScript/TypeScript utility library for common web development tasks. Works seamlessly with Vue, React, or plain JavaScript projects.

## Quick Start

### CDN Usage (Recommended)

```javascript
// Import specific functions
import { allowNumbersAndDot, formatToCurrency, isEmail } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/index.js";

// Or import individual functions
import { parseNumeric } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/parse-numeric/index.js";
```

### Local Installation

```bash
# Clone the repository
git clone https://github.com/engr-lukman/js-utils-library.git

# Or download specific files as needed
```

## Available Functions

### Input Validation & Formatting
- **[allowNumbersAndDot](./src/allow-numbers-and-dot/README.md)** - Restrict input to numbers and dots only
- **[parseNumeric](./src/parse-numeric/README.md)** - Parse and validate numeric strings
- **[isValidAmount](./src/is-valid-amount/README.md)** - Validate monetary amounts
- **[formatToCurrency](./src/format-to-currency/README.md)** - Format numbers as Bangladeshi Taka currency

### Data Type Validation
- **[isObject](./src/is-object/README.md)** - Check if value is a plain object
- **[isValidArray](./src/is-valid-array/README.md)** - Validate if value is a valid array
- **[isEmail](./src/is-email/README.md)** - Validate email address format
- **[isAlphanumeric](./src/is-alphanumeric/README.md)** - Check for alphanumeric strings
- **[isValidBangladeshiMobileNumber](./src/is-valid-bangladeshi-mobile/README.md)** - Validate Bangladeshi mobile numbers

### Array & Object Utilities
- **[uniqueArrayOfObjects](./src/unique-array-of-objects/README.md)** - Filter unique objects from array
- **[objectToQueryString](./src/object-to-query-string/README.md)** - Convert object to URL query string

### Random Generators
- **[getRandomString](./src/get-random-string/README.md)** - Generate random alphanumeric strings
- **[randomNumber](./src/random-number/README.md)** - Generate random numbers in range
- **[getRandomHexColor](./src/get-random-hex-color/README.md)** - Generate random hex color codes

### DOM & Browser Utilities
- **[onCopyTableContent](./src/copy-table-content/README.md)** - Copy table content to clipboard
- **[isTrustedUserEvent](./src/is-trusted-user-event/README.md)** - Check if event is user-generated

### String Utilities
- **[camelCaseToKebabCase](./src/camel-case-to-kebab-case/README.md)** - Convert camelCase to kebab-case

### Async Utilities
- **[delay](./src/delay/README.md)** - Create promise-based delays

## Usage Examples

### Input Validation
```javascript
import { allowNumbersAndDot, isEmail, isValidAmount } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/index.js";

// Restrict input field to numbers and dots
document.getElementById('priceInput').addEventListener('keydown', allowNumbersAndDot);

// Validate email
if (isEmail("user@example.com")) {
  console.log("Valid email!");
}

// Validate amount
if (isValidAmount(10.50)) {
  console.log("Valid amount!");
}
```

### Data Processing
```javascript
import { uniqueArrayOfObjects, formatToCurrency, objectToQueryString } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/index.js";

// Remove duplicates from array
const users = [
  { id: 1, name: "John" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane" }
];
const uniqueUsers = uniqueArrayOfObjects(users, "id");

// Format currency
const price = formatToCurrency(1250.75); // "৳ 1,250.75"

// Create query string
const params = { name: "John", age: 30 };
const queryString = objectToQueryString(params); // "name=John&age=30"
```

### Random Generation
```javascript
import { getRandomString, getRandomHexColor, randomNumber } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/index.js";

// Generate random string for session ID
const sessionId = getRandomString(32);

// Generate random color for themes
const themeColor = getRandomHexColor();

// Generate random number for IDs
const userId = randomNumber(1000, 9999);
```

## Features

- **Zero Dependencies** - Pure JavaScript, no external libraries
- **Tree Shakable** - Import only what you need
- **TypeScript Ready** - Full type definitions included
- **Framework Agnostic** - Works with Vue, React, Angular, or vanilla JS
- **Comprehensive Documentation** - Each function has detailed README
- **Modern ES6+** - Uses modern JavaScript features
- **CDN Ready** - Direct import via jsDelivr CDN

## Project Structure

```
src/
├── allow-numbers-and-dot/       # Input restriction utility
├── parse-numeric/              # Numeric validation
├── is-object/                  # Object type checking
├── unique-array-of-objects/    # Array deduplication
├── format-to-currency/         # Currency formatting
├── object-to-query-string/     # URL query utilities
├── copy-table-content/         # DOM manipulation
├── get-random-string/          # String generation
├── is-valid-amount/            # Amount validation
├── is-alphanumeric/            # String validation
├── is-valid-bangladeshi-mobile/ # Phone validation
├── is-email/                   # Email validation
├── is-valid-array/             # Array validation
├── random-number/              # Number generation
├── get-random-hex-color/       # Color generation
├── delay/                      # Async utilities
├── is-trusted-user-event/      # Event validation
├── camel-case-to-kebab-case/   # String transformation
└── index.js                    # Main export file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use in your projects.

## Links

- **GitHub Repository**: [js-utils-library](https://github.com/engr-lukman/js-utils-library)
- **CDN**: https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/index.js
- **Issues**: [Report bugs or request features](https://github.com/engr-lukman/js-utils-library/issues)