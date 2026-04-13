import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 10, b: 7, action: Action.Subtract, expected: 3 },
  { a: 3, b: 4, action: Action.Multiply, expected: 12 },
  { a: -2, b: 3, action: Action.Multiply, expected: -6 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 7, b: 2, action: Action.Divide, expected: 3.5 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 1, b: 2, action: '%', expected: null },
  { a: '1', b: 2, action: Action.Add, expected: null },
  { a: 1, b: '2', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected for a=$a, b=$b, action=$action',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
