# delay

A utility function to create delays in asynchronous code execution.

## Description

The `delay` function creates a promise-based delay that can be used with async/await or .then() to pause code execution for a specified amount of time.

## Usage

```javascript
import { delay } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/delay/index.js";

// Using async/await
async function example() {
  console.log("Starting...");
  await delay(2000); // Wait 2 seconds
  console.log("2 seconds later");
  
  await delay(); // Default 500ms delay
  console.log("500ms later");
}

// Using .then()
delay(1000).then(() => {
  console.log("This runs after 1 second");
});

// Sequential delays
async function loadingAnimation() {
  console.log("Loading.");
  await delay(500);
  console.log("Loading..");
  await delay(500);
  console.log("Loading...");
  await delay(500);
  console.log("Complete!");
}

// Rate limiting API calls
async function fetchWithDelay(url) {
  const response = await fetch(url);
  await delay(1000); // Wait 1 second between requests
  return response.json();
}
```

## Parameters

- `time` (number, default: 500): The delay time in milliseconds

## Returns

- `Promise`: A promise that resolves after the specified time

## Use Cases

- **Rate Limiting**: Throttle API calls or operations
- **Animation Timing**: Control timing in animations
- **User Experience**: Add deliberate pauses for better UX
- **Testing**: Simulate network delays in tests
- **Loading States**: Control loading animations

## Notes

- Uses `setTimeout` internally wrapped in a Promise
- Non-blocking - other code can continue executing
- Perfect for async/await patterns
- Default delay is 500 milliseconds
- Can be chained with other promises
