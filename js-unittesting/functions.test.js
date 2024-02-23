const { default: expect } = require("expect");
const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
      const num1 = 5;
      const num2 = 5;
    //ACT
      const result = functions.multiply(num1, num2);
    //ASSERT
      expect(result).toBe(25);
  });

  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
      const numero1 = 2;
      const numero2 = 8;
    //ACT
      const result = functions.multiply(numero1, numero2);
    //ASSERT
      expect(result).toBe(16);
  });
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ACT
      const result = functions.isNull();
    //ASSERT
      expect(result).toBeNull();
  });

  /* it('should be return null', () => {
    
  }); */
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
      const value = true;
    //ACT
      const result = functions.checkTruthy(value);
    //ASSERT
      expect(result).toBe(value);
  });

  it('should be return true when I sent true', () => {

  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
      const lastName = 'Mendoza';
    //ACT
      const fullName = functions.addLastName(lastName);
    //ASSERT
      expect(fullName).toEqual({ firstname: 'Pepito', lastname: 'Mendoza' });
  });

  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
      const firstName = 'Erismar';
    //ACT
      const fullName = functions.addFirstName(firstName);
    //ASSERT
      expect(fullName).toEqual({ firstname: 'Erismar', lastname: 'Mendoza' });
  });
})