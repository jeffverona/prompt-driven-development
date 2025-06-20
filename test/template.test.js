import { it, expect } from '@jest/globals';

function sum(a, b) {
  return a + b;
}

it('should sum two numbers', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});