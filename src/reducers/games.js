export default (state = null, { type, payload }) => {
  switch (type) {
    case 'GET_GAMES_SUCCEEDED':
      return payload;

    default:
      return state;
  }
};
