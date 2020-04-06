const middle = require('../middle');
const should = require('chai').should();

describe("#middle", () => {
  it('returns [] for [1]', () => {
    output = middle([1]);
    output.should.deep.equal([]);
  });
  it('returns [] for [1, 2]', () => {
    output = middle([1, 2]);
    output.should.deep.equal([]);
  });
  it('for [1, 2, 3] return [2]', () => {
    output = middle([1,2,3]);
    output.should.deep.equal([2]);
  });
  it('for [1, 2, 3, 4, 5] returns [3]', () => {
    output = middle([1, 2, 3, 4, 5]);
    output.should.deep.equal([3]);
  });
  it('for [1, 2, 3, 4] returns [2,3]', () => {
    output = middle([1, 2, 3, 4]);
    output.should.deep.equal([2, 3]);
  });
  it('for [1, 2, 3, 4, 5, 6] returns [3,4]', () => {
    output = middle([1, 2, 3, 4, 5, 6]);
    output.should.deep.equal([3,4]);
  });
});

