# allowNumbersAndDot

A utility function to restrict input fields to only accept numbers and dots.

## Description

The `allowNumbersAndDot` function is an event handler that prevents users from typing anything other than numeric digits (0-9) and dots (.) in input fields. It's designed to be used with keyboard event handlers.

## Usage

```javascript
import { allowNumbersAndDot } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/allow-numbers-and-dot/index.js";

// HTML
// <input type="text" id="priceInput" placeholder="Enter price">

// JavaScript - Vanilla
const priceInput = document.getElementById('priceInput');
priceInput.addEventListener('keydown', allowNumbersAndDot);

// React example
function PriceInput() {
  return (
    <input 
      type="text" 
      onKeyDown={allowNumbersAndDot}
      placeholder="Enter price"
    />
  );
}

// Vue example
<template>
  <input 
    type="text" 
    @keydown="allowNumbersAndDot"
    placeholder="Enter price"
  />
</template>

// Multiple inputs
const numericInputs = document.querySelectorAll('.numeric-only');
numericInputs.forEach(input => {
  input.addEventListener('keydown', allowNumbersAndDot);
});
```

## Parameters

- `evt` (KeyboardEvent): The keyboard event object from the input field

## Returns

- `void`: This function doesn't return a value, it modifies the event behavior

## Allowed Characters

- **Numbers**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- **Decimal Point**: . (dot/period)

## Blocked Characters

- Letters (a-z, A-Z)
- Special characters (!, @, #, $, %, etc.)
- Spaces
- All other non-numeric characters

## Notes

- Uses `evt.preventDefault()` to block unwanted characters
- Works with `keydown` events
- Allows functional keys (Backspace, Delete, Arrow keys, etc.) to work normally
- Perfect for price, decimal number, and currency input fields
- Does not validate for multiple dots - consider additional validation for that
