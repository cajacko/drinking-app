const { List } = require('immutable');

const init = List([1, 2]);

export default (state = init, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
