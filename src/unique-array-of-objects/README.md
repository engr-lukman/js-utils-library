# uniqueArrayOfObjects

A utility function to filter unique objects from an array based on a specific property.

## Description

The `uniqueArrayOfObjects` function takes an array of objects and returns a new array containing only the first occurrence of objects with unique values for a specified property.

## Usage

```javascript
import { uniqueArrayOfObjects } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/unique-array-of-objects/index.js";

// Example data
const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" },
  { id: 3, name: "John", email: "john2@example.com" },
  { id: 1, name: "Johnny", email: "johnny@example.com" }
];

// Get unique users by id
const uniqueById = uniqueArrayOfObjects(users, "id");
// Result: [{ id: 1, name: "John", email: "john@example.com" }, { id: 2, name: "Jane", email: "jane@example.com" }, { id: 3, name: "John", email: "john2@example.com" }]

// Get unique users by name
const uniqueByName = uniqueArrayOfObjects(users, "name");
// Result: [{ id: 1, name: "John", email: "john@example.com" }, { id: 2, name: "Jane", email: "jane@example.com" }]
```

## Parameters

- `array` (Array): The array of objects to filter
- `propertyName` (string): The property name to check for uniqueness

## Returns

- `Array`: A new array containing only objects with unique values for the specified property

## Notes

- Only the first occurrence of each unique value is kept
- Uses Set for efficient uniqueness checking
- Returns undefined if array is null or undefined
- Maintains the original order of elements
