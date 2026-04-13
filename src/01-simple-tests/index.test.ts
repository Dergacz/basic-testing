import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).toBe(3);
    expect(simpleCalculator({ a: -1, b: -2, action: Action.Add })).toBe(-3);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Subtract })).toBe(2);
    expect(simpleCalculator({ a: 1, b: 5, action: Action.Subtract })).toBe(-4);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 3, b: 4, action: Action.Multiply })).toBe(12);
    expect(simpleCalculator({ a: -2, b: 3, action: Action.Multiply })).toBe(-6);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 2, action: Action.Divide })).toBe(5);
    expect(simpleCalculator({ a: 7, b: 2, action: Action.Divide })).toBe(3.5);
  });

  test('should exponentiate two numbers', () => {
    expect(
      simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate }),
    ).toBe(8);
    expect(
      simpleCalculator({ a: 3, b: 2, action: Action.Exponentiate }),
    ).toBe(9);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: '%' })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: 'invalid' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: '1', b: 2, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 1, b: '2', action: Action.Add })).toBeNull();
    expect(
      simpleCalculator({ a: true, b: 2, action: Action.Add }),
    ).toBeNull();
  });
});
