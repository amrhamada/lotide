const tail = require('../tail');
const assert = require('chai').assert;
const should = require('chai').should();

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    output = tail(["Hello", "Lighthouse", "Labs"]);
    output.should.equal(output,["Lighthouse", "Labs"]);
    output.should.have.lengthOf(2);
    output[0].should.equal('Lighthouse');
    output[1].should.equal('Labs');
  });
});

