import { sum } from './main';

describe('example functions', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  })
});