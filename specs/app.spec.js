import { expect } from 'chai';
import { sum, sub, mult, div } from '../source/app';

describe('Calculate', () => {
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

  context('Subtract', () => {
    it('Should be equal 1 when sub: 3 - 1', () => {
      expect(sub(3, 1)).to.be.equal(2);
    });

    it('Should be equal -1 (negative value) when sub: 2 - 3', () => {
      expect(sub(2, 3)).to.be.equal(-1);
    });
  });

  context('Multiply', () => {
    it('Should be equal 10 when mult: 5 x 2', () => {
      expect(mult(5, 2)).to.be.equal(10);
    });

    it('Should be equal 0 when mult: any x 0', () => {
      expect(mult(121, 0)).to.be.equal(0);
    });
  });

  context('Divide', () => {
    it('Should be equal 10 when div: 100 / 10', () => {
      expect(div(100, 10)).to.be.equal(10);
    });

    it('Should be equal 2.5 when div: 5 / 2', () => {
      expect(div(5, 2)).to.be.equal(2.5);
    });
  });
});
