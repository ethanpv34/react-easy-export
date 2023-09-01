# Getting Started with react-easy-export

`npm install react-easy-export`
or\
`yard add react-easy-export`

# Usage
# CSV
Exports data as a CSV file.\
@param {Array<Object> | Array<Array<any>>} data - Array of objects or 2D array representing data.\
@param {string} [filename=data.csv'] - Optional. The name of the exported file.\
@param {string} [separator=','] - Optional. Separator used between values.
# Example
```
import { exportToCSV } from 'react-export-ease';

const data = [
  { name: "Ethan", gender: "male" },
  { name: "Jane", gender: "female" }
];

exportToCSV(data, 'users.csv');
// Alternatively:
exportToCSV(content);
```

# Excel
Exports data as an Excel (.xls) file.\
@param {Array<Object> | Array<Array<any>>} data - The data to be exported. Can be an array of objects or a 2D array.\
@param {string} [filename='data.xls'] - Optional. Name of the exported file.\
Note: This method generates an older Excel format (.xls) using an HTML table. It may not support advanced Excel features.
# Example
```
import { exportToExcel } from 'react-export-ease';

const data = [
  ["Name", "Gender"],
  ["Ethan", "Male"],
  ["Jane", "Female"]
];

exportToExcel(data, 'users.xlsx');
// Alternatively:
exportToExcel(content);
```

# PDF
Exports HTML as a PDF file.\
@param {string} content - The HTML content to be printed to PDF.\
@param {string} [filename='data.pdf'] - Optional. Name of the exported file (though this can't be enforced through the print dialog).
# Example
```
import { exportToPDF } from 'react-export-ease';

const content = `
  <h1>Users</h1>
  <ul>
    <li>Ethan: male</li>
    <li>Jane: female</li>
  </ul>
`;

exportToPDF(content, 'users.pdf');
// Alternatively:
exportToPDF(content);
```

# Contributing
We welcome contributions! Please open an issue or submit a pull request if you would like to help improve react-easy-export.

# License
MIT\
See LICENSE.md
