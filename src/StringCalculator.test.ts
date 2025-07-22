import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('returns 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('returns the number itself for a single number', () => {
    expect(calculator.add('2')).toBe(2);
  });

  it('returns the sum for two comma-separated numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  it('returns the sum for any amount of comma-separated numbers', () => {
    expect(calculator.add('1,2,3,4')).toBe(10);
    expect(calculator.add('5,5,5,5,5')).toBe(25);
  });

  it('returns the sum when new lines are used as delimiters', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
    expect(calculator.add('4,5\n6')).toBe(15);
  });

  it('supports custom delimiters specified in the format //;\n1;2', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
    expect(calculator.add('//#\n2#3#4')).toBe(9);
  });

  it('throws an error for invalid input with unsupported delimiters', () => {
    expect(() => calculator.add('234+1')).toThrow('Invalid input');
  });
}); 