# objectToQueryString

A utility function to convert an object into a URL query string.

## Description

The `objectToQueryString` function converts an object with key-value pairs into a properly URL-encoded query string format, handling arrays and special characters.

## Usage

```javascript
import { objectToQueryString } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/object-to-query-string/index.js";

// Simple object
const params1 = { name: "John", age: 30, city: "New York" };
console.log(objectToQueryString(params1));
// Output: "name=John&age=30&city=New%20York"

// Object with arrays
const params2 = { 
  tags: ["javascript", "web development"], 
  category: "programming" 
};
console.log(objectToQueryString(params2));
// Output: "tags=javascript&tags=web%20development&category=programming"

// Object with special characters
const params3 = { 
  query: "hello world", 
  filter: "type=user&status=active" 
};
console.log(objectToQueryString(params3));
// Output: "query=hello%20world&filter=type%3Duser%26status%3Dactive"

// Filtering out null and empty values
const params4 = { 
  name: "John", 
  email: "", 
  phone: null, 
  age: 30 
};
console.log(objectToQueryString(params4));
// Output: "name=John&age=30"
```

## Parameters

- `params` (Object): The object containing key-value pairs to convert to query string

## Returns

- `string`: URL-encoded query string

## Notes

- Automatically URL-encodes keys and values
- Handles array values by creating multiple parameters with the same key
- Filters out null, undefined, and empty string values
- Skips properties with value "null" (string)
- Uses proper URL encoding for special characters
