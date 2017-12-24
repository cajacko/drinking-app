export default (state = null, { type, payload }) => {
  switch (type) {
    case 'START':
      return payload;

    default:
      return state;
  }
};
