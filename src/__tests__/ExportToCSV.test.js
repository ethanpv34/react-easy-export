import exportToCSV from "../export-functions/ExportToCSV";

describe('exportToCSV', () => {
    beforeAll(() => {
      global.URL.createObjectURL = jest.fn();
      global.URL.revokeObjectURL = jest.fn();
      document.createElement = jest.fn(() => ({
        setAttribute: jest.fn(),
        click: jest.fn(),
        appendChild: jest.fn(),
        removeChild: jest.fn(),
      }));
      document.body.appendChild = jest.fn();
      document.body.removeChild = jest.fn();
    });
  
    it('should export data from array of objects', () => {
      const sampleData = [
        { name: 'Ethan', dob: '03112003' },
        { name: 'Jane', dob: '01011999' },
      ];
      const expectedCSVContent = 'name,dob\r\nEthan,03112003\r\nJane,01011999\r\n';
  
      exportToCSV(sampleData, 'people_objects.csv');
  
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(new Blob([expectedCSVContent], { type: 'text/csv;charset=utf-8;' }));
    });
  
    it('should export data from 2D array', () => {
      const sampleData = [['Ethan', '03112003'], ['Jane', '01011999']];
      const expectedCSVContent = 'Ethan,03112003\r\nJane,01011999\r\n';
  
      exportToCSV(sampleData, 'people_array.csv');
  
      expect(global.URL.createObjectURL).toHaveBeenCalledWith(new Blob([expectedCSVContent], { type: 'text/csv;charset=utf-8;' }));
    });
  
    it('should throw error for invalid data', () => {
      expect(() => {
        exportToCSV('invalid', 'error.csv');
      }).toThrow('Invalid data format. Expected an array of objects or a 2D array.');
    });
});
