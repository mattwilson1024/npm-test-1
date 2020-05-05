import { sum, subtract, multiply } from './main';

describe('example functions', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should subtract two numbers', () => {
    expect(subtract(10, 1)).toBe(9);
  });

  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  })
});