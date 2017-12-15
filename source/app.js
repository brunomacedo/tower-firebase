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
 * SHORTHAND PROPERTIES
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
const runDestructing = () => newName + newSurname;
runDestructing();
// console.log(runDestructing());

/**
 * DESTRUCTING SWAP
 * Change variables values to each other.
 */
let letterA = 10;
let letterB = 5;
[letterA, letterB] = [letterB, letterA];
// console.log(`A: ${letterA.toFixed(2)} => B: ${letterB.toFixed(2)}`);

/**
 * SPREAD OPERATOR
 * Add elements into array without push function.
 */
const front = ['angular', 'vue', 'react'];
const back = ['node', 'python', 'php'];
const fullstack = [...front, 'rxjs', ...back];
// const fullstack = [].concat(front, ['rxjs'], back);
const runSpreadAdd = () => fullstack;
runSpreadAdd();
// console.log(runSpreadAdd());

/**
 * SPREAD OPERATOR
 * Using spread operator with parameters in functions.
 */
const spreadFunc = {
  init(bread, cheese, salad) {
    return `Your sandwich recipe contains ${bread} and ${cheese} and ${salad}.`;
  },
};
const recipe = ['Australian bread', 'cheddar', 'lettuce and tomato'];
const getRecipe = () => spreadFunc.init(...recipe);
getRecipe();
// console.log(getRecipe());

/**
 * REST PARAMS
 * It works like spread operator.
 */
const multiply = (mult, ...args) => args.map(items => items * mult);
multiply();
// console.log(multiply(3, 5, 6, 8));

/**
 * PROMISES
 */
const defer = new Promise((resolve) => {
  const isTrue = true;
  setTimeout(() => {
    if (isTrue) {
      resolve('Hello, it works!');
    }
    /**
      else {
        reject('Error!');
      }
     */
  }, 2000);
});

defer
  .then(data => data);
// .catch(err => console.log(err));

/**
 * PROTOTYPE
 * CLASS AND CONSTRUCTOR [ES6]
 */
class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }

  hello() {
    return `${this.sound} I'm a ${this.kind}`;
  }
}

const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'meaw');
dog.hello();
cat.hello();
// console.log(cat.hello());
// console.log(dog.hello());

/**
 * THE SAME THING WITH [ES5]
 * PROTOTYPE CLASS
  var Animal = function () {
    function Animal(kind, sound) {
      this.kind = kind;
      this.sound = sound;
    }

    Animal.prototype.hello = function hello() {
      return this.sound + ' I\'m a ' + this.kind;
    };

    return Animal;
  }();

  var dog = new Animal('dog', 'auau');
  var cat = new Animal('cat', 'meaw');
  console.log(cat.hello());
  console.log(dog.hello());
 */
