export default (state = false, { type }) => {
  switch (type) {
    case 'START':
      return true;

    case 'STOP':
      return false;

    default:
      return state;
  }
};
