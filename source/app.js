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
 * Constructor declarate new object.
 */
Bm.init({
  init: '#easy',
  goes: 'THERE',
});
