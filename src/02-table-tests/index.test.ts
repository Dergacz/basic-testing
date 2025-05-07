import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  // { a: '6', b: 2, action: Action.Add, expected: null },
  // { a: 6, b: 2, action: 'InvalidAction', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return the correct result for %o',
    (testCase: { a: number; b: number; action: Action; expected: number }) => {
      const { a, b, action, expected } = testCase;
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
