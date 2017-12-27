import { expect } from 'chai';
import { sum, sub, mult, div } from '../source/app';

describe('Calc', () => {
  context('Smoke tests', () => {
    it('Should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('Should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('Should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('Should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  context('Sum', () => {
    it('Should be equal 5 when sum: 2 + 3', () => {
      expect(sum(2, 3)).to.be.equal(5);
    });
  });
});
