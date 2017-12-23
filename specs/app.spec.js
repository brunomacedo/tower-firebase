// import { expect } from 'chai';
const expect = require('chai').expect;

describe('App', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('Should have a size of 4 when push another value to the array.', () => {
        const arr = [1, 2, 3];
        arr.push(4);
        // console.log(arr.length);
        expect(arr).to.have.lengthOf(3);
      });
    });
  });
});
