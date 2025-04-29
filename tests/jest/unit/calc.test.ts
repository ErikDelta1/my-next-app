import { describe, test, expect } from '@jest/globals';
import { add, subtract, multiply, divide } from '../../../lib/calc';

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('subtract', () => {
  test('subtracts two number correctly', () => {
    expect(subtract(3, 2)).toBe(1);
  });
});

describe('multiplication', () => {
  test('multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('division', () => {
  test('divide two number correctly', () => {
    expect(divide(6, 3)).toBe(2);
  });
});