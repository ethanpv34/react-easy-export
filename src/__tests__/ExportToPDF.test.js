import exportToPDF from "../export-functions/ExportToPDF";

describe('exportToPDF', () => {
    let mockWindow;
    beforeAll(() => {
      mockWindow = {
        document: {
          write: jest.fn(),
          title: '',
          close: jest.fn(),
        },
        onload: jest.fn(),
        print: jest.fn(),
        onafterprint: jest.fn(),
        close: jest.fn(),
      };
      window.open = jest.fn(() => mockWindow);
  
      window.alert = jest.fn();
    });
  
    it('should export given content to a new window', () => {
      const content = '<h1>Sample Content</h1>';
      exportToPDF(content, 'sample.pdf');
  
      expect(window.open).toHaveBeenCalledWith('', '_blank');
      expect(mockWindow.document.write).toHaveBeenCalledWith(content);
      expect(mockWindow.document.title).toBe('sample.pdf');
    });
  
    it('should handle blocked popups', () => {
      window.open = jest.fn(() => null);
  
      exportToPDF('<h1>Blocked Popup</h1>', 'blocked.pdf');
  
      expect(window.alert).toHaveBeenCalledWith('Please allow popups to print content.');
    });
  
    it('should trigger print once content is loaded', () => {
      window.open = jest.fn(() => mockWindow);
  
      exportToPDF('<h1>Print Test</h1>', 'print.pdf');
  
      mockWindow.onload();
  
      expect(mockWindow.print).toHaveBeenCalled();
    });
  
    it('should close print window after printing', () => {
      window.open = jest.fn(() => mockWindow);
  
      exportToPDF('<h1>Close Test</h1>', 'close.pdf');
  
      mockWindow.onload();
      mockWindow.onafterprint();
  
      expect(mockWindow.close).toHaveBeenCalled();
    });
});
