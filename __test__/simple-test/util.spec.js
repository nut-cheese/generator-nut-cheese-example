import { expect } from 'chai';
import { randomStr } from '../../src/util/util.js';

describe('Test generate random string function', () => {
  console.log(randomStr(2));
  it('should return current length', () => {
    expect(randomStr(2).length).to.equal(2);
    
  });
});