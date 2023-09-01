# Getting Started with react-easy-export

`npm install react-easy-export`
or\
`yard add react-easy-export`

# Usage
# CSV
Exports data as a CSV file.\
@param {Array<Object> | Array<Array<any>>} data - Array of objects or 2D array representing data.\
@param {string} filename - The name of the exported file.\
@param {string} [separator=','] - Separator used between values.
# Example
`
import { exportToCSV } from 'react-export-ease';

const data = [
  { name: "Ethan", dob: "03112003" },
  { name: "Jane", dob: "01011999" }
];

exportToCSV(data, 'users.csv');
`

# Excel
Exports data as an Excel (.xls) file.\
@param {Array<Object> | Array<Array<any>>} data - The data to be exported. Can be an array of objects or a 2D array.\
@param {string} [filename='data.xls'] - Optional. The desired filename of the exported file.\
Note: This method generates an older Excel format (.xls) using an HTML table. It may not support advanced Excel features.
# Example
`
import { exportToExcel } from 'react-export-ease';

const data = [
  ["Name", "DOB"],
  ["Ethan", "03112003"],
  ["Jane", "01011999"]
];

exportToExcel(data, 'users.xlsx');
`

# PDF
Exports data as a PDF file using the browser's print functionality.\
@param {string} content - The HTML content to be printed to PDF.\
@param {string} [filename='data.pdf'] - Suggested name of the exported file (though this can't be enforced through the print dialog).
# Example
`
import { exportToPDF } from 'react-export-ease';

const content = `
  <h1>Users</h1>
  <ul>
    <li>Ethan: 03112003</li>
    <li>Jane: 01011999</li>
  </ul>
`;

exportToPDF(content, 'users.pdf');
`

# Contributing
We welcome contributions! Please open an issue or submit a pull request if you would like to help improve react-export-ease.

# License
MIT\
See LICENSE.md

