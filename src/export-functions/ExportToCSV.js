/**
 * Exports data as a CSV file.
 * @param {Array<Object> | Array<Array<any>>} data - Array of objects or 2D array representing data.
 * @param {string} filename - The name of the exported file.
 * @param {string} [separator=','] - Separator used between values.
 */
const exportToCSV = (data, filename = 'data.csv', separator = ',') => {
    if (!Array.isArray(data) || !data.length) {
      throw new Error('Invalid data format. Expected an array of objects or a 2D array.');
    }
  
    let headers = [];
    let csvContent = '';
  
    if (typeof data[0] === 'object' && !Array.isArray(data[0])) {
      headers = Object.keys(data[0]);
  
      csvContent += headers.join(separator) + '\r\n';
  
      data.forEach(item => {
        const row = headers.map(header => {
          let cell = item[header];
  
          if (typeof cell === 'string' && cell.includes(separator)) {
            cell = `"${cell}"`;
          }
          return cell;
        });
  
        csvContent += row.join(separator) + '\r\n';
      });
  
    } else if (Array.isArray(data[0])) {
      data.forEach(row => {
        csvContent += row.map(cell => {
          if (typeof cell === 'string' && cell.includes(separator)) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator) + '\r\n';
      });
  
    } else {
      throw new Error('Invalid data format. Expected an array of objects or a 2D array.');
    }
  
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
  
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
  
    link.click();
  
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export default exportToCSV;
