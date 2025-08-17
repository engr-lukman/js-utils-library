# onCopyTableContent

A utility function to copy table content to clipboard.

## Description

The `onCopyTableContent` function selects and copies the entire content of a table element to the system clipboard using the deprecated `document.execCommand` method.

## Usage

```javascript
import { onCopyTableContent } from "https://cdn.jsdelivr.net/gh/engr-lukman/js-utils-library@main/src/copy-table-content/index.js";

// HTML
// <table id="myTable">
//   <tr><th>Name</th><th>Age</th></tr>
//   <tr><td>John</td><td>30</td></tr>
//   <tr><td>Jane</td><td>25</td></tr>
// </table>
// <button onclick="copyTable()">Copy Table</button>

function copyTable() {
  onCopyTableContent("myTable");
  alert("Table content copied to clipboard!");
}
```

## Parameters

- `tblId` (string): The ID of the table element to copy

## Returns

- `void`: This function doesn't return a value

## Notes

- **Deprecated Method**: This function uses `document.execCommand("copy")` which is deprecated
- **Browser Support**: May not work in all modern browsers
- **Alternative Recommended**: Consider using the modern Clipboard API instead:
  ```javascript
  // Modern alternative
  const table = document.getElementById(tblId);
  navigator.clipboard.writeText(table.innerText);
  ```
- **Security**: Requires user interaction to work properly
- **Table Selection**: Selects the entire table content including HTML structure
