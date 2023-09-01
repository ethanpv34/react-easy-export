/**
 * Exports data as an Excel (.xls) file.
 * 
 * @param {Array<Object> | Array<Array<any>>} data - The data to be exported. Can be an array of objects or a 2D array.
 * @param {string} [filename='data.xls'] - Optional. The desired filename of the exported file.
 * 
 * Note: This method generates an older Excel format (.xls) using an HTML table. It may not support advanced Excel features.
 */
const exportToExcel = (data, filename = 'data.xls') => {
    if (!Array.isArray(data) || !data.length) {
      throw new Error('Invalid data format. Expected an array of objects or a 2D array.');
    }
  
    let tableContent = '<table border="1">';
  
    if (typeof data[0] === 'object' && !Array.isArray(data[0])) {
      const headers = Object.keys(data[0]);
      tableContent += '<tr>';
      headers.forEach(header => {
        tableContent += `<th>${header}</th>`;
      });
      tableContent += '</tr>';
  
      data.forEach(item => {
        tableContent += '<tr>';
        headers.forEach(header => {
          tableContent += `<td>${item[header] || ''}</td>`;
        });
        tableContent += '</tr>';
      });
  
    } else if (Array.isArray(data[0])) {
      data.forEach(row => {
        tableContent += '<tr>';
        row.forEach(cell => {
          tableContent += `<td>${cell || ''}</td>`;
        });
        tableContent += '</tr>';
      });
    } else {
      throw new Error('Invalid data format. Expected an array of objects or a 2D array.');
    }
  
    tableContent += '</table>';
  
    const uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(tableContent);
    const link = document.createElement('a');
    
    link.setAttribute('href', uri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
};

export default exportToExcel;
