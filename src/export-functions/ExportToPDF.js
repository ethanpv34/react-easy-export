/**
 * Exports data as a PDF file using the browser's print functionality.
 * @param {string} content - The HTML content to be printed to PDF.
 * @param {string} [filename='data.pdf'] - Suggested name of the exported file (though this can't be enforced through the print dialog).
 */
const exportToPDF = (content, filename = 'data.pdf') => {
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
      alert('Please allow popups to print content.');
      return;
    }
  
    printWindow.document.write(content);
    printWindow.document.title = filename;
    printWindow.document.close();
    printWindow.onload = function() {
      printWindow.print();
      printWindow.onafterprint = function() {
        printWindow.close();
      };
    };
};

// Example usage:
// exportToPDF('<h1>Hello, World!</h1>', 'hello.pdf');
export default exportToPDF;
