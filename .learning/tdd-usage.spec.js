// import { expect } from 'chai';
const expect = require('chai').expect;

describe('App', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      /**
       * MOCHA HOOKS
       * before, after, beforeEach, afterEach
       */
      let arr = [];
      beforeEach('Add variable `arr`.', () => {
        arr = [1, 2, 3];
      });

      /**
       * SMOKE TEST
       * It means that it is the first and simple test.
       */
      it('Should be an array.', () => {
        expect(arr).to.be.an('array');
      });

      /**
       * Examples
       */
      it('Should have a size of 4 when push another value to the array.', () => {
        arr.push(1);
        expect(arr).to.have.lengthOf(4);
      });

      it('Should remove the value 3 when use pop into the array.', () => {
        arr.pop();
        expect(arr).to.not.include(3);
      });
    });
  });
});
