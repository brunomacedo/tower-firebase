/**
 * SHORTHAND PROPERTIES
 * We can using it with functions and objects as the same property name.
 * Ex. 1 Functions.
 */
const Bm = {
  init(obElements) {
    this.validate.init(obElements);
  },
  validate: {
    init(element) {
      const backThis = element;
      this.message.show(backThis);
    },
    message: {
      show(msg) {
        return msg.goes;
      },
    },
  },
};

/**
 * Constructor declarate new object algorithm.
 */
Bm.init({
  init: '#easy',
  goes: 'THERE',
});

/**
 * SHOTHAND PROPERTIES
 * Ex. 2 Objects.
 */
const brand = 'BMW';
const model = 'Vehicles';
const newObj = {
  brand,
  model,
};
const newObjFunc = () => newObj;
newObjFunc();
// console.log(newObjFunc());

/**
 * DESTRUCTING
 * We can set default value and change the property name.
 * However, we can use it with Arrays and Objects.
 */
const obj = {
  name: 'Bruno',
  surname: 'Macedo',
};

const { name: newName = 'Non-name', surname: newSurname = 'Non-surname' } = obj;
const runDestructin = () => newName + newSurname;
runDestructin();
// console.log(runDestructin());

/**
 * DESTRUCTING SWAP
 * Change variables values to each other.
 */
let letterA = 10;
let letterB = 5;
[letterA, letterB] = [letterB, letterA];
// console.log(`A: ${letterA.toFixed(2)} => B: ${letterB.toFixed(2)}`);
