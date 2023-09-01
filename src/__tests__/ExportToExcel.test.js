import exportToExcel from "../export-functions/ExportToExcel";

describe('exportToExcel', () => {
    let mockElement
    beforeAll(() => {
        mockElement = {
            setAttribute: jest.fn(),
            click: jest.fn(),
            appendChild: jest.fn(),
            removeChild: jest.fn(),
        };
            
        document.createElement = jest.fn(() => mockElement);
        document.body.appendChild = jest.fn();
        document.body.removeChild = jest.fn();
    });
  
    it('should export data from array of objects', () => {
      const sampleData = [
        { name: 'Ethan', dob: '03112003' },
        { name: 'Jane', dob: '01011999' },
      ];
      const expectedTableContent = '<table border="1"><tr><th>name</th><th>dob</th></tr><tr><td>Ethan</td><td>03112003</td></tr><tr><td>Jane</td><td>01011999</td></tr></table>';
      const expectedURI = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(expectedTableContent);
  
      exportToExcel(sampleData, 'people_objects.xls');
  
      expect(mockElement.setAttribute).toHaveBeenCalledWith('href', expectedURI);
    });
  
    it('should export data from 2D array', () => {
      const sampleData = [['Ethan', '03112003'], ['Jane', '01011999']];
      const expectedTableContent = '<table border="1"><tr><td>Ethan</td><td>03112003</td></tr><tr><td>Jane</td><td>01011999</td></tr></table>';
      const expectedURI = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(expectedTableContent);
  
      exportToExcel(sampleData, 'people_array.xls');
  
      expect(mockElement.setAttribute).toHaveBeenCalledWith('href', expectedURI);
    });
  
    it('should throw error for invalid data', () => {
      expect(() => {
        exportToExcel('invalid', 'error.xls');
      }).toThrow('Invalid data format. Expected an array of objects or a 2D array.');
    });
});
